<script>
  import { set_data } from 'svelte/internal';
  import { gameData } from '../stores.js';
  import Typewriter from 'svelte-typewriter';
  export let message = 'i am sad...';
  export let player = false;
  export let mood = 'sad';
  const nextMessage = () => {
    $gameData.tutorialState += 1;
    $gameData.canProgress = false;
  };
</script>

<!-- Todo: find a better way to set the order of thes -->
<div class="message-box">
  {#if player}
    <img id="player-img" src="/static/assets/favicon.png" alt="" />
    {#if $gameData.enteredNotes.length >= 3}
      <button class="check-btn" on:click>present chord</button>
    {/if}
    {#if $gameData.enteredNotes.length < 3}
      <Typewriter
        interval={80}
        cursor={false}
        on:done={() => {
          if ($gameData.tutorialState != 0) $gameData.canProgress = true;
        }}
      >
        <p>{message}</p>
      </Typewriter>
    {/if}
    {#if $gameData.canProgress}
      <button on:click={nextMessage}>></button>
    {/if}
  {:else}
    <!-- character box -->
    <Typewriter
      interval={110}
      cursor={false}
      on:done={() => {
        if ($gameData.tutorialState != 0) $gameData.canProgress = true;
      }}
    >
      <p>{message}</p>
    </Typewriter>
    <img src={`/static/forest-of-letters/c-${mood}.png`} alt="" />
  {/if}
  <!-- boxes on the corners -->
  <div class="box b1" />
  <div class="box b2" />
  <div class="box b3" />
  <div class="box b4" />
</div>

<style>
  /* add media query */
  .message-box {
    color: white;
    width: 100%;
    /* height: 5rem; */
    background-color: var(--bg2);
    border: 1px white solid;
    padding: 0.2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* display: grid;
    grid-template-columns: ; */
  }
  .message-box > p {
    padding: 0 1rem;
  }
  img {
    max-width: 25%;
    border: 1px solid orangered;
  }
  #player-img {
    background-color: #085e2b;
    border: 1px solid #e25714;
  }
  .check-btn {
    background-color: var(--accent-color2);
    color: var(--bg2);
    font-size: 2rem;
    width: 100%;
    align-self: stretch;
    border: none;
    transition: all 40ms ease-in-out;
  }
  .check-btn:hover {
    background-color: var(--accent-color1);
    color: var(--accent-color2);
    font-size: 2.2rem;
  }
  .check-btn:active {
    font-size: 1.9rem;
  }
  .box {
    background-color: white;
    width: 0.4em;
    height: 0.4em;
    position: absolute;
  }
  .b1 {
    top: -0.2em;
    left: -0.2em;
  }
  .b2 {
    top: -0.2em;
    right: -0.2em;
  }
  .b3 {
    bottom: -0.2em;
    left: -0.2em;
  }
  .b4 {
    bottom: -0.2em;
    right: -0.2em;
  }
</style>
