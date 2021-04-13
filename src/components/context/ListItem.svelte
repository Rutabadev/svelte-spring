<script lang="ts">
   import { getContext } from 'svelte';
   import { key } from './List.svelte';

   const { getColor } = getContext(key);
   const color = getColor();
</script>

<li style="color: {$color}">
   <slot />
</li>
