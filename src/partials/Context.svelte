<script context="module">
   export const key = {};
</script>

<script lang="ts">
   import { setContext } from 'svelte';
   import { writable } from 'svelte/store';

   import List from '../components/context/List.svelte';
   import ListItem from '../components/context/ListItem.svelte';

   const text = writable('item');
   setContext(key, text);
</script>

<List
   on:mouseenter={() => {
      $text = 'hovered';
   }}
   on:mouseleave={() => {
      $text = 'item';
   }}
>
   {#each Array(4) as _item, i}
      <ListItem>{$text} {i + 1}</ListItem>
   {/each}
</List>

<List>
   {#each Array(4) as _item, i}
      <ListItem>{$text === 'hovered' ? 'not ' : ''}{$text} {i + 1}</ListItem>
   {/each}
</List>
