<script lang="ts">
  import { onMount } from "svelte";
  
  import { api } from "../../services/api";
  import { currentlySelectedGenreIdStore } from "../../stores/currentlySelectedGenreId";
  import { shelfStore } from "../../stores/shelf";
  import type { BookGenres } from "../../types/BookGenre";
  import type { BookWithAuthorAndPublisher } from "../../types/BookWithAuthorAndPublisher";
  import BookShelf from "./Content/BookShelf.svelte";

  let shelf: BookWithAuthorAndPublisher[] = [];
  let currentlySelectedGenreId: number = -1;

  async function requestBooksData() {
    try {
      if (currentlySelectedGenreId >= 0) {
        const bookGenresResponse = await api.get<BookGenres[]>('/bookGenres', {
          params: {
            genreId: currentlySelectedGenreId,
          }
        })

        console.log(bookGenresResponse.data)

        const booksIds = bookGenresResponse.data.map(book => book.bookId)

        if (booksIds.length > 0) {
          const booksResponse = await api.get<BookWithAuthorAndPublisher[]>('/books', {
            params: {
              _expand: ['publisher', 'author'],
              id: booksIds
            }
          })
          console.log(booksResponse.data)
          shelfStore.update(() => booksResponse.data)
        } else {
          shelfStore.update(() => [])
        }
      } else {
        shelfStore.update(() => [])
      }
    } catch(err) {
      console.error(err);
    }
  }

  shelfStore.subscribe(
    newValue => shelf = newValue
  )
  currentlySelectedGenreIdStore.subscribe(
    newValue => {
      currentlySelectedGenreId = newValue
      requestBooksData()
    }
  )
</script>

<main class="home-content">
  {#if shelf.length > 0}
    {#each shelf as item}
      <BookShelf book={item} />
    {/each}
  {:else}
    Sem livros para mostrar.
  {/if}
</main>

<style>
  .home-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 1rem;  
  }
</style>
