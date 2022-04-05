<main class="page-container">
  <slot></slot>
</main>

<style>
  :global(.page-container) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  :global(.page-container > *) {
    width: 70rem;
    padding-inline: 0.625rem;
  }

  @media (max-width: 1120px) {
    :global(.page-container) {
      align-items: initial;
    }

    :global(.page-container > *) {
      width: auto;
      max-width: 70rem;
    }
  }
</style>