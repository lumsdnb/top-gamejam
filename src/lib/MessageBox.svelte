<script>
  import Typewriter from 'svelte-typewriter';
  import { set_data } from 'svelte/internal';
  import { gameData, messageSystem } from '../stores.js';
  export let player = false;
  export let mood = 'sad';
  export let noteLetter = 'c';
  const showNextButton = () => {
    console.log('showing btn');
    document.getElementById('next-button').classList.remove('hidden');
  };
  const nextStep = () => {
    //document.getElementById('next-button').classList.add('hidden');
    if ($gameData.tutorialState !== 4) {
      $gameData.tutorialState += 1;
    }
  };
</script>

<!-- Todo: find a better way to set the order of thes -->
<div class="message-box">
  {#if player}
    <img id="player-img" src="/static/assets/favicon.png" alt="" />
    <!-- show btn when chord is built - todo: hide when  -->
    {#if $gameData.enteredNotes.length >= 3 && $gameData.canPresent}
      <button class="check-btn" on:click>present chord</button>
    {/if}
    {#if $gameData.enteredNotes.length < 3}
      <Typewriter interval={100} cursor={false} on:done={showNextButton}>
        <p class="msg-txt">{$messageSystem[$gameData.tutorialState][0]}</p>
      </Typewriter>
    {/if}

    <button id="next-button" class="hidden" on:click={nextStep}>next</button>
  {:else}
    <!-- opponent box -->
    <Typewriter interval={100} cursor={false} on:done={showNextButton}>
      <p class="msg-txt">{$messageSystem[$gameData.tutorialState][1]}</p>
    </Typewriter>
    <img src={`/static/forest-of-letters/${noteLetter}-${mood}.png`} alt="" />
  {/if}
  <!-- boxes on the corners -->
  <div class="box b1" />
  <div class="box b2" />
  <div class="box b3" />
  <div class="box b4" />
</div>

<style>
  .hidden {
    visibility: hidden;
  }
  @media (min-width: 750px) {
    .message-box {
      max-width: 520px;
      margin: auto;
      margin-right: auto;
      margin-right: 0px;
    }
  }
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

  .msg-txt {
    padding: 0 1rem;
    font-size: var(--fz5);
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
