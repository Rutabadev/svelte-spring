<script lang="ts">
   import MuteSwitcher from './MuteSwitcher.svelte';
   import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
   <span class="title">Svelte Spring</span>
   <div class="right-header">
      <MuteSwitcher />
      <ThemeSwitcher />
   </div>
</header>

<style>
   header {
      padding: 0.5rem 1rem;
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

   .right-header {
      display: flex;
   }
</style>
