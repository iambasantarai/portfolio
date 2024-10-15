<script lang="ts">
    import {page} from "$app/stores";
</script>

<header>
	<div class="mt-2 flex items-center justify-center">
		<nav
			class="flex gap-1 rounded-full border border-zinc-100/15 bg-zinc-200/10 p-1 backdrop-blur"
		>
			<a
				href="/"
				class={`rounded-full px-2 py-1.5 transition ease-in-out duration-300 hover:bg-zinc-200/5 ${$page.url.pathname === '/' ? 'underline underline-offset-4' : ''}`}
				>Home</a
			>
			<a
				href="/writings"
				class={`rounded-full px-2 py-1.5 transition ease-in-out duration-300 hover:bg-zinc-200/5 ${$page.url.pathname === '/writings' ? 'underline underline-offset-4' : ''}`}
				>Writings</a
			>
		</nav>
	</div>
</header>
