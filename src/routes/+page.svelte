<script lang="ts">
	import HeroSection from './hero.svelte';
	import Experience from './experience.svelte';
	import ToolBox from './tools.svelte';

	import * as config from '$lib/config';
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
				<h2 class="text-2xl font-bold text-zinc-400">Education</h2>

				<ol class="mt-2 space-y-4">
					<li class="flex gap-4">
						<dl class="flex flex-auto flex-wrap gap-x-2">
							<dt class="sr-only">Course</dt>
							<dd
								class="w-full flex-none text-base font-semibold text-zinc-100"
							>
								BSc.CSIT
							</dd>
							<dt class="sr-only">About</dt>
							<dd class="text-xs text-zinc-400">
								[TU] Prime College, Kathmandu
							</dd>
							<dt class="sr-only">Date</dt>
							<dd
								class="ml-auto text-xs text-zinc-500"
							>
								<time datetime="2023">2019</time>
								<span aria-hidden="true">—</span>
								<time datetime="2024">2024</time>
							</dd>
						</dl>
					</li>
				</ol>
			</div>

			<Experience />

            <div class="mt-12">
                <h2 class="text-2xl font-bold text-zinc-400">Projects</h2>

                <p class="text-xs leading-normal text-zinc-400">Adding soon...</p>
			</div>

			<ToolBox />
		</div>
	</div>
</section>
