<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { MoveLeft } from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article class="mt-8">
	<a
		href="/writings"
		aria-label="Go back to articles"
		class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/10 bg-zinc-800 hover:bg-zinc-700"
	>
		<svelte:component
			this={MoveLeft}
			size="24"
			class="size-4 transition-transform duration-300 group-hover:-translate-x-1"
		/>
	</a>

	<header class="flex flex-col">
		<h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-100">
			{data.metadata.title}
		</h1>
		<time
			datetime="2022-09-05"
			class="order-first flex items-center text-base text-zinc-500"
		>
			<span class="h-4 w-0.5 rounded-full bg-zinc-500"></span><span class="ml-3"
				>{formatDate(data.metadata.date)}</span
			>
		</time>
	</header>

	<div class="prose prose-invert mt-8">
		<svelte:component this={data.content} />
	</div>
</article>
