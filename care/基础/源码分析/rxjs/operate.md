## of

```ts
export const subscribeToArray =
  <T>(array: ArrayLike<T>) =>
  (subscriber: Subscriber<T>) => {
    for (let i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  };
export function fromArray<T>(input: ArrayLike<T>, scheduler?: SchedulerLike) {
  return new Observable<T>(subscribeToArray(input));
}
function of<T>(...args: Array<T | SchedulerLike>): Observable<T> {
  return fromArray(args as T[]);
}
```

## take

```ts
export interface Operator<T, R> {
  // 核心是要实现这个 call 方法
  call(subscriber: Subscriber<R>, source: any): TeardownLogic;
}
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

class TakeOperator<T> implements Operator<T, T> {
  constructor(private total: number) {}

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  }
}
function take<T>(count: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new TakeOperator(count));
}
```
