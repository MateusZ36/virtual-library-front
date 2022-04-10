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

  let currentSelected = '';

  function changeCurrentSelected(event) {
    currentSelected = event.detail.text
  }
</script>

<aside class="home-sidebar">
  <div class="buttons-container">
    {#each genres as genre}
      <Genre
        genre={genre}
        icon={"<icon>"}
        currentSelected={currentSelected}
        on:message={changeCurrentSelected}
      />
    {/each}
  </div>
</aside>

<style>
  .home-sidebar {
    min-width: 15rem;
    max-width: 35%;
    /* width: 100%; */
  }

  .buttons-container {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
</style>