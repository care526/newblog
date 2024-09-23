# KeepAlive

## Props

- include 字符串或正则表达式。只有名称匹配的组件会被缓存
- exclude 字符串或正则表达式。任何名称匹配的组件都不会被缓存
- max 数字。最多可以缓存多少组件实例

```ts
import { isRegExp, isArray, remove } from 'shared/util';
import { getFirstComponentChild } from 'core/vdom/helpers/index';
import type VNode from 'core/vdom/vnode';
import type { VNodeComponentOptions } from 'types/vnode';
import type { Component } from 'types/component';
import { getComponentName } from '../vdom/create-component';

type CacheEntry = {
  name?: string;
  tag?: string;
  componentInstance?: Component;
};

type CacheEntryMap = Record<string, CacheEntry | null>;

function _getComponentName(opts?: VNodeComponentOptions): string | null {
  return opts && (getComponentName(opts.Ctor.options as any) || opts.tag);
}

function matches(pattern: string | RegExp | Array<string>, name: string): boolean {
  if (isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(
  keepAliveInstance: {
    cache: CacheEntryMap;
    keys: string[];
    _vnode: VNode;
    $vnode: VNode;
  },
  filter: Function
) {
  const { cache, keys, _vnode, $vnode } = keepAliveInstance;
  for (const key in cache) {
    const entry = cache[key];
    if (entry) {
      const name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
  $vnode.componentOptions!.children = undefined;
}

function pruneCacheEntry(cache: CacheEntryMap, key: string, keys: Array<string>, current?: VNode) {
  const entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    // @ts-expect-error can be undefined
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

const patternTypes: Array<Function> = [String, RegExp, Array];

export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number],
  },

  methods: {
    cacheVNode() {
      const { cache, keys, vnodeToCache, keyToCache } = this;
      if (vnodeToCache) {
        const { tag, componentInstance, componentOptions } = vnodeToCache;
        cache[keyToCache] = {
          name: _getComponentName(componentOptions),
          tag,
          componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    },
  },

  created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted() {
    this.cacheVNode();
    this.$watch('include', (val) => {
      pruneCache(this, (name) => matches(val, name));
    });
    this.$watch('exclude', (val) => {
      pruneCache(this, (name) => !matches(val, name));
    });
  },

  updated() {
    this.cacheVNode();
  },

  render() {
    const slot = this.$slots.default;
    // 获取第一个子组件
    const vnode = getFirstComponentChild(slot);
    const componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      const name = _getComponentName(componentOptions);
      const { include, exclude } = this;

      // 不存在 || 被排除 直接返回新的实例
      if ((include && (!name || !matches(include, name))) || (exclude && name && matches(exclude, name))) {
        return vnode;
      }

      const { cache, keys } = this;
      const key =
        vnode.key == null
          ? // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
          : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      // 标记一下组件被缓存了
      vnode.data.keepAlive = true;
    }

    return vnode || (slot && slot[0]);
  },
};
```
