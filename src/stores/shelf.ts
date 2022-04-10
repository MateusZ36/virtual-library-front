import { writable } from "svelte/store";
import type { Book } from "../types/Book";

export const shelfStore = writable<Book[]>([]);