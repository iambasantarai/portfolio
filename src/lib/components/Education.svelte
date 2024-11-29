<script lang="ts">
    const academics = [
        {start: "2019", finish: "2024", course: "Bsc. Computer Science and Information Technology", institution: "Prime College, TU"},
    ];
</script>

<section>
    <div class="mt-2">
        <ol class="relative border-l border-l-zinc-200">                  
            {#each academics as academic}
                <li class="mb-4 m-4">
                    <div class="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-zinc-300"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-zinc-400">{academic.start} - {academic.finish}</time>
                    <h3 class="text-lg font-semibold text-zinc-200">{academic.course}</h3>
                    <p class="text-base font-normal text-zinc-500">{academic.institution}</p>
                </li>
            {/each}
        </ol>
    </div>
</section>
