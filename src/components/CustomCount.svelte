<script>
  import { customCount } from "../store/stores";
</script>

<main>
  <h3>
    Custom Count: {$customCount}
  </h3>
  <button on:click={() => customCount.increment()}> Increment </button>
  <button on:click={() => customCount.decrement()}> Decrement </button>
  <button on:click={() => customCount.reset()}> Reset </button>
  <button on:click={() => customCount.increment(5)}> Increment by 5 </button>
  <button on:click={() => customCount.decrement(5)}> Decrement by 5 </button>
  <button on:click={() => customCount.reset(10)}> Reset to 10 </button>
</main>
