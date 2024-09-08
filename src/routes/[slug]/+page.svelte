<script lang="ts">
    import {formatDate} from "$lib/utils";

    export let data;
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.metadata.title}/>
</svelte:head>

<article>
    <hgroup>
        <h1>{data.metadata.title}</h1>
        <p>{formatDate(data.metadata.date)}</p>
    </hgroup>

    <div class="prose prose-zinc">
        <svelte:component this={data.content} />
    </div>

</article>
