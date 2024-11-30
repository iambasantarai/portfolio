<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="mt-2 flex items-center justify-center">
		<nav
			class="flex gap-1 rounded-full border border-zinc-100/15  p-1 bg-zinc-950/75 backdrop-blur"
		>
			<a
				href="/"
				class={`rounded-full px-2 py-1.5 transition-opacity duration-300 ease-in-out hover:bg-zinc-200/5 ${$page.url.pathname === '/' ? 'bg-zinc-200/5 border border-zinc-100/10 text-zinc-200' : 'text-zinc-300/85'}`}
				>Home</a
			>
			<a
				href="/writings"
				class={`rounded-full px-2 py-1.5 transition-opacity duration-300 ease-in-out hover:bg-zinc-200/5 ${$page.url.pathname === '/writings' ? 'bg-zinc-200/5 border border-zinc-100/10' : 'text-zinc-300/85'}`}
				>Writings</a
			>
		</nav>
	</div>
</header>
