<script lang="ts">
import {darkTheme} from './stores'
</script>

<label for="theme-switcher">
    <input checked={$darkTheme} on:change={darkTheme.toggle} id="theme-switcher" type="checkbox">
    Dark theme
</label>

<style>
    label {
        user-select: none;
    }
</style>