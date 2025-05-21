<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Swords, Briefcase, GraduationCap } from 'lucide-svelte';
	import * as config from '$lib/config';

	import {
		Hero,
		Education,
		Experience,
		Tools,
		Projects,
		Skills
	} from '$lib/components';

	const tabs = [
		{ name: 'Experience', icon: Briefcase, component: Experience },
		{ name: 'Skills', icon: Swords, component: Skills },
		{ name: 'Education', icon: GraduationCap, component: Education }
	];

	let selectedTab = tabs[0];
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<Hero />

	<div class="mt-2">
		<div>
			<div class="mt-12">
				<div
					class="flex items-center justify-evenly overflow-hidden rounded-lg border border-zinc-200/10"
				>
					{#each tabs as tab}
						<button
							on:click={() => (selectedTab = tab)}
							class={`flex w-full justify-center p-2 outline-none transition-colors duration-300 ease-in-out ${selectedTab == tab ? 'bg-zinc-800' : 'text-zinc-400'}`}
						>
							<div class="flex items-center outline-none hover:text-zinc-300">
								<div class="flex sm:space-x-2">
									<svelte:component
										this={tab.icon}
										size="24"
										class="hidden sm:block"
									/>
									<span class="font-semibold">{tab.name}</span>
								</div>
							</div>
						</button>
					{/each}
				</div>
			</div>

			{#key selectedTab}
				<div transition:slide={{ duration: 300, axis: 'y' }}>
					<svelte:component this={selectedTab.component} />
				</div>
			{/key}

			<Projects />

			<Tools />
		</div>
	</div>
</section>
