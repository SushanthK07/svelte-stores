<script>
  import { onDestroy } from "svelte";
  import { state } from "../store/stores.js";

  let count;

  const unsubscribe = state.subscribe((value) => {
    // console.log(value);
    count = value.count;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<main>
  <h3>Count: {count}</h3>
</main>
