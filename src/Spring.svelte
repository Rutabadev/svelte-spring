<script lang="ts">
   import { spring } from 'svelte/motion';

   const xSpring = spring(0, { stiffness: 0.1, damping: 0.2 });

   const toggleMove = () => {
      xSpring.update((x) => (x ? 0 : Math.min(window.innerWidth - 100, 500)));
   };
</script>

<div class="wrapper-grid">
   <div class="sliders-grid">
      <label for="stiffness">
         Stiffness: {xSpring.stiffness}
         <input
            type="range"
            id="stiffness"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={xSpring.stiffness}
         />
      </label>

      <label for="damping">
         Damping: {xSpring.damping}
         <input
            type="range"
            id="damping"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={xSpring.damping}
         />
      </label>

      <label for="precision">
         Precision: {xSpring.precision}
         <input
            type="range"
            id="precision"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={xSpring.precision}
         />
      </label>
   </div>

   <button on:click={toggleMove}> Move ball </button>

   <div
      on:click={toggleMove}
      class="ball"
      style={`transform: translate3d(${$xSpring}px, 0, 0)`}
   />
</div>

<style>
   .ball {
      width: 50px;
      height: 50px;
      background-color: var(--primary-500);
      border-radius: 50%;
      cursor: pointer;
   }

   .wrapper-grid {
      display: grid;
      gap: 2rem;
   }

   @media (min-width: 470px) {
      .wrapper-grid,
      .sliders-grid {
         place-items: start;
      }
      .sliders-grid {
         grid-auto-flow: column;
      }
   }

   .sliders-grid {
      display: grid;
      gap: 1.5rem;
   }

   label {
      display: grid;
      gap: 0.5rem;
      order: 2;
   }
</style>
