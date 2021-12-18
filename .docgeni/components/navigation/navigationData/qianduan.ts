import { MenuItem } from './type';

const qianduan: MenuItem = {
  text: '前端',
  children: [
    {
      text: '社区',
      children: [
        {
          text: '掘金',
          link: 'https://juejin.im/',
          logo: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        },
        { text: '思否', link: 'https://segmentfault.com/', logo: 'https://pic2.zhimg.com/50/2274f6f8f0806aa566bd065905eebc81_s.jpg' },
        { text: '前端乱炖', link: 'http://www.html-js.com/', logo: 'http://caibaojian.com/favicon.ico' },
        { text: '云栖社区', link: 'https://yq.aliyun.com/', logo: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico' },
        { text: 'W3school', link: 'https://www.w3school.com.cn/index.html', logo: 'https://www.w3school.com.cn/ui2019/logo-32-red.png' },
        { text: 'coderplanets', link: 'https://coderplanets.com/home/posts', logo: 'https://coderplanets.com/favicon.ico' },
        {
          text: 'Web前端导航',
          link: 'http://www.alloyteam.com/nav/',
          logo: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66f2e833f0264db39f6109c0afb3b7a3~tplv-k3u1fbpfcp-watermark.image',
        },
        {
          text: '力扣',
          link: 'https://leetcode-cn.com/',
          logo: 'https://assets.leetcode-cn.com/aliyun-lc-upload/uploaded_files/2021/03/73c9f099-abbe-4d94-853f-f8abffd459cd/leetcode.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp',
        },
        { text: 'HelloGitHub', link: 'https://hellogithub.com/', logo: 'https://hellogithub.com/favicon.ico' },
        {
          text: '编程导航',
          link: 'https://www.code-nav.cn/recommend',
          logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
        },
        { text: 'learnku', link: 'https://learnku.com/', logo: 'https://cdn.learnku.com/uploads/images/201901/24/1/OyBnfB2vlk.png' },
      ],
    },
    {
      text: '源码',
      children: [
        {
          text: '网易云NodeJS API',
          link: 'https://binaryify.github.io/NeteaseCloudMusicApi/#/',
          logo: 'https://binaryify.github.io/NeteaseCloudMusicApi/favicon.ico',
        },
        {
          text: '前端开发知识结构',
          link: 'https://github.com/JacksonTian/fks',
          logo: 'https://github.githubassets.com/favicons/favicon.png',
        },
        {
          text: '正则表达式',
          link: 'https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md',
          logo: 'https://github.githubassets.com/favicons/favicon.png',
        },
      ],
    },
    {
      text: '个人博客',
      children: [
        { text: 'fouber', link: 'https://github.com/fouber/blog', logo: 'https://github.com/fluidicon.png' },
        { text: 'Li Mei', link: 'https://limeii.github.io', logo: 'https://limeii.github.io/assets/images/favicon.png' },
        { text: '麻凯倩', link: 'http://makaiqian.com/', logo: 'http://makaiqian.com/favicon.ico' },
      ],
    },
    {
      text: '知乎',
      children: [
        { text: '黄玄', link: 'https://www.zhihu.com/people/huxpro', logo: 'https://pic2.zhimg.com/v2-2a2bfb7617ff3566b4a5610a655bcc65_xl.jpg' }
        { text: '徐海峰', link: 'https://www.zhihu.com/people/why520crazy', logo: 'https://pic3.zhimg.com/ccf676352_xl.jpg' }
      ],
    },
    {
      text: 'CSS',
      children: [
        { text: 'CSS速查总表', link: 'http://css.yanzhihui.com/', logo: 'http://css.yanzhihui.com/images/favicon.ico' },
        { text: 'Sass', link: 'https://www.sass.hk/', logo: 'https://www.sass.hk/favicon.ico' },
        { text: 'Less', link: 'https://less.bootcss.com/', logo: 'https://less.bootcss.com/public/ico/favicon.ico' },
        { text: 'Stylus', link: 'https://stylus.bootcss.com/', logo: 'https://www.stylus-lang.cn/favicon.ico' },
        { text: '兼容性', link: 'https://caniuse.com/', logo: 'https://caniuse.com/img/favicon-128.png' },
        { text: 'CSS奇技淫巧', link: 'https://github.com/chokcoco/iCSS', logo: 'https://github.com/fluidicon.png' },
      ],
    },
    {
      text: 'Icon',
      children: [
        { text: 'easyicon', link: 'https://www.easyicon.cc/', logo: 'https://www.easyicon.cc/favicon.ico' },
        {
          text: 'iconfont',
          link: 'https://www.iconfont.cn/home/index',
          logo: 'https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico',
        },
        {
          text: 'iconPark',
          link: 'http://iconpark.bytedance.com/',
          logo: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        },
        { text: 'undraw', link: 'https://undraw.co/illustrations', logo: 'https://undraw.co/favicon.ico' },
      ],
    },
    {
      text: '图表',
      children: [
        {
          text: 'echarts',
          link: 'https://echarts.apache.org/zh/index.html',
          logo: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png',
        },
        { text: 'antv', link: 'https://antv.gitee.io/zh', logo: 'https://antv.gitee.io/favicon-32x32.png' },
      ],
    },
    {
      text: 'JS',
      children: [{ text: 'ES6入门', link: 'https://es6.ruanyifeng.com/', logo: 'https://es6.ruanyifeng.com/favicon.ico' }],
    },
    {
      text: 'TS',
      children: [
        { text: 'TS文档', link: 'https://www.tslang.cn/docs/home.html', logo: 'https://www.tslang.cn/assets/images/icons/favicon.ico' },
        {
          text: 'Handbook',
          link: 'https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html',
          logo: 'https://gstatic.gitbook.com/images/b1c4c86ca817a71628d2debe73be9a64.ico',
        },
      ],
    },
    {
      text: '浏览器',
      children: [{ text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/', logo: 'https://developer.mozilla.org/favicon-192x192.png' }],
    },
    {
      text: '打包',
      children: [
        { text: 'webpack文档', link: 'https://www.webpackjs.com/concepts/', logo: 'https://www.webpackjs.com/assets/favicon.ico' },
        { text: 'Rollup', link: 'https://www.rollupjs.com/', logo: 'https://www.rollupjs.com/img/favicon.png' },
      ],
    },
    {
      text: 'Electron',
      children: [{ text: 'Electron', link: 'https://www.electronjs.org/docs', logo: 'https://www.electronjs.org/assets/img/favicon.ico' }],
    },
    {
      text: 'Node',
      children: [
        { text: 'Node文档', link: 'http://nodejs.cn/api/index.html', logo: 'http://img.nodejs.cn/favicon.png' },
        { text: 'Deno文档', link: 'https://deno.land', logo: 'https://deno.land/logo.svg' },
        {
          text: 'Learn Node.js',
          link: 'https://frontendmasters.com/books/front-end-handbook/2018/learning/node.html',
          logo: 'https://frontendmasters.com/guides/front-end-handbook/2018/gitbook/images/favicon.ico',
        },
        { text: 'Express', link: 'https://www.expressjs.com.cn', logo: 'https://www.expressjs.com.cn/images/favicon.png' },
        { text: 'Egg', link: 'https://eggjs.org/zh-cn/', logo: 'https://eggjs.org/images/favicon.png' },
        { text: 'Neon', link: 'https://neon-bindings.com/', logo: 'https://neon-bindings.com/logo/letter-logo-alpha.png' },
      ],
    },
    {
      text: '函数式',
      children: [
        {
          text: 'Underscore.js',
          link: 'https://underscorejs.bootcss.com/#contains',
          logo: 'https://www.underscorejs.com.cn/img/favicon.ico',
        },
        { text: 'lodash', link: 'https://lodash.com', logo: 'https://lodash.com/assets/img/lodash.svg' },
        { text: 'RxJs', link: 'https://cn.rx.js.org/manual/installation.html', logo: 'https://cn.rx.js.org/favicon.ico' },
        { text: '知乎RxJs专栏', link: 'https://zhuanlan.zhihu.com/learing-rxjs', logo: 'https://static.zhihu.com/heifetz/favicon.ico' },
        {
          text: 'RxJs操作符',
          link: 'https://rxjs-cn.github.io/learn-rxjs-operators/operators/combination/combineall.html',
          logo: 'https://rxjs-cn.github.io/learn-rxjs-operators/gitbook/images/favicon.ico',
        },
      ],
    },
  ],
};

export default qianduan;
