<script lang="ts">
  import { Link } from "svelte-navigator";

  import Content from "../components/Home/Content.svelte";
  import SideBar from "../components/Home/SideBar.svelte";
</script>

<h1>Acervo da biblioteca</h1>
<Link to="borrow-books">Cesta de livros</Link>

<div class="home-container">
  <SideBar></SideBar>
  <Content></Content>
</div>

<style>
  .home-container {
    display: flex;
  }
</style>