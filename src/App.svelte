<script>
  import CustomCount from "./components/CustomCount.svelte";
  import Decrement from "./components/Decrement.svelte";
  import Display from "./components/Display.svelte";
  import Increment from "./components/Increment.svelte";
  import Reset from "./components/Reset.svelte";
  import Timer from "./components/Timer.svelte";
</script>

<main>
  <!-- <Display />
  <Increment />
  <Decrement />
  <Reset /> -->

  <!-- <Timer /> -->

  <CustomCount />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
