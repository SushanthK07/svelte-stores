<script>
  import { time } from "../store/stores";

  const dateFormatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<main>
  <h3>Time is {dateFormatter.format($time)}</h3>
</main>
