import type { Book } from "./Book";

export type CartProduct = Book & {
  amount: number;
}
