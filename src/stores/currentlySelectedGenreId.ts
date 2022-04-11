import { writable } from "svelte/store";

export const currentlySelectedGenreIdStore = writable<number>(-1);