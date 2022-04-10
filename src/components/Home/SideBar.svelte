<script lang="ts">
  import { onMount } from "svelte";

  import { api } from "../../services/api";
  import { genresStore } from "../../stores/genres";
  import Genre from "./SideBar/Genre.svelte";

  let genres = [];

  genresStore.subscribe(newValue => genres = newValue)

  onMount(async () => {
    try {
      console.log(genres)
      const response = await api.get('/genre');
      console.log(response.data)
      genresStore.update(() => response.data)
      console.log(genres)
    } catch(err) {
      console.error(err);
    }
  })
</script>

<aside class="home-sidebar">
  {#each genres as item}
    <Genre genre={item} />
  {/each}
</aside>

<style>
  .home-sidebar {
    min-width: 15rem;
    max-width: 35%;
    /* width: 100%; */
  }
</style>