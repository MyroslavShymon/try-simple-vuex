import { Mutation, State } from "vuex-simple";

export class FooModule {
  @State()
  public counter: number;

  constructor(nb = 0) {
    this.counter = nb;
  }

  @Mutation()
  public increment() {
    this.counter++;
  }

  @Mutation()
  public incrementBy(nb: number) {
    this.counter += nb;
  }

  public async asyncIncrement() {
    await new Promise((r) => setTimeout(r, 200));
    // call mutation function like you would any other function
    this.increment();
  }
}
