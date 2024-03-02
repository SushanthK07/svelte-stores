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

const createCount = () => {
  const { subscribe, set, update } = writable(0);
  return {
    subscribe,
    increment: (size = 1) => update((count) => count + size),
    decrement: (size = 1) => update((count) => count - size),
    reset: (count = 0) => set(count),
  };
};

export const customCount = createCount();
