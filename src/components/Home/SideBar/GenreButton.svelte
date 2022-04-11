<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { Genre } from "../../../types/Genre";

  export let genre: Genre;
  export let isSelected: Boolean = false;

  const dispatch = createEventDispatcher();
</script>

<button
  class:selected="{isSelected}"
  on:click="{() => dispatch('message', { genreId: genre.id, isSelected })}"
>
  <span class="name">{genre.name}</span>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 20rem;
    width: 100%;

    border: 0;
    background: var(--gray-600);
    padding: 1.1875rem 2rem;
    border-radius: 0.25rem;

    font-size: 1.125rem;
    color: var(--white);

    transition: background 200ms;
  }

  button:hover {
    background: var(--gray-700);
  }

  /* button + button {
    margin-top: 1rem;
  } */

  button:first-child {
    margin-top: 0;
  }

  button.selected {
    background: var(--gray-600);
    color: var(--yellow-600);
  }

  button .name {
    text-transform: capitalize;
  }

  @media (max-width: 563px) {
    button {
      width: 11rem;
    }
  }
</style>