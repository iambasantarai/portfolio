<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';

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

	<ul class="mt-12 space-y-4">
		{#each data.writings as writing}
			<li class="pb-2">
				<div class="flex items-baseline justify-between">
					<a
						class="text-xl font-semibold no-underline hover:underline"
						href={`/writings/${writing.slug}`}>{writing.title}</a
					>
					<span class="font-base text-sm">{formatDate(writing.date)}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>
