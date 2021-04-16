<button
   class="btn switch"
   on:click
   on:contextmenu|preventDefault
>
   <slot/>
</button>

<style>
   .switch {
      padding: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;

      box-shadow: none;
      transition: box-shadow var(--duration-bg);
      outline-offset: 0.2rem;
   }

   .switch:is(:hover, :focus) {
      box-shadow: var(--shadow-md);
   }

   .switch:active {
      box-shadow: none;
      transition: none;
   }
</style>