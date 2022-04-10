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

<body>
    <div class="home-container">
        <Content />
    </div>
</body>

<style>
    body {
        display: flex;
        justify-content: center;
    }

    .home-container {
        display: flex;
    }
</style>