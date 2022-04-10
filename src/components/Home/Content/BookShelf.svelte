<script lang="ts">
  import type { Book } from "../../../types/Book";
  import AddToCartButton from "./AddToCartButton.svelte";

  export let book: Book
</script>

<div class="book-item">
  <img src={book.imgUrl} alt={book.title}>
  <div>
    <p><strong>{book.title}</strong></p>
    <p>{book.authorId}</p>
    <p>{book.publisherId}</p>
  </div>
  <AddToCartButton item={book}/>
</div>

<style>
  .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    color: var(--black);
    width: 14rem;
  }

  p {
    margin-top: 5px;
    margin-bottom: 8px;
    width: 100%;
    display: inline-table;
    text-align: center;
  }

  img {
    margin-top: 6.5px;
    width: 13rem;
    height: 18rem;
  }
</style>