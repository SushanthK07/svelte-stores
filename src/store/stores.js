import { writable, readable } from "svelte/store";

export const state = writable({
  count: 0,
});

export const time = readable(new Date(), (set) => {
  const intervalId = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});
