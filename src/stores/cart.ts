import { writable } from "svelte/store";
import type { CartProduct } from "../types/CartProduct";

export const cartStore = writable<CartProduct[]>([]);