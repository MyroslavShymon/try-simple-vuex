<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Version: {{ readState }}</h2>
    <p>Result:{{ readGetter }}</p>
    <button @click="commitIncrement">++</button>
    <input type="number" v-model.number="firstNumber" />
    <button @click="commitIncrementBy(firstNumber)">++{{ firstNumber }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { useStore, useModule, registerModule } from "vuex-simple";
import { MyStore } from "@/store/store/store";
import { FooModule } from "@/store/modules/foo";

@Component({
  data() {
    return {
      firstNumber: 0,
    };
  },
})
export default class MyComponent extends Vue {
  private firstNumber!: number;
  // get the module instance from the created store
  public store: MyStore = useStore(this.$store);

  // get the module instance with the given namespace
  public foo1?: FooModule = useModule(this.$store, ["bar", "foo1"]);

  public get readState() {
    // access state like a property
    return this.store.version;
  }

  public get readGetter() {
    // access getter like a property
    return this.store.bar.total;
  }

  public commitIncrement() {
    // call mutation like a function
    this.store.bar.foo1.increment();
  }

  public commitIncrementBy(number: number) {
    // call with parameter / payload
    this.store.bar.foo2.incrementBy(number);
  }

  public callAction() {
    this.store.bar.foo1.asyncIncrement();
  }
}
</script>
