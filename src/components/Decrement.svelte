<script>
  import { state } from "../store/stores.js";

  const decrementCount = () => {
    state.update((value) => {
      return { ...value, count: value.count - 1 };
    });
  };
</script>

<main>
  <button on:click={decrementCount}> Decrement </button>
</main>
