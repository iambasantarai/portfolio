<script lang="ts">
	import DockerIcon from '../assets/icons/docker.svelte';
	import ExpressIcon from '../assets/icons/express.svelte';
	import GitIcon from '../assets/icons/git.svelte';
	import GoIcon from '../assets/icons/golang.svelte';
	import JsIcon from '../assets/icons/js.svelte';
	import LaravelIcon from '../assets/icons/laravel.svelte';
	import LinuxIcon from '../assets/icons/linux.svelte';
	import LuaIcon from '../assets/icons/lua.svelte';
	import NeovimIcon from '../assets/icons/neovim.svelte';
	import NodeJsIcon from '../assets/icons/nodejs.svelte';
	import PHPIcon from '../assets/icons/php.svelte';
	import TmuxIcon from '../assets/icons/tmux.svelte';
	import TsIcon from '../assets/icons/ts.svelte';

	const toolBoxItems = [
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
		{
			title: 'Lua',
			icon: LuaIcon
		},
		{
			title: 'Go',
			icon: GoIcon
		},
		{
			title: 'Javascript',
			icon: JsIcon
		},
		{
			title: 'Typescript',
			icon: TsIcon
		},
		{
			title: 'Node.js',
			icon: NodeJsIcon
		},
		{
			title: 'Express',
			icon: ExpressIcon
		},
		{
			title: 'PHP',
			icon: PHPIcon
		},
		{
			title: 'Laravel',
			icon: LaravelIcon
		}
	];
</script>

<div class="mt-8">
	<h2 class="text-2xl font-bold text-zinc-400">Toolbox</h2>
	<p class="text-xs leading-normal text-zinc-400">
		Tools and technologies that i'm familiar with...
	</p>

	<div
		class="mt-6 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
	>
		<div
			class="flex flex-none animate-move-left gap-6 py-0.5 [animation-duration:30s]"
		>
			{#each [...toolBoxItems, ...toolBoxItems] as item}
				<div
					class="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-zinc-200/10"
				>
					<span>
						<svelte:component this={item.icon} />
					</span>
					<span class="font-semibold">{item.title}</span>
				</div>
			{/each}
		</div>
	</div>

	<div
		class="mt-6 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
	>
		<div
			class="flex flex-none animate-move-right gap-6 py-0.5 pr-6 [animation-duration:15s]"
		>
			{#each [...toolBoxItems, ...toolBoxItems] as item}
				<div
					class="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-zinc-200/10"
				>
					<span>
						<svelte:component this={item.icon} />
					</span>
					<span class="font-semibold">{item.title}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
