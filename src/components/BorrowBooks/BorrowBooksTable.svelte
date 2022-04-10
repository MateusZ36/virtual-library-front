<script lang="ts" context="module">
  import type { Book } from "../../Wrapper/BooksWrapper.svelte";

  type CartProduct = Book & {
    amount: number;
  }

  const cart = [];

  export function cartNewEntry(newBook: Book) {
    let newProd: CartProduct = {
      id: newBook.id,
      title: newBook.title,
      price: 0,
      imgUrl: newBook.imgUrl,
      amount: 1,
      authorId: newBook.authorId,
      publisherId: newBook.publisherId,
    }

    cart.push(newProd)
    console.log({ cart })
  }

  const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const cartFormatted = cart.map(product => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    total: formatPrice(product.price * product.amount),
  }))

  type UpdateProductAmount = {
    productId: number;
    amount: number;
  }

  // essas funções abaixo deverão estar na context
  function updateProductAmount({
    productId,
    amount,
  }: UpdateProductAmount) {
    console.log({
      productId,
      amount,
    })
  }

  function removeProduct(bookId: number) {
    console.log('book removed', bookId)
  }
  // essas funções acima deverão estar na context

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
    {#each cartFormatted as product}
      <tr data-testid="product">
        <td>
          <img src={product.imgUrl} alt={product.name} />
        </td>
        <td>
          <strong>{product.name}</strong>
          <span>{product.formattedPrice}</span>
        </td>
        <td>
          <div>
            <button
              type="button"
              data-testid="decrement-product"
              disabled={product.amount <= 1}
              onClick={() => handleProductDecrement(product)}
            >
              Decrementar
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
            onClick={() => handleProductIncrement(product)}
            >
              Incrementar
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
          onClick={() => handleRemoveProduct(product.id)}
          >
            Deletar
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
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  div input {
    border: 1px solid var(--gray-50);
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

  /* button svg {
    color: var(--yellow-500);
    transition: color 0.2s;
  }

  button:hover svg {
    color: var(--yellow-600);
  }

  button:disabled svg {
    color: var(--yellow-600);
    cursor: not-allowed;
  } */
</style>