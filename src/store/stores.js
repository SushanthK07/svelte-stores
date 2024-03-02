import { writable, readable, derived } from "svelte/store";

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

const start = new Date();
export const elapsedTime = derived(time, ($time) => {
  return Math.round(($time - start) / 1000);
});
