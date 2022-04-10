<script lang="ts">
    import BookShelf from "./../BookShelf/BookShelf.svelte";

    let shelf = [
        {
            id: 0,
            image: "https://kbimages1-a.akamaihd.net/00609b27-40c0-4e40-aed7-f0de6fee6428/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg",
            title: "Harry Potter and the Deathly Hallows",
            author: "J. K. Rowling",
            publisher: "Rakuten Kobo",
        },
        {
            id: 1,
            image: "https://images-na.ssl-images-amazon.com/images/I/81FcjKS7peL.jpg",
            title: "Aladdin",
            author: "Disney",
            publisher: "Disney",
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/I/41nngxCNKxL.jpg",
            title: "IT",
            author: "Stephen King",
            publisher: "Amazon",
        },
        {
            id: 3,
            image: "https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg",
            title: "Percy Jackson and The Olympians: The Lightning Thief",
            author: "Rick Riordan",
            publisher: "Weekly",
        },
        {
            id: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/91l6iE5ceyL.jpg",
            title: "Turma da Mônica Jovem: Os Mais Jovens Heróis da Terrra",
            author: "Mauricio de Souza",
            publisher: "Panini Comics",
        },
        {
            id: 5,
            image: "https://images-na.ssl-images-amazon.com/images/I/61i9sy00GxS.jpg",
            title: "Eistein's Theory of Relativity",
            author: "Max Born",
            publisher: "Classic Reprint",
        },
    ];
</script>

<main class="home-content">
    {#each shelf as item}
        <BookShelf book={item} />
    {/each}
</main>

<style>
    .home-content {
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        max-width: 100%;
    }
</style>
