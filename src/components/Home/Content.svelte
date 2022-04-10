<script lang="ts">
  import { onMount } from "svelte";
  
  import { api } from "../../services/api";
  import { shelfStore } from "../../stores/shelf";
  import BookShelf from "./Content/BookShelf.svelte";

  let shelf = [];

  shelfStore.subscribe(newValue => shelf = newValue)

  onMount(async () => {
    try {
      const response = await api.get('/books');
      shelfStore.update(() => response.data)
    } catch(err) {
      console.error(err);
    }
  })
</script>

<main class="home-content">
  {#each shelf as item}
    <BookShelf book={item} />
  {/each}
</main>

<style>
  .home-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
</style>
