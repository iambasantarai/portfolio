<script lang="ts">
    import  * as config from "$lib/config";
    import {formatDate} from "$lib/utils";

    export let data
</script>

<svelte:head>
    <title>{config.name}</title>
</svelte:head>

<section>
    <ul>
        {#each data.blogs as blog}
            <li>
                <a href={blog.slug}>{blog.title}</a>
                <p>{formatDate(blog.date)}</p>
                <p>{blog.description}</p>
            </li>
        {/each}
    </ul>
</section>
