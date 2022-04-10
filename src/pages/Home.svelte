<script lang="ts">
  import { Link } from "svelte-navigator";

  import Content from "../components/Home/Content.svelte";
  import SideBar from "../components/Home/SideBar.svelte";
</script>

<header>
  <h1>ACERVO VIRTUAL</h1>
</header> 

<nav>
  <Link to="borrow-books">Cesta de Livros</Link> 
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

  /* body {
    display: flex;
    justify-content: center;
  } */
</style>