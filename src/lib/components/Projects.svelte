<script lang="ts">
	import { fade } from 'svelte/transition';

	const projects = [
		{
			name: 'ga (ग)',
			description:
				'A toy programming language inspired by C that uses the devnagari script, is currently a work in progress. It was born out of my curiosity about how compilers function and my desire to understand the intricacies of programming language design.',
			stack: 'go',
			source: 'https://github.com/iambasantarai/ga'
		}
	];

	let visibleProjects = 2;

	function viewMore() {
		visibleProjects += 2;
	}

	function viewLess() {
		visibleProjects = 2;
	}
</script>

<section>
	<div class="mt-12">
		<h2 class="text-2xl font-bold text-zinc-200">Projects</h2>

		<p class="mt-2 text-sm leading-normal text-zinc-400">Featured projects</p>

		<div class="mt-6 space-y-4">
			{#each projects.slice(0, visibleProjects) as project}
				<div transition:fade={{ duration: 300 }}>
					<div class="flex items-center justify-between">
						<div class="rounded-t-lg bg-zinc-800 p-1 px-4 font-semibold">
							{project.name}
						</div>
						<span class="hidden text-xs sm:block">[{project.stack}]</span>

						<a
							class="flex items-center gap-1 rounded-lg bg-zinc-800 p-1 text-xs font-semibold outline-none ring-1 ring-inset ring-zinc-200/10 transition-colors duration-300 ease-in-out hover:text-zinc-400 sm:hidden"
							href={project.source}
						>
							<svg
								class="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/>
							</svg>
							source
						</a>
					</div>

					<div
						class="flex rounded-b-lg rounded-r-lg border-2 border-zinc-800 p-2 text-zinc-400"
					>
						{project.description}
					</div>

					<div class="flex items-center justify-between py-1">
						<span class="block text-xs sm:hidden">[{project.stack}]</span>

						<a
							class="hidden items-center gap-1 rounded-lg bg-zinc-800 p-1 text-xs font-semibold outline-none ring-1 ring-inset ring-zinc-200/10 transition-colors duration-300 ease-in-out hover:text-zinc-400 sm:flex"
							href={project.source}
						>
							<svg
								class="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/>
							</svg>
							source
						</a>
					</div>
				</div>
			{/each}
		</div>

		{#if visibleProjects < projects.length}
			<div class="mt-6 text-center">
				<button
					class="rounded-lg border border-zinc-200/10 px-3 py-2 text-sm font-medium text-zinc-400 outline-offset-2 transition-colors duration-300 ease-in-out hover:bg-zinc-700 hover:text-zinc-300"
					on:click={viewMore}
				>
					View more
				</button>
			</div>
		{/if}

		{#if visibleProjects > 3}
			<div class="mt-4 text-center">
				<button
					class="rounded-lg border border-zinc-200/10 px-3 py-2 text-sm font-medium text-zinc-400 outline-offset-2 transition-colors duration-300 ease-in-out hover:bg-zinc-700 hover:text-zinc-300"
					on:click={viewLess}
				>
					View less
				</button>
			</div>
		{/if}
	</div>
</section>
