<script lang="ts">
	import BashIcon from '../../assets/icons/bash.svelte';
	import DockerIcon from '../../assets/icons/docker.svelte';
	import ExpressIcon from '../../assets/icons/express.svelte';
	import GitIcon from '../../assets/icons/git.svelte';
	import GoIcon from '../../assets/icons/go.svelte';
	import GraphQLIcon from '../../assets/icons/graphql.svelte';
	import JavascriptIcon from '../../assets/icons/javascript.svelte';
	import LoopBackIcon from '../../assets/icons/loopback.svelte';
	import LuaIcon from '../../assets/icons/lua.svelte';
	import MongoDBIcon from '../../assets/icons/mongo.svelte';
	import MySQLIcon from '../../assets/icons/mysql.svelte';
	import NestIcon from '../../assets/icons/nest.svelte';
	import NodeIcon from '../../assets/icons/nodejs.svelte';
	import PGSQLIcon from '../../assets/icons/pgsql.svelte';
	import RabbitMQIcon from '../../assets/icons/rabbitmq.svelte';
	import TypescriptIcon from '../../assets/icons/typescript.svelte';

	const programmingLanguages = [
		{ icon: BashIcon, name: 'Bash' },
		{ icon: GoIcon, name: 'Go' },
		{ icon: JavascriptIcon, name: 'Javascript' },
		{ icon: LuaIcon, name: 'Lua' },
		{ icon: TypescriptIcon, name: 'Typescript' },
	];

	const frameworkAndLibraries = [
		{ icon: ExpressIcon, name: 'Express' },
		{ icon: LoopBackIcon, name: 'LoopBack' },
		{ icon: NestIcon, name: 'Nest' },
	];

	const miscellaneous = [
		{ icon: DockerIcon, name: 'Docker' },
		{ icon: GitIcon, name: 'Git' },
		{ icon: GraphQLIcon, name: 'GraphQL' },
		{ icon: MongoDBIcon, name: 'MongoDB' },
		{ icon: MySQLIcon, name: 'MySQL' },
		{ icon: NodeIcon, name: 'Node.js' },
		{ icon: PGSQLIcon, name: 'PostgresSQL' },
		{ icon: RabbitMQIcon, name: 'RabbitMQ' },
	];
</script>

<section>
	<div class="mt-3">
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
