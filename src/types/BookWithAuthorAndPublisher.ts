import type { Author } from "./Author"
import type { Book } from "./Book";
import type { Publisher } from "./Publisher";

export type BookWithAuthorAndPublisher = Omit<Book, "publisherId" | "authorId"> & {
  author: Author;
  publisher: Publisher;
}