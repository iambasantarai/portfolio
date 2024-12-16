<script lang="ts">
	import { slide } from 'svelte/transition';

	import { Hero, Education, Experience, Tools } from '$lib/components';
	import { Icon, AcademicCap, Briefcase } from 'svelte-hero-icons';

	import * as config from '$lib/config';

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
				<ul
					class="flex items-center justify-evenly rounded-lg border border-zinc-200/10"
				>
					{#each tabs as tab}
						<li
							class={`easy-in-out flex w-full justify-center p-2 transition-colors duration-300 ${selectedTab == tab ? 'bg-zinc-800/50' : 'text-zinc-400'}`}
						>
							<button
								on:click={() => (selectedTab = tab)}
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
							</button>
						</li>
					{/each}
				</ul>
			</div>

			{#key selectedTab}
				<div transition:slide={{ duration: 300, axis: 'y' }}>
					<svelte:component this={selectedTab.component} />
				</div>
			{/key}

			<Tools />
		</div>
	</div>
</section>
