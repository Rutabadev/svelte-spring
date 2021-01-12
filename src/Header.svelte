<script lang="ts">
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<header>
    <span class="title">Svelte Spring</span>
    <ThemeSwitcher/>
</header>

<style>
    header {
        padding: .5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-500);
        color: var(--bg);
        box-shadow: 0 0 6px hsla(var(--hue), 2%, 2%, 85%);
    }

    :global(body.dark) header {
        box-shadow: 0 0 30px hsla(var(--hue), 52%, 43%, 85%);
    }

    header .title {
        font-size: 2.5rem;
        font-weight: bold;
    }
</style>