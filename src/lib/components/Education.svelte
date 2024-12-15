<script lang="ts">
	const academics = [
		{
			start: '2019',
			finish: '2024',
			course: 'BSc. Computer Science and Information Technology',
			institution: 'Prime College, TU'
		}
	];
</script>

<section>
	<div class="mt-2">
		<div class="rounded-lg border border-zinc-200/10 p-4">
			<ol class="relative border-l border-l-zinc-200">
				{#each academics as academic}
					<li class="m-4 mb-4">
						<div
							class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-300 bg-zinc-200"
						></div>
						<time class="mb-1 text-sm font-normal leading-none text-zinc-400"
							>{academic.start} - {academic.finish}</time
						>
						<h3 class="text-lg font-semibold text-zinc-200">
							{academic.course}
						</h3>
						<p class="text-base font-normal text-zinc-500">
							{academic.institution}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
