<script lang="ts">
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<div class="mt-2">
		<div class="">
			<a
				aria-label="Home"
				class="pointer-events-auto block h-16 w-16 origin-left"
				href="/"
			>
				<img
					alt="headshot"
					class="h-16 w-16 rounded-full bg-zinc-800 object-cover"
					src="/basanta.png"
				/>
			</a>

			<div class="mt-2">
				<h1 class="text-2xl font-semibold">Basanta Rai</h1>
				<p>
					Developer from <span class="font-semibold underline">Nepal.</span>
				</p>
			</div>
		</div>
	</div>

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
