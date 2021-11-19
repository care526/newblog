# RxJs

## Observable
可观察对象  
运算是同步的
```ts
export class Observable<T> implements Subscribable<T> {
  public _isScalar: boolean = false;
  source: Observable<any>; // 保存的自身上层管道前的 Observable
  operator: Operator<any, T>;

  lift<R>(operator: Operator<T, R>): Observable<R> {}
  subscribe(observer?: PartialObserver<T>): Subscription;
  // _trySubscribe(sink: Subscriber<T>): TeardownLogic {}
  forEach(next: (value: T) => void, promiseCtor?: PromiseConstructorLike): Promise<void> {}

  _subscribe(subscriber: Subscriber<any>): TeardownLogic {}

  lift<R>(operator: Operator<T, R>): Observable<R> {
    const observable = new Observable<R>();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }

  pipe(...operations: OperatorFunction<any, any>[]): Observable<any> {
    // 单
    return 
  }
  toPromise(promiseCtor?: PromiseConstructorLike): Promise<T> {}
}
```
```ts
export function pipeFromArray<T, R>(fns: Array<UnaryFunction<T, R>>): UnaryFunction<T, R> {
  if (fns.length === 0) {
    // 
    return identity as UnaryFunction<any, any>;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input: T): R {
    return fns.reduce((prev: any, fn: UnaryFunction<T, R>) => fn(prev), input as any);
  };
}
```
```ts
export interface UnaryFunction<T, R> { (source: T): R; }
export function identity<T>(x: T): T {
  return x;
}
```

## Observer
观察者 
```ts
// 抽象类
export interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```

## Subscriber
订阅者
```ts
export class Subscriber<T> extends Subscription implements Observer<T> {
  
}
```

## Subscription
订阅(n)
```ts
export interface Unsubscribable {
  unsubscribe(): void;
}
export interface SubscriptionLike extends Unsubscribable {
  unsubscribe(): void;
  readonly closed: boolean;
}
export class Subscription implements SubscriptionLike {
  // close 为 true 的 subscription
  public static EMPTY: Subscription
  public closed: boolean = false;
  protected _parentOrParents: Subscription | Subscription[] = null;
  private _subscriptions: SubscriptionLike[] = null;

  unsubscribe(): void {}
  // export type TeardownLogic = Unsubscribable | Function | void;
  add(teardown: TeardownLogic): Subscription {}
  remove(subscription: Subscription): void {}
}
```

## Subject
是一种特殊类型的 Observable  
鸭式辩型
```ts
export class Subject<T> extends Observable<T> implements SubscriptionLike {

}
```
### 特殊类型的Subject
- BehaviorSubject  
- ReplaySubject  
- AsyncSubject  

## Operators
操作符
```ts
export function take<T>(count: number): MonoTypeOperatorFunction<T> {
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
      throw new ArgumentOutOfRangeError;
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









