<script lang="ts">
	import DockerIcon from '../../assets/icons/docker.svelte';
	import GitIcon from '../../assets/icons/git.svelte';
	import LinuxIcon from '../../assets/icons/linux.svelte';
	import NeovimIcon from '../../assets/icons/neovim.svelte';
	import TmuxIcon from '../../assets/icons/tmux.svelte';

	const tools = [
		{
			title: 'Linux',
			icon: LinuxIcon
		},
		{
			title: 'Tmux',
			icon: TmuxIcon
		},
		{
			title: 'Neovim',
			icon: NeovimIcon
		},
		{
			title: 'Docker',
			icon: DockerIcon
		},
		{
			title: 'Git',
			icon: GitIcon
		},
	];
</script>

<div class="mt-12">
	<h2 class="text-2xl font-bold text-zinc-200">Uses</h2>
	<p class="mt-2 text-sm leading-normal text-zinc-400">
        The tools I rely on for my Personal Development Environment(PDE)
	</p>

	<div
		class="mt-6 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
	>
		<div
			class="flex flex-none animate-move-left gap-6 py-0.5 [animation-duration:30s] hover:[animation-play-state:paused]"
		>
			{#each [...tools, ...tools] as tool}
				<div
					class="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-zinc-200/10"
				>
					<span>
						<svelte:component this={tool.icon} />
					</span>
					<span class="font-semibold">{tool.title}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
