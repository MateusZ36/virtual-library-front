import { writable } from "svelte/store";
import type {
  BookWithAuthorAndPublisher
} from "../types/BookWithAuthorAndPublisher";

export const shelfStore = writable<BookWithAuthorAndPublisher[]>([]);