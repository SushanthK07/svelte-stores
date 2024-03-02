<script>
  import { state } from "../store/stores.js";

  const resetCount = () => {
    // state.set({ count: 0 });
    state.update((value) => {
      return { ...value, count: 0 };
    });
  };
</script>

<main>
  <button on:click={resetCount}> Reset </button>
</main>
