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

                <a class="group flex items-center gap-1 font-semibold hover:text-zinc-400 text-xs" href={`/writings/${writing.slug}`}>
                    Read 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M18 8L22 12L18 16"></path>
                        <path d="M2 12H22"></path>
                    </svg>
                </a>
			</li>
		{/each}
	</ul>
</div>
