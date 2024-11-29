<script lang="ts">
	let resumeURL = '/basanta_rai_resume_2024.pdf';

    import {Icon, DocumentArrowDown} from "svelte-hero-icons";

    const workExperiences = [
        {from: "Aug, 2023", to: "Present", company: "Amnil Technologies Pvt. Ltd.", position: "Associate Software Engineer"},
        {from: "May, 2023", to: "Aug, 2023", company: "Amnil Technologies Pvt. Ltd.", position: "Node.js Intern"},
    ];
</script>

<div class="mt-2">
    <div class="">
        <ol class="relative border-l border-l-zinc-200">                  
            {#each workExperiences as workExperience}
                <li class="m-4">
                    <div class="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-zinc-300"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-zinc-400">{workExperience.from} - {workExperience.to}</time>
                    <h3 class="text-lg font-semibold text-zinc-200">{workExperience.company}</h3>
                    <p class="text-base font-normal text-zinc-500">{workExperience.position}</p>
                </li>
            {/each}
        </ol>

        <a
            href={resumeURL}
            download="basanta-rai-resume.pdf"
            class="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200/15 bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-300 outline-offset-2 transition hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 active:transition-none"
            >
            Download Resume
            <Icon src={DocumentArrowDown} size="20"/>
        </a>
    </div>
</div>

