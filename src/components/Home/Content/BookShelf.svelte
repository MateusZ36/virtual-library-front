<script lang="ts">
  import type { BookWithAuthorAndPublisher } from "../../../types/BookWithAuthorAndPublisher";
  import AddToCartButton from "./AddToCartButton.svelte";

  export let book: BookWithAuthorAndPublisher
</script>

<div class="book-item">
  <img src={book.imgUrl} alt={book.title}>
  <div class="book-details">
    <p><strong>{book.title}</strong></p>
    <p>{book.author.name}</p>
    <p>{book.publisher.name}</p>
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

  img {
    margin-top: 6.5px;
    width: 13rem;
    height: 18rem;
  }

  .book-details {
    margin-bottom: 1rem;
  }

  .book-details p {
    margin-top: 5px;
    margin-bottom: 8px;
    width: 100%;
    display: inline-table;
    text-align: center;
  }
</style>