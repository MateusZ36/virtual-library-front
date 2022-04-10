<script lang="ts">
  import { cartStore } from '../../../stores/cart';

  import type { Book } from "../../../types/Book";
  import type { CartProduct } from "../../../types/CartProduct";

  export let item: Book;
  
  function addToCart(item: Book) {
    cartStore.update(oldCart => {
      let newProd: CartProduct = {
        id: item.id,
        title: item.title,
        price: 5,
        imgUrl: item.imgUrl,
        amount: 1,
        authorId: item.authorId,
        publisherId: item.publisherId,
      } 
      return [...oldCart, newProd];
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
    border: 2px solid var(--yellow-500);
    background-color: var(--white);
    color: var(--yellow-500);
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    margin-top: 25px;
  }
</style>