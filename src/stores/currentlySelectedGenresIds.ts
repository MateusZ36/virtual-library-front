import { writable } from "svelte/store";

export const currentlySelectedGenresIdsStore = writable<number[]>([]);