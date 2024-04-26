# RxJs

## Observable

可观察对象  
运算是同步的

```ts
type PartialObserver<T> = NextObserver<T> | ErrorObserver<T> | CompletionObserver<T>;
interface Subscribable<T> {
  subscribe(observer?: PartialObserver<T>): Unsubscribable;
  // ... 其他的重载
}
class Observable<T> implements Subscribable<T> {
  public _isScalar: boolean = false;
  source: Observable<any>; // 保存的自身上层管道前的 Observable
  operator: Operator<any, T>;

  // 注意下，两种情况创建
  // 1、通过 new Observable(subscribe)
  // 2、通过 pipe 生成
  constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  lift<R>(operator: Operator<T, R>): Observable<R> {
    const observable = new Observable<R>();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observer?: PartialObserver<T>): Subscription {
    // 如果 operator 存在执行
    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(
        this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable)
          ? this._subscribe(sink)
          : this._trySubscribe(sink)
      );
    }
  }
  // _trySubscribe(sink: Subscriber<T>): TeardownLogic {}
  forEach(next: (value: T) => void, promiseCtor?: PromiseConstructorLike): Promise<void> {}

  _subscribe(subscriber: Subscriber<any>): TeardownLogic {
    const { source } = this;
    return source && source.subscribe(subscriber);
  }

  lift<R>(operator: Operator<T, R>): Observable<R> {
    const observable = new Observable<R>();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }

  pipe(...operations: OperatorFunction<any, any>[]): Observable<any> {
    // pipeFromArray(operations)
    // (source: Observable<T>) => Observable
    return pipeFromArray(operations)(this);
  }
  toPromise(promiseCtor?: PromiseConstructorLike): Promise<T> {}
}
```

```ts
function pipeFromArray<T, R>(fns: Array<UnaryFunction<T, R>>): UnaryFunction<T, R> {
  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input: T): R {
    return fns.reduce((prev: any, fn: UnaryFunction<T, R>) => fn(prev), input as any);
  };
}
```

```ts
interface UnaryFunction<T, R> {
  (source: T): R;
}
function identity<T>(x: T): T {
  return x;
}
```

> 例子

```ts
new Observable((Observer) => {
  let timer = setInterval(() => {}, 1000);

  return () => {
    clearInterval(timer);
    timer = null;
  };
});
```

## Observer

观察者

```ts
// 抽象类
interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```

## Subscriber

订阅者

```ts
class Subscriber<T> extends Subscription implements Observer<T> {
  // 当前订阅者停止，error complete 都会导致停止
  protected isStopped: boolean = false;
  // 传入的订阅执行方法
  protected destination: PartialObserver<any> | Subscriber<any>;

  constructor(destinationOrNext?: PartialObserver<any> | ((value: T) => void), error?: (e?: any) => void, complete?: () => void) {
    // 这里对传入的参数处理 并储存在 destination 中
  }

  next(value?: T): void {
    if (!this.isStopped) {
      this._next(value);
    }
  }
  error(err?: any): void {
    if (!this.isStopped) {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete(): void {
    if (!this.isStopped) {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe(): void {
    if (this.closed) {
      return;
    }
    this.isStopped = true;
    super.unsubscribe();
  }
  protected _next(value: T): void {
    this.destination.next(value);
  }
  protected _error(err: any): void {
    this.destination.error(err);
    this.unsubscribe();
  }
  protected _complete(): void {
    this.destination.complete();
    this.unsubscribe();
  }
}
```

## Subscription

订阅(n)

```ts
interface Unsubscribable {
  unsubscribe(): void;
}
interface SubscriptionLike extends Unsubscribable {
  unsubscribe(): void;
  readonly closed: boolean;
}
type TeardownLogic = Unsubscribable | Function | void;
class Subscription implements SubscriptionLike {
  // close 为 true 的 subscription
  public static EMPTY: Subscription; // 一个 closed 为 true 的 Subscription
  public closed: boolean = false; // Subscription 是否已经解除订阅
  protected _parentOrParents: Subscription | Subscription[] = null;
  private _subscriptions: SubscriptionLike[] = null;

  constructor(unsubscribe?: () => void) {
    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  unsubscribe(): void {
    // 把 _parentOrParents 中的自己去除
    // 调自己的解除订阅方法 _unsubscribe.call(this)
    // 循环调用 子订阅 _subscriptions 的 unsubscribe 解除订阅方法
  }
  add(teardown: TeardownLogic): Subscription {
    // 把当前订阅添加到 teardown 的 _parentOrParents 上
    // 把 teardown 添加到 _subscriptions 上
  }
  remove(subscription: Subscription): void {
    // 从 _subscriptions 中移除指定的 subscription
  }
}
```

## Subject

是一种特殊类型的 Observable  
鸭式辩型

```ts
class Subject<T> extends Observable<T> implements SubscriptionLike {
  observers: Observer<T>[] = []; // 所有的订阅者
  closed = false; //
  isStopped = false; // Subject complete 标识

  lift<R>(operator: Operator<T, R>): Observable<R> {}
  next(value?: T) {
    // 循环调用 observers 的 next 方法
  }
  error(err: any) {
    this.isStopped = true;
    // 循环调用 observers 的 error 方法
  }
  complete() {
    this.isStopped = true;
    // 循环调用 observers 的 complete 方法
    this.observers.length = 0;
  }
  unsubscribe() {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  }
  _subscribe() {
    this.observers.push(subscriber);
    return new SubjectSubscription(this, subscriber);
  }
  asObservable(): Observable<T> {
    const observable = new Observable<T>();
    (<any>observable).source = this;
    return observable;
  }
}
```

### 特殊类型的 Subject

- BehaviorSubject
- ReplaySubject
- AsyncSubject

## Operators

操作符

```ts
function take<T>(count: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => {
    if (count === 0) {
      return empty();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}
```

```ts
class TakeOperator<T> implements Operator<T, T> {
  constructor(private total: number) {
    if (this.total < 0) {
      throw new ArgumentOutOfRangeError();
    }
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  }
}
```

```ts
class TakeSubscriber<T> extends Subscriber<T> {
  private count: number = 0;

  constructor(destination: Subscriber<T>, private total: number) {
    super(destination);
  }

  protected _next(value: T): void {
    const total = this.total;
    const count = ++this.count;
    if (count <= total) {
      this.destination.next(value);
      if (count === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  }
}
```

## Scheduler

调度器
