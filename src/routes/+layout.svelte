<script>
	import '../app.css';

    import Header from "./header.svelte"
    import Footer from "./footer.svelte"
</script>

<div>
    <Header />

    <slot />

    <Footer />
</div>
