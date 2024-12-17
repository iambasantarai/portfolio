<script lang="ts">
	import { slide } from 'svelte/transition';

	import { Hero, Education, Experience, Tools } from '$lib/components';
	import { Icon, AcademicCap, Briefcase } from 'svelte-hero-icons';

	import * as config from '$lib/config';
	import Projects from '$lib/components/Projects.svelte';

	const tabs = [
		{ name: 'Experience', icon: Briefcase, component: Experience },
		{ name: 'Education', icon: AcademicCap, component: Education }
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
					class="flex items-center justify-evenly rounded-lg border border-zinc-200/10"
				>
					{#each tabs as tab}
						<button
                            on:click={() => (selectedTab = tab)}
							class={`flex w-full rounded-lg outline-none justify-center p-2 transition-colors duration-300 ease-in-out ${selectedTab == tab ? 'bg-zinc-200/10' : 'text-zinc-400'}`}
						>
							<div
								class="flex items-center outline-none hover:text-zinc-300"
							>
								<div class="flex sm:space-x-2">
									<Icon
										src={tab.icon}
										size="24"
										solid
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
