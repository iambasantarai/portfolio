<script lang="ts">
	import { blur } from 'svelte/transition';

	export let url: string = '';
</script>

{#key url}
	<div in:blur={{ duration: 300 }}>
		<slot />
	</div>
{/key}
