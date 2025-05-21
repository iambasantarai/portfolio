<script lang="ts">
	import * as config from '$lib/config';
	import { MoveRight } from 'lucide-svelte';

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
			<li class="">
				<a
					class="text-2xl font-semibold no-underline hover:underline"
					href={`/writings/${writing.slug}`}>{writing.title}</a
				>
				<p class="text-base font-normal leading-normal text-zinc-400">
					{writing.description}
				</p>

				<a
					class="group flex items-center gap-1 text-xs font-semibold hover:text-zinc-400"
					href={`/writings/${writing.slug}`}
				>
					Read

					<svelte:component
						this={MoveRight}
						size="24"
						class="size-4 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</a>
			</li>
		{/each}
	</ul>
</div>
