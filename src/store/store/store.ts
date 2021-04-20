import { Module, State } from "vuex-simple";
import { BarModule } from "./../modules/bar";
import { FooModule } from "./../modules/foo";

export class MyStore {
  @Module()
  public bar = new BarModule();
  public foo = new FooModule();

  @State()
  public version = "2.0.0";
}
