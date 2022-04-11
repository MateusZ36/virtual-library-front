<script lang="ts">
  import { onMount } from "svelte";

  import { api } from "../../services/api";
  import type { Genre } from "../../types/Genre";
  import { genresStore } from "../../stores/genres";
  import { currentlySelectedGenresIdsStore } from "../../stores/currentlySelectedGenresIds";
  import GenreButton from "./SideBar/GenreButton.svelte";

  let genres: Genre[] = [];

  genresStore.subscribe(newValue => genres = newValue)
  
  let currentlySelectedGenresIds: number[] = [];

  onMount(async () => {
    try {
      const response = await api.get<Genre[]>('/genres');
      genresStore.update(() => response.data)

      currentlySelectedGenresIds = [response.data[0].id]
      currentlySelectedGenresIdsStore.update(() => currentlySelectedGenresIds)
    } catch(err) {
      console.error(err);
    }
  })

  function updateSelectedGenresIdsStore(event) {
    const {
      genreId,
      isSelected,
    } = event.detail;
  
    if (isSelected === false) {
      currentlySelectedGenresIds = [...currentlySelectedGenresIds, genreId]
    } else if (isSelected === true) {
      const index = currentlySelectedGenresIds.findIndex(id => id === genreId);
      currentlySelectedGenresIds.splice(index, 1);
    }

    currentlySelectedGenresIdsStore.update(() => currentlySelectedGenresIds)
    currentlySelectedGenresIds = currentlySelectedGenresIds
  }
</script>

<aside class="home-sidebar">
  <div class="buttons-container">
    {#each genres as genre}
      <GenreButton
        genre={genre}
        icon={"<icon>"}
        isSelected={currentlySelectedGenresIds.includes(genre.id)}
        on:message={updateSelectedGenresIdsStore}
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