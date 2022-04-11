<script lang="ts">
  import FaMinusCircle from 'svelte-icons/fa/FaMinusCircle.svelte'
  import FaPlusCircle from 'svelte-icons/fa/FaPlusCircle.svelte'
  import FaTrash from 'svelte-icons/fa/FaTrash.svelte'

  import type { CartProduct } from "../../types/CartProduct";
  import { cartStore } from "../../stores/cart";
  import { formatPrice } from "../../utils/format";

  let cart: CartProduct[];

  cartStore.subscribe(newValue => cart = newValue)

  $: cartFormatted = cart.map(product => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    total: formatPrice(product.price * product.amount),
  }))

  type UpdateProductAmount = {
    productId: number;
    amount: number;
  }

  function updateProductAmount({
    productId,
    amount,
  }: UpdateProductAmount) {
    cartStore.update(oldCart => {
      let oldProductIndex = oldCart.findIndex(
        product => product.id === productId
      )

      oldCart[oldProductIndex].amount = amount
      return oldCart;
    });
  }

  function removeProduct(productId: number) {
    cartStore.update(oldCart => {
      let oldProductIndex = oldCart.findIndex(
        product => product.id === productId
      )

      oldCart.splice(oldProductIndex, 1)
      return oldCart;
    });
  }

  function handleProductDecrement(product: CartProduct) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    })
  }

  function handleProductIncrement(product: CartProduct) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1
    })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }
</script>

<table>
  <thead>
    <tr>
      <th aria-label="product image" />
      <th>PRODUTO</th>
      <th>QTD</th>
      <th>SUBTOTAL</th>
      <th aria-label="delete icon" />
    </tr>
  </thead>
  <tbody>
    {#each cartFormatted as product (product.id)}
      <tr data-testid="product">
        <td>
          <img src={product.imgUrl} alt={product.title} />
        </td>
        <td>
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>
        </td>
        <td>
          <div>
            <button
              type="button"
              data-testid="decrement-product"
              disabled={product.amount <= 1}
              on:click={() => handleProductDecrement(product)}
            >
              <div class="icon">
                <FaMinusCircle />
              </div>
            </button>
            <input
              type="text"
              data-testid="product-amount"
              readOnly
              value={product.amount}
            />
            <button
              type="button"
              data-testid="increment-product"
              on:click={() => handleProductIncrement(product)}
            >
            <div class="icon">
              <FaPlusCircle />
            </div>
            </button>
          </div>
        </td>
        <td>
          <strong>{product.total}</strong>
        </td>
        <td>
          <button
            type="button"
            data-testid="remove-product"
            on:click={() => handleRemoveProduct(product.id)}
          >
            <div class="icon">
              <FaTrash />
            </div>
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>


<style>
  table {
    width: 100%;
  }

  thead th {
    color: var(--gray-300);
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid var(--gray-50);
  }

  img {
    height: 100px;
  }

  strong {
    color: var(--gray-600);
    display: block;
  }

  span {
    display: block;
    color: var(--gray-600);
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  div input {
    border: 1px solid var(--gray-300);
    border-radius: 4px;
    color: var(--gray-300);
    padding: 6px;
    width: 50px;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  button .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--yellow-600);
    transition: filter 0.2s;
  }

  button:hover .icon {
    filter: grayscale(0.2);
  }

  button:disabled .icon {
    filter: grayscale(0.5);
    cursor: not-allowed;
  }
</style>