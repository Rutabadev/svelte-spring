<script lang="ts">
   import Header from './partials/Header.svelte';
   import Spring from './partials/Spring.svelte';
   import { onMount } from 'svelte';
   import Context from './partials/Context.svelte';

   export let name: string = 'default world';

   onMount(async () => {
      setTimeout(() => {
         document.documentElement.style.setProperty('--duration-bg', '200ms');
         document.documentElement.style.setProperty('--duration-text', '1.5s');
      }, 100);
   });
</script>

<Header />

<main>
   <h1>Helloooooo I {name}!</h1>
   <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
   </p>
   <section>
      <h2>Design system</h2>
      <div>
         <ul>
            {#each new Array(4) as _item, i}
               <li>item {i + 1}</li>
            {/each}
         </ul>
         <ol>
            {#each new Array(4) as _item, i}
               <li>item {i + 1}</li>
            {/each}
         </ol>
      </div>
   </section>

   <section>
      <h2>Spring animation</h2>
      <Spring />
   </section>

   <section>
      <h2>Context</h2>
      <Context />
   </section>
</main>

<style>
   main {
      margin: auto;
      padding: 2rem;
      display: grid;
      gap: 3rem;
   }

   h2 {
      margin-bottom: 1.7rem;
   }

   @media (min-width: 480px) {
      main {
         max-width: 80%;
      }
   }

   @media (min-width: 900px) {
      main {
         max-width: 60%;
      }
   }
</style>
