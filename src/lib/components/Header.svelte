<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="mt-2 flex items-center justify-center">
		<nav
			class="flex gap-1 rounded-full border border-zinc-200/10 bg-zinc-950/75 p-1 backdrop-blur"
		>
			<a
				href="/"
				class={`rounded-full px-2 py-1.5 transition-opacity duration-300 ease-in-out hover:bg-zinc-200/5 ${$page.url.pathname === '/' ? 'border border-zinc-200/10 bg-zinc-200/10 text-zinc-200' : 'text-zinc-300/85'}`}
				>Home</a
			>
			<a
				href="/writings"
				class={`rounded-full px-2 py-1.5 transition-opacity duration-300 ease-in-out hover:bg-zinc-200/5 ${$page.url.pathname === '/writings' ? 'border border-zinc-200/10 bg-zinc-200/10' : 'text-zinc-300/85'}`}
				>Writings</a
			>
		</nav>
	</div>
</header>
