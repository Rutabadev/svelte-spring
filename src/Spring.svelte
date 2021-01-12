<script lang="ts">
    import {spring} from "svelte/motion"

    const xSpring = spring(0, {stiffness: .1, damping: .2})

    const toggleMove = () =>
        xSpring.update(x => x ? 0 : 500)

</script>

<button on:click={toggleMove}>
    Move ball
</button>

<div on:click={toggleMove} class="ball" style="{`transform: translate3d(${$xSpring}px, 0, 0)`}"></div>

<style>
    .ball {
        margin-top: 2rem;
        width: 50px;
        height: 50px;
        background-color: var(--primary-500);
        border-radius: 50%;
    }
</style>