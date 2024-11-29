<script lang="ts">
    import {Hero, Education, Skills, Experience, Tools} from '$lib/components';
    import {Icon, AcademicCap, Briefcase, WrenchScrewdriver} from "svelte-hero-icons";

	import * as config from '$lib/config';

    const tabs = [
        {name: "Experience", icon: Briefcase, component: Experience},
        {name: "Skills", icon: WrenchScrewdriver, component: Skills},
        {name: "Education", icon: AcademicCap, component: Education},
    ]

    let selectedTab = tabs[0]
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<Hero/>

	<div class="mt-2">
		<div>
			<div class="mt-12">
                <ul class="flex flex-row space-x-4 mx-auto justify-between items-center sm:space-x-6">
                    {#each tabs as tab}
                        <li class="">
                            <button on:click={() => selectedTab = tab} class={`outline-none transition-colors duration-300 easy-in-out hover:text-zinc-300 ${selectedTab === tab ? 'text-zinc-200 border-b-2 border-b-zinc-200':'text-zinc-400' }`}>
                                <div class="flex sm:space-x-2">
                                    <Icon src={tab.icon} size="24" solid class="hidden sm:block" />
                                    <span class="font-semibold">{tab.name}</span>
                                </div>
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>

            <div>
                <svelte:component this={selectedTab.component}/>
            </div>

            <div class="mt-12">
                <h2 class="text-2xl font-bold text-zinc-200">Projects</h2>

                <p class="text-sm leading-normal text-zinc-400">Adding soon...</p>
			</div>

			<Tools/>
		</div>
	</div>
</section>
