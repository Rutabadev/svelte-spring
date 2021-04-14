<script lang="ts">
   import { mute } from '../stores';
   import { spring } from 'svelte/motion';

   const xSpring = spring(0, { stiffness: 0.1, damping: 0.2 });

   const toggleMove = () => {
      if (!$mute) {
         const audio = new Audio('/ball.mp3');
         audio.volume = 0.1;
         audio.play();
      }
      xSpring.update((x) => (x ? 0 : Math.min(window.innerWidth - 132, 500)));
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

   <button class="btn" on:click={toggleMove}> Move ball </button>

   <button
      class="ball"
      style={`transform: translate3d(${$xSpring}px, 0, 0)`}
      on:click={toggleMove}
   />
</div>

<style>
   .wrapper-grid {
      display: grid;
      gap: 2rem;
   }

   @media (min-width: 480px) {
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
   }

   .ball {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      --opacity: 0.5;
      background-color: hsla(var(--hue), 85%, 60%, var(--opacity));
      /* This is the equivalent to this, that is strangely not working */
      /* background-color: var(--primary-500); */
      backdrop-filter: blur(2px);

      cursor: pointer;
      outline: none;
   }

   .ball:focus-visible {
      outline: auto;
      outline-offset: 0.5rem;
   }
</style>
