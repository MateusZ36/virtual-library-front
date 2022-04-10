<script lang="ts">
  let total = 0;
  import BorrowBooksButton from "./BorrowBooksButton.svelte";
</script>

<footer>
  <BorrowBooksButton />
  <div class="total">
    <span>TOTAL</span>
    <strong>{total}</strong>
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