import { writable } from "svelte/store";
import type { Genre } from "../types/Genre";

export const genresStore = writable<Genre[]>([]);