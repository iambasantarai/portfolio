<script lang="ts">
	let resumeURL = '/basanta_rai_cv_2025.pdf';

	import { Icon, Eye } from 'svelte-hero-icons';

	const experiences = [
		{
			from: 'Aug, 2023',
			to: 'Present',
			company: 'Amnil Technologies Pvt. Ltd.',
			position: 'Associate Software Engineer'
		},
		{
			from: 'May, 2023',
			to: 'Aug, 2023',
			company: 'Amnil Technologies Pvt. Ltd.',
			position: 'Node.js Intern'
		}
	];
</script>

<div class="mt-2">
	<div class="rounded-lg border border-zinc-200/10 p-4">
		<ol class="relative border-l border-l-zinc-200">
			{#each experiences as experience}
				<li class="m-4">
					<div
						class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-300 bg-zinc-200"
					></div>

					<time class="text-xs font-normal leading-none text-zinc-400">
						{experience.from} - {experience.to}
					</time>

					<h3 class="mt-2 text-lg font-semibold text-zinc-200">
						{experience.company}
					</h3>

					<p class="text-base font-normal text-zinc-400">
						{experience.position}
					</p>
				</li>
			{/each}
		</ol>

		<a
			href={resumeURL}
            target="_blank"
			class="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200/15 bg-zinc-800 px-3 py-2 text-sm font-medium text-zinc-400 outline-offset-2 transition-colors duration-300 ease-in-out hover:bg-zinc-700 hover:text-zinc-300"
		>
			View CV
			<Icon src={Eye} size="20" />
		</a>
	</div>
</div>
