<script lang="ts">
	import LinuxIcon from '../../assets/icons/linux.svelte';
	import NeovimIcon from '../../assets/icons/neovim.svelte';
	import TmuxIcon from '../../assets/icons/tmux.svelte';
	import TerminalIcon from '../../assets/icons/terminal.svelte';

	const tools = [
		{
			title: 'Linux',
			icon: LinuxIcon
		},
		{
			title: 'Terminal',
			icon: TerminalIcon
		},
		{
			title: 'Tmux',
			icon: TmuxIcon
		},
		{
			title: 'Neovim',
			icon: NeovimIcon
		}
	];
</script>

<div class="mt-12">
	<h2 class="text-2xl font-bold text-zinc-200">Tools</h2>
	<p class="mt-2 text-sm leading-normal text-zinc-400">
		The tools I rely on 
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
