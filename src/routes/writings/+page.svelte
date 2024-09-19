<script lang="ts">
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Writings - {config.name}</title>
</svelte:head>

<div class="mt-8">
	<h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-100">Writings</h1>
	<p class="mt-2 text-base leading-normal text-zinc-400">
		Sometimes, I just want to be creative, but...
	</p>

	<ul class="mt-4 space-y-4">
		{#each data.writings as writing}
			<li class="">
				<a
					class="text-2xl font-semibold no-underline hover:underline"
					href={`/writings/${writing.slug}`}>{writing.title}</a
				>
				<p class="text-base font-normal leading-normal text-zinc-400">
					{writing.description}
				</p>
				<a
					class="text-xs font-semibold text-zinc-500 no-underline hover:text-zinc-400 hover:underline"
					href={`/writings/${writing.slug}`}>Read &rarr;</a
				>
			</li>
		{/each}
	</ul>
</div>
