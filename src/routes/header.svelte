<script lang="ts">
    import {base} from "$app/paths";
</script>

<header>
	<div class="mt-2 flex items-center justify-center">
		<nav
			class="flex gap-1 rounded-full border border-zinc-100/15 bg-zinc-200/10 p-1 backdrop-blur"
		>
			<a
				href="{base}/"
				class="rounded-full px-2 py-1.5 transition duration-300 hover:bg-zinc-200/5"
				>Home</a
			>
			<a
				href="{base}/writings"
				class="rounded-full px-2 py-1.5 transition duration-300 hover:bg-zinc-200/5"
				>Writings</a
			>
		</nav>
	</div>
</header>
