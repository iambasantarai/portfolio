<script lang="ts">
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section class="">
	<div class="mt-8">
		<h2 class="text-2xl font-bold text-zinc-400">Experience</h2>

		<ol class="mt-6 space-y-4">
			<li class="flex gap-4">
				<dl class="flex flex-auto flex-wrap gap-x-2">
					<dt class="sr-only">Company</dt>
					<dd class="w-full flex-none text-base font-semibold text-zinc-100">
						Amnil Technologies Pvt. Ltd.
					</dd>
					<dt class="sr-only">Role</dt>
					<dd class="text-xs text-zinc-400">Associate Software Engineer</dd>
					<dt class="sr-only">Date</dt>
					<dd
						class="ml-auto text-xs text-zinc-500"
						aria-label="Aug, 2023 until Present"
					>
						<time datetime="2023">Aug, 2023</time>
						<span aria-hidden="true">—</span>
						<time datetime="2024">Present</time>
					</dd>
				</dl>
			</li>
			<li class="flex gap-4">
				<dl class="flex flex-auto flex-wrap gap-x-2">
					<dt class="sr-only">Company</dt>
					<dd class="w-full flex-none text-base font-semibold text-zinc-100">
						Amnil Technologies Pvt. Ltd.
					</dd>
					<dt class="sr-only">Role</dt>
					<dd class="text-xs text-zinc-400">Node.js Intern</dd>
					<dt class="sr-only">Date</dt>
					<dd
						class="ml-auto text-xs text-zinc-500"
						aria-label="May, 2023 until Aug, 2023"
					>
						<time datetime="2023">May, 2023</time>
						<span aria-hidden="true">—</span>
						<time datetime="2023">Aug, 2023</time>
					</dd>
				</dl>
			</li>
		</ol>

		<a
			class="g:bg-zinc-800/50 group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200/15 px-3 py-2 text-sm font-medium text-zinc-300 outline-offset-2 transition hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 active:transition-none"
			href="/"
		>
			Download Resume
			<svg
				viewBox="0 0 16 16"
				fill="none"
				aria-hidden="true"
				class="'':group-hover:stroke-zinc-50 '':group-active:stroke-zinc-50 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600"
			>
				<path
					d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
				</path>
			</svg>
		</a>
	</div>

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

	<div class="mt-8">
		<h2 class="text-2xl font-bold text-zinc-400">Writings</h2>
		<p class="text-xs leading-normal text-zinc-400">Basically experiments...</p>

		<ul class="mt-4 space-y-2">
			{#each data.blogs as blog}
				<li class="">
					<a
						class="text-lg font-semibold no-underline hover:underline"
						href={blog.slug}>{blog.title}</a
					>
					<p class="text-base font-normal leading-normal text-zinc-400">
						{blog.description}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
