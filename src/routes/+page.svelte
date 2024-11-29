<script lang="ts">
    import {Education, Skills, WorkExperience} from '$lib/components';
    import {Icon, AcademicCap, Briefcase, WrenchScrewdriver} from "svelte-hero-icons";

	import HeroSection from './hero.svelte';
	import ToolBox from './tools.svelte';

	import * as config from '$lib/config';

    const tabs = [
        {name: "Work Experience", icon: Briefcase, component: WorkExperience},
        {name: "Skills", icon: WrenchScrewdriver, component: Skills},
        {name: "Education", icon: AcademicCap, component: Education},
    ]

    let selectedTab = tabs[0]
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<HeroSection />

	<div class="mt-2">
		<p class="text-center text-base">
			Hi, I’m Basanta, a <span class="font-semibold">backend</span> developer
			from <span class="font-semibold">Nepal</span>.
		</p>

		<div>
			<div class="mt-2">
				<ol
					class="mx-auto flex flex-row items-center justify-center divide-x-2 divide-current divide-zinc-400"
				>
					<li class="px-4">
						<a
							href="https://github.com/iambasantarai"
							target="_blank"
							class="font-semibold text-zinc-400 underline hover:text-zinc-200"
							>GitHub</a
						>
					</li>

					<li class="px-4">
						<a
							href="https://www.linkedin.com/in/iambasantarai/"
							target="_blank"
							class="font-semibold text-zinc-400 underline hover:text-zinc-200"
							>LinkedIn</a
						>
					</li>

					<li class="px-4">
						<a
							href="https://x.com/iambasantarai"
							target="_blank"
							class="font-semibold text-zinc-400 underline hover:text-zinc-200"
							>X</a
						>
					</li>
				</ol>
			</div>


			<div class="mt-12">
                <ul class="flex flex-row space-x-6 mx-auto justify-between items-center">
                    {#each tabs as tab}
                        <li class="">
                            <button on:click={() => selectedTab = tab} class={`hover:text-zinc-300 ${selectedTab === tab ? 'text-zinc-200 border-b-2 border-b-zinc-200':'text-zinc-400' }`}>
                                <div class="flex space-x-2">
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
                <h2 class="text-2xl font-bold text-zinc-400">Projects</h2>

                <p class="text-xs leading-normal text-zinc-400">Adding soon...</p>
			</div>

			<ToolBox />
		</div>
	</div>
</section>
