<script lang="ts">
  import type { CartProduct } from "../../types/CartProduct";
  import { cartStore } from "../../stores/cart";
  import { formatPrice } from "../../utils/format";

  const defaultFormattedTotal = formatPrice(0)
  let formattedTotal = defaultFormattedTotal;

  cartStore.subscribe(newCartValue => {
    let total = newCartValue.reduce((acum, cartProduct) => {
      return acum += cartProduct.price * cartProduct.amount
    }, 0)

    formattedTotal = formatPrice(total)
  })

  onDestroy(() => {
    formattedTotal = defaultFormattedTotal
  })
  import BorrowBooksButton from "./BorrowBooksButton.svelte";
import { onDestroy } from "svelte";
</script>

<footer>
  <BorrowBooksButton />
  <div class="total">
    <span>TOTAL</span>
    <strong>{formattedTotal}</strong>
  </div>
</footer>

<style>
  .total {
    display: flex;
    align-items: baseline;
  }

  .total span {
    color: var(--gray-300);
    font-weight: bold;
  }

  .total strong {
    color: var(--gray-600);
    font-size: 28px;
    margin-left: 5px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>