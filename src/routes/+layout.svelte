<script lang="ts">
	import '../app.css';

	import { Transition, Header, Footer } from '$lib/components';

	export let data: { url: string };
</script>

<svelte:head>
	<meta property="description" content="Personal portfolio" />
	<meta
		property="keywords"
		content="Basanta Rai, Basanta Rana Sampang Rai, Software Developer, Backend Developer, Vimmer"
	/>
	<meta property="author" content="Basanta Rai" />
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-zinc-200 antialiased">
	<div class="mx-auto max-w-xl p-4">
		<Header />

		<main>
			<Transition url={data.url}>
				<slot />
			</Transition>
		</main>

		<Footer />
	</div>
</div>
