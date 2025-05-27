<script lang="ts">
	const academics = [
		{
			start: '2019',
			finish: '2024',
			course: '[TU] BSc. Computer Science and Information Technology',
			institution: 'Prime College, Kathmandu'
		}
	];
</script>

<section>
	<div class="mt-3">
		<div class="rounded-lg border border-zinc-200/10 p-4">
			<ol class="relative border-l border-l-zinc-200">
				{#each academics as academic}
					<li class="m-4 mb-4">
						<div
							class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-300 bg-zinc-200"
						></div>

						<time class="text-xs font-normal leading-none text-zinc-400">
							{academic.start} - {academic.finish}
						</time>

						<h3 class="mt-2 text-lg font-semibold text-zinc-200">
							{academic.course}
						</h3>

						<p class="text-base font-normal text-zinc-400">
							{academic.institution}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
