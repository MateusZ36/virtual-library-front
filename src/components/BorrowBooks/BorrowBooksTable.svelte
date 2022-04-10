<script lang="ts">
  type Product = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    amount: number;
    authorId: number;
    publisherId: number;
  }

  let product: Product = {
    id: 1,
    name: 'João e Maria',
    price: 14.99,
    imgUrl: 'https://google.com.br',
    amount: 2,
    authorId: 2,
    publisherId: 3,
  }

  const cart = [product];

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

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    })
  }
  function handleProductIncrement(product: Product) {
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
    <tr data-testid="product">
      <td>
        <img src={product.imgUrl} alt={product.name} />
      </td>
      <td>
        <strong>{product.name}</strong>
        <span>{product.price}</span>
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
        <strong>{product.amount}</strong>
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

  button svg {
    color: var(--yellow-500);
    transition: color 0.2s;
  }

  button:hover svg {
    color: var(--yellow-600);
  }

  button:disabled svg {
    color: var(--yellow-600);
    cursor: not-allowed;
  }
</style>