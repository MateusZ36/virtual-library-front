<script lang="ts">
  import { Router, Route } from "svelte-navigator";

	import Home from "./pages/Home.svelte";
	import BorrowBooks from "./pages/BorrowBooks.svelte";
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="borrow-books" component={BorrowBooks} />
</Router>
