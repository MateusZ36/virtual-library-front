<script lang="ts">
  import { Link } from "svelte-navigator";

  import { cartStore } from "../stores/cart";
  import Content from "../components/Home/Content.svelte";
  import SideBar from "../components/Home/SideBar.svelte";

  import type { CartProduct } from "../types/CartProduct";

  let cart: CartProduct[];

  cartStore.subscribe(newValue => cart = newValue)
</script>

<header>
  <h1>ACERVO VIRTUAL</h1>
</header> 

<nav>
  {#if (cart.length > 0)}
    <Link to="borrow-books">Cesta de Livros</Link> 
  {:else}
    <p>&#160</p>
  {/if}
</nav>

<div class="home-container">
  <SideBar />
  <Content />
</div>

<style>
  .home-container {
    display: flex;
    padding-top: 2.5rem;
    gap: 2rem;
  }

  @media (max-width: 563px) {
    .home-container {
      flex-direction: column;
      align-items: center;
    }
  }

  /* body {
    display: flex;
    justify-content: center;
  } */
</style>