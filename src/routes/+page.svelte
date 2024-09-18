<script lang="ts">
	import HeroSection from './hero.svelte';
	import Experience from './experience.svelte';
	import ToolBox from './tools.svelte';

	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section class="">
	<HeroSection />

	<div class="mt-8">
		<h2 class="text-2xl font-bold text-zinc-400">Education</h2>

		<ol class="mt-6 space-y-4">
			<li class="flex gap-4">
				<dl class="flex flex-auto flex-wrap gap-x-2">
					<dt class="sr-only">Course</dt>
					<dd class="w-full flex-none text-base font-semibold text-zinc-100">
						BSc.CSIT
					</dd>
					<dt class="sr-only">About</dt>
					<dd class="text-xs text-zinc-400">[TU] Prime College, Kathmandu</dd>
					<dt class="sr-only">Date</dt>
					<dd
						class="ml-auto text-xs text-zinc-500"
						aria-label="Aug, 2023 until Present"
					>
						<time datetime="2023">2019</time>
						<span aria-hidden="true">—</span>
						<time datetime="2024">Present</time>
					</dd>
				</dl>
			</li>
		</ol>
	</div>

	<Experience />

	<ToolBox />
</section>
