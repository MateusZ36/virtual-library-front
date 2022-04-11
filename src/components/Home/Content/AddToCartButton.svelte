<script lang="ts">
  import { cartStore } from '../../../stores/cart';

  import type { BookWithAuthorAndPublisher } from "../../../types/BookWithAuthorAndPublisher";
  import type { CartProduct } from "../../../types/CartProduct";

  export let item: BookWithAuthorAndPublisher;
  
  function addToCart(item: BookWithAuthorAndPublisher) {
    cartStore.update(oldCart => {
      let newProduct: CartProduct = {
        id: item.id,
        title: item.title,
        price: 5,
        imgUrl: item.imgUrl,
        amount: 1,
        authorName: item.author.name,
      } 
      return [...oldCart, newProduct];
    });
  }
</script>

<button 
  on:click={() => addToCart(item)}
>
  ADD TO CART
</button>

<style>
  button {
    border: 2px solid var(--yellow-600);
    background-color: var(--white);
    color: var(--yellow-600);
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    margin-top: auto;
  }
</style>