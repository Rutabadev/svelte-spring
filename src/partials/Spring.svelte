<script lang="ts">
   import { mute } from '../stores';
   import { spring } from 'svelte/motion';

   let springParams = { stiffness: 0.1, damping: 0.2, precision: 0.01 };

   const xSpring = spring(0, springParams);
   const toggleMove = () => {
      if (!$mute) {
         const audio = new Audio('/ball.mp3');
         audio.volume = 0.1;
         audio.play();
      }
      xSpring.update((x) => (x ? 0 : Math.min(window.innerWidth - 132, 500)));
   };

   let position = spring({x: 0, y: 0}, springParams);
   document.addEventListener('mousemove', e => {
      position.set({x: e.clientX, y: e.clientY});
   })

   let springParams2 = {
      _stiffness: 0.1, _damping: 0.2, _precision: 0.01,
      get stiffness() { return this._stiffness},
      set stiffness(stiffness) { 
         this._stiffness = stiffness;
         xSpring.stiffness = stiffness;
         position.stiffness = stiffness;
      },
      get damping() { return this._damping},
      set damping(damping) { 
         this._damping = damping;
         xSpring.damping = damping;
         position.damping = damping;
      },
      get precision() { return this._precision},
      set precision(precision) { 
         this._precision = precision;
         xSpring.precision = precision;
         position.precision = precision;
      },
   }

   let ballState: 'move' | 'follow' = 'move';
   const ballActions = {
      move: toggleMove,
      follow: () => ballState = 'move'
   }

</script>

<div class="wrapper-grid">
   <div class="sliders-grid">
      <label for="stiffness">
         Stiffness: {springParams2.stiffness}
         <input
            type="range"
            id="stiffness"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={springParams2.stiffness}
         />
      </label>

      <label for="damping">
         Damping: {springParams2.damping}
         <input
            type="range"
            id="damping"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={springParams2.damping}
         />
      </label>

      <label for="precision">
         Precision: {springParams2.precision}
         <input
            type="range"
            id="precision"
            name="stiffness"
            min="0"
            max="3"
            step=".01"
            bind:value={springParams2.precision}
         />
      </label>
   </div>

   <div class="controls">
      <button class="btn" on:click={toggleMove}>Move ball</button>
      <button class="btn" on:click={() => ballState = 'follow'}>Follow cursor</button>
   </div>

   <button
      class="ball"
      style={
         ballState === 'move'
            ? `transform: translate3d(${$xSpring}px, 0, 0)`
            : `--opacity: 0.5;
               backdrop-filter: blur(2px);
               position: fixed; 
               left: ${$position.x}px;
               top: ${$position.y}px;
               transform: translate3d(-50%, -50%, 0)`
      }
      on:click={ballActions[ballState]}
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
      /* This is the equivalent to this, that is strangely not working */
      /* background-color: var(--primary-500); */
      background-color: hsla(var(--hue), 85%, 60%, var(--opacity));

      cursor: pointer;
      outline: none;
   }

   .controls {
      display: flex;
      gap: 2rem;
   }

   .ball:focus-visible {
      outline: auto;
      outline-offset: 0.5rem;
   }
</style>
