<script>
  import { state } from "../store/stores.js";

  let count;

  state.subscribe((value) => {
    // console.log(value);
    count = value.count;
  });
</script>

<main>
  <h3>Count: {count}</h3>
</main>
