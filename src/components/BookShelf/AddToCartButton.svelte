<script lang="ts">
    import type { Book } from '../../Wrapper/BooksWrapper.svelte';
	import { cartNewEntry } from './../BorrowBooks/BorrowBooksTable.svelte';

    export let item: Book;
    
    function addToCart(item) {
        cartNewEntry(item)
    }
</script>

<button 
    on:click={() => { addToCart(item) }}
>
    ADD TO CART
</button>

<style>
    button {
        border: 2px solid orange;
        background-color: white;
        color: orange;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        margin-top: 25px;
    }
</style>