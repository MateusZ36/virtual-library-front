<script>
  import BorrowBooksTable from "./BorrowBooksTable.svelte";
  import BorrowBooksFooter from "./BorrowBooksFooter.svelte";
</script>

<main class="borrow-books-container">
  <BorrowBooksTable />
  <BorrowBooksFooter />
</main>

<style>
  .borrow-books-container {
    padding: 30px;
    background: var(--white);
    border-radius: 4px;
  }
</style>