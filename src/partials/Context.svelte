<script context="module">
   export const key = {};
</script>

<script lang="ts">
   import { setContext } from 'svelte';
   import { writable } from 'svelte/store';

   import List from '../components/List.svelte';
   import ListItem from '../components/ListItem.svelte';

   const text = writable('item');
   setContext(key, text);
</script>

<div
   on:mouseenter={() => {
      $text = 'hovered';
   }}
   on:mouseleave={() => {
      $text = 'item';
   }}
>
   <List>
      {#each Array(4) as _item, i}
         <ListItem>{$text} {i + 1}</ListItem>
      {/each}
   </List>
</div>

<List>
   {#each Array(4) as _item, i}
      <ListItem>{$text === 'hovered' ? 'not ' : ''}{$text} {i + 1}</ListItem>
   {/each}
</List>
