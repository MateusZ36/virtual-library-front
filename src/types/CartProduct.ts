import type { Book } from "./Book";

export type CartProduct = Omit<Book, "publisherId" | "authorId"> & {
  amount: number;
  authorName: string;
}
