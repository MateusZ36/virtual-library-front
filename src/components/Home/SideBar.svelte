<script lang="ts">
  import { onMount } from "svelte";

  import { api } from "../../services/api";
  import type { Genre } from "../../types/Genre";
  import { genresStore } from "../../stores/genres";
  import { currentlySelectedGenreIdStore } from "../../stores/currentlySelectedGenreId";
  import GenreButton from "./SideBar/GenreButton.svelte";

  let genres: Genre[] = [];

  genresStore.subscribe(newValue => genres = newValue)
  
  let currentlySelectedGenreId: number = -1;

  onMount(async () => {
    try {
      const response = await api.get<Genre[]>('/genres');
      genresStore.update(() => response.data)

      currentlySelectedGenreId = response.data[0].id
      currentlySelectedGenreIdStore.update(() => currentlySelectedGenreId)
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
      currentlySelectedGenreIdStore.update(() => genreId)
      currentlySelectedGenreId = genreId
    }
  }
</script>

<aside class="home-sidebar">
  <div class="buttons-container">
    {#each genres as genre}
      <GenreButton
        genre={genre}
        isSelected={currentlySelectedGenreId === genre.id}
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

  @media (max-width: 563px) {
    .home-sidebar {
      max-width: initial;
    }

    .buttons-container {
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.2rem;
    }
  }
</style>