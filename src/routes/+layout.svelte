<script lang="ts">
	import '../app.css';

	import Header from './header.svelte';
	import Footer from './footer.svelte';
</script>

<div class="min-h-screen bg-zinc-950 text-zinc-200 antialiased">
	<div class="mx-auto max-w-xl p-4">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>
