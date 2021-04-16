<script lang="ts">
   import { mute } from '../stores';
   import { spring } from 'svelte/motion';
   import { onMount } from 'svelte';

   let ball: HTMLButtonElement;
   let position = spring({x: 0, y: 0}, { stiffness: 0.1, damping: 0.2 })
   const toggleMove = () => {
      if (!$mute) {
         const audio = new Audio('/ball.mp3');
         audio.volume = 0.1;
         audio.play();
      }
      position.update(({x,y}) => (x ? {x: 0, y} : {x: Math.min(window.innerWidth - 132, 500), y}));
   };

   let followButton: HTMLButtonElement;
   const updatePosition = (e: MouseEvent) => position.set({x: e.clientX, y: e.clientY});

   const startFollow = () => {
      ballState = 'follow';
      position.set({x: followButton.getBoundingClientRect().x + followButton.offsetWidth / 2, y: followButton.getBoundingClientRect().y + followButton.offsetHeight / 2})
      document.addEventListener('mousemove', updatePosition);
   }

   let ballState: 'move' | 'follow' = 'move';
   const ballActions = {
      move: toggleMove,
      follow: () => {
         ballState = 'move'; 
         document.removeEventListener('mousemove', updatePosition)
         $position.x = 0;
      }
   }

   onMount(() => {
      $position.y = ball.getBoundingClientRect().y;
   })

</script>

<div class="wrapper-grid">
   <div class="sliders-grid">
      <label for="stiffness">
         Stiffness: {position.stiffness}
         <input
            type="range"
            id="stiffness"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={position.stiffness}
         />
      </label>

      <label for="damping">
         Damping: {position.damping}
         <input
            type="range"
            id="damping"
            name="stiffness"
            min="0"
            max="1"
            step=".01"
            bind:value={position.damping}
         />
      </label>

      <label for="precision">
         Precision: {position.precision}
         <input
            type="range"
            id="precision"
            name="stiffness"
            min="0"
            max="3"
            step=".01"
            bind:value={position.precision}
         />
      </label>
   </div>

   <div class="controls">
      <button class="btn" on:click={toggleMove}>Move ball</button>
      <button class="btn" on:click={startFollow} bind:this={followButton}>Follow cursor</button>
   </div>

   <button
      class="ball"
      style={
         ballState === 'move'
            ? `transform: translate3d(${$position.x}px, 0, 0)`
            : `--opacity: 0.5;
               backdrop-filter: blur(2px);
               position: fixed; 
               left: ${$position.x}px;
               top: ${$position.y}px;
               transform: translate3d(-50%, -50%, 0)`
      }
      on:click={ballActions[ballState]}
      bind:this={ball}
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
