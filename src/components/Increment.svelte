<script>
  import { state } from "../store/stores.js";

  const incrementCount = () => {
    state.update((value) => {
      return { ...value, count: value.count + 1 };
    });
  };
</script>

<main>
  <button on:click={incrementCount}> Increment </button>
</main>
