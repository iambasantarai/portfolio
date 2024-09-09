<script>
	import '../app.css';

	import Header from './header.svelte';
	import Footer from './footer.svelte';
</script>

<div class="min-h-screen bg-zinc-950 p-4 text-zinc-200">
	<div class="mx-auto max-w-xl">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>
