import { writable } from "svelte/store";

export const state = writable({
  count: 0,
});
