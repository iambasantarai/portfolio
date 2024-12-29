<script lang="ts">
	import BashIcon from '../../assets/icons/bash.svelte';
	import DockerIcon from '../../assets/icons/docker.svelte';
	import GitIcon from '../../assets/icons/git.svelte';
	import GoIcon from '../../assets/icons/go.svelte';
	import JestIcon from '../../assets/icons/jest.svelte';
	import LuaIcon from '../../assets/icons/lua.svelte';
	import MySQLIcon from '../../assets/icons/mysql.svelte';
	import PGSQLIcon from '../../assets/icons/pgsql.svelte';
	import PortainerIcon from '../../assets/icons/portainer.svelte';
	import ExpressIcon from '../../assets/icons/express.svelte';
	import JavascriptIcon from '../../assets/icons/javascript.svelte';
	import NodeIcon from '../../assets/icons/nodejs.svelte';
	import ReactIcon from '../../assets/icons/react.svelte';
	import TypescriptIcon from '../../assets/icons/typescript.svelte';

	const programmingLanguages = [
		{ icon: JavascriptIcon, name: 'Javascript' },
		{ icon: TypescriptIcon, name: 'Typescript' },
		{ icon: GoIcon, name: 'Go' },
		{ icon: LuaIcon, name: 'Lua' },
		{ icon: BashIcon, name: 'Bash' }
	];

	const frameworkAndLibraries = [
		{ icon: ExpressIcon, name: 'Express' },
		{ icon: JestIcon, name: 'Jest' },
		{ icon: ReactIcon, name: 'React' }
	];

	const miscellaneous = [
		{ icon: DockerIcon, name: 'Docker' },
		{ icon: GitIcon, name: 'Git' },
		{ icon: MySQLIcon, name: 'MySQL' },
		{ icon: NodeIcon, name: 'Node.js' },
		{ icon: PGSQLIcon, name: 'PostgresSQL' },
		{ icon: PortainerIcon, name: 'Portianer' }
	];
</script>

<section>
	<div class="mt-2">
		<div class="space-y-6 rounded-lg border border-zinc-200/10 p-4">
			<div>
				<h2 class="text-sm font-semibold text-zinc-300">
					Programming Languages
				</h2>
				<div class="mt-2 grid grid-cols-4 gap-2 overflow-hidden">
					{#each programmingLanguages as programmingLanguage}
						<div
							class="group relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-200/10 px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors"
						>
							<svelte:component
								this={programmingLanguage.icon}
								class="size-6 transition-all duration-300 group-hover:-translate-y-1"
							/>
							<p class="hidden text-xs font-medium leading-none sm:block">
								{programmingLanguage.name}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h2 class="text-sm font-semibold text-zinc-300">
					Frameworks & Libraries
				</h2>
				<div class="mt-2 grid grid-cols-4 gap-2 overflow-hidden">
					{#each frameworkAndLibraries as frameworkAndLibrary}
						<div
							class="group relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-200/10 px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors"
						>
							<svelte:component
								this={frameworkAndLibrary.icon}
								class="size-6 transition-all duration-300 group-hover:-translate-y-1"
							/>
							<p class="hidden text-xs font-medium leading-none sm:block">
								{frameworkAndLibrary.name}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h2 class="text-sm font-semibold text-zinc-300">Others</h2>
				<div class="mt-2 grid grid-cols-4 gap-2 overflow-hidden">
					{#each miscellaneous as misc}
						<div
							class="group relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-200/10 px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors"
						>
							<svelte:component
								this={misc.icon}
								class="size-6 transition-all duration-300 group-hover:-translate-y-1"
							/>
							<p class="hidden text-xs font-medium leading-none sm:block">
								{misc.name}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
