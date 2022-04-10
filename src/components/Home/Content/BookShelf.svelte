<script lang="ts">
    import type { Book } from "../../../types/Book";
    import AddToCartButton from "./AddToCartButton.svelte";

    export let book: Book
</script>

<table>
    <div class="image">
        <thead>
            <img src={book.imgUrl} alt={book.title}>
        </thead>
    </div>
    <tbody>
        <tr>
            <td><strong>{book.title}</strong></td>
            <td>{book.authorId}</td>
            <td>{book.publisherId}</td>
        </tr>
    </tbody>
    <div class="add-button">
        <AddToCartButton item={book}/>
    </div>
</table>

<style>
    table {
        display: flex;
        flex-direction: column;
        margin: 40px 10px 0 10px;
        background-color: white;
        color: black;
        width: 14rem;
    }

    td {
        margin-top: 5px;
        margin-bottom: 8px;
        width: 100%;
        display: inline-table;
        text-align: center;
    }

    .image {
        display: flex;
        justify-content: center;
    }

    img {
        margin-top: 6.5px;
        width: 13rem;
        height: 18rem;
    }

    .add-button {
        display: flex;
        justify-content: center;
        margin: auto;
    }
</style>