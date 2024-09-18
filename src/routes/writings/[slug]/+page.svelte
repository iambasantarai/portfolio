<script lang="ts">
	import { formatDate } from '$lib/utils';

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
		class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5 ring-0 ring-zinc-200/10 transition hover:border-zinc-700 hover:ring-zinc-200/20"
	>
		<svg
			viewBox="0 0 16 16"
			fill="none"
			aria-hidden="true"
			class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-400"
		>
			<path
				d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
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
