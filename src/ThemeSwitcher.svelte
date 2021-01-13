<script lang="ts">
import {darkTheme} from './stores'

const resetTheme = () => {
    if (confirm('Do you want to reset the theme based on your system preference ?')) {
        darkTheme.reset()
    }
}
</script>

<label for="theme-switcher" on:contextmenu|preventDefault={resetTheme}>
    <input checked={$darkTheme} on:change={darkTheme.toggle} on:contextmenu|preventDefault={resetTheme} id="theme-switcher" type="checkbox">
    Dark theme
</label>

<style>
    label {
        user-select: none;
    }
</style>