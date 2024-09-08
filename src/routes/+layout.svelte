<script>
	import '../app.css';

    import Header from "./header.svelte"
    import Footer from "./footer.svelte"
</script>

<div class="min-h-screen bg-zinc-950 text-zinc-200 p-4">
    <div class="mx-auto max-w-xl">
        <Header />

        <main>
            <slot />
        </main>

        <Footer />

    </div>
</div>
