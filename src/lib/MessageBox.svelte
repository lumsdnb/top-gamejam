<script>
  import Typewriter from 'svelte-typewriter';
  import { set_data } from 'svelte/internal';
  import { gameData, messageSystem } from '../stores.js';
  export let player = false;
  export let mood = 'sad';
  export let noteLetter = 'c';
  export let message = 'YALLS';
  export let wizard = false;
  const showNextButton = () => {
    if (
         $gameData.tutorialState!==0
      && $gameData.tutorialState!==4
      && $gameData.tutorialState!==5
      && $gameData.tutorialState!==6
      && $gameData.tutorialState!==7
      && $gameData.tutorialState!==8 
      ) {
      
      console.log('showing btn');
      document.getElementById('next-button').classList.remove('hidden');
    }
  };
  const nextStep = () => {
    document.getElementById('next-button').classList.add('hidden');
    if ($gameData.tutorialState !== 4) {
      $gameData.tutorialState += 1;
    }
  };
</script>

<!-- Todo: find a better way to set the order of thes -->
<div class="message-box">
  {#if player}
    {#if $gameData.finishedTutorial}
    <span class="gold-count" >{`${$gameData.gold} gold`}</span>
    {/if}
  
  <img id="player-img" src="/static/assets/favicon.png" alt="" />
    <!-- show btn when chord is built - todo: hide when  -->
    {#if $gameData.enteredNotes.length >= 3 && $gameData.canPresent}
      <button class="check-btn" on:click>present chord</button>
    {/if}
    {#if $gameData.enteredNotes.length < 3}
      <Typewriter interval={100} cursor={false} on:done={showNextButton}>
        <p class="msg-txt">{message}</p>
      </Typewriter>
    {/if}

    <button id="next-button" class="hidden" on:click={nextStep}>next</button>
  {:else}
    <!-- opponent box -->
    <Typewriter interval={100} cursor={false} on:done={showNextButton}>
      <p class="msg-txt">{message}</p>
    </Typewriter>
    {#if wizard}
      <img src={`/static/scale-the-mountain/monk.png`} alt="" />
    {:else}
      <img src={`/static/forest-of-letters/${noteLetter}-${mood}.png`} alt="" />
    {/if}
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


  .gold-count{
    color: var(--accent-color2);
    position: absolute;
    top: .5rem;
    left: .5rem;
    filter: drop-shadow(2px 2px 2px black);
  }
  /* add media query */
  .message-box {
    color: white;
    width: 100%;
    background-color: var(--bg2);
    border: 1px white solid;
    padding: 0.2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    user-select: none;
  }
  

  img {
    max-width: 25%;
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
    font-size: 2rem;
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
  @media (min-width: 320px) {
  .message-box {
    position: relative;
  }
    .msg-txt {
    padding: 0 1rem;
    font-size: var(--fz5);
    user-select: none;
    /* text doesnt stretch the message box from its original height */
    margin: 0;
    overflow: auto;
    max-height: 70.5px;
  }
   #next-button {
    position: absolute;
    bottom: 2px;
    right: 2px;
    background-color: transparent;
    color: var(--accent-color2);
    border: 1px solid var(--accent-color2);
  }
  #next-button:hover{
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
  }
  #next-button:active{
    color: var(--accent-color2);
    border: 1px solid var(--accent-color2);
  }
  }
  @media (min-width: 768px) {
    .msg-txt {
    font-size: 2rem;
    max-height: inherit;
  }
   #next-button {
     font-size:  2rem;
   }
   .box {
    background-color: white;
    width: 1em;
    height: 1em;
    position: absolute;
  }
    .b1 {
    top: -0.4em;
    left: -0.4em;
  }
  .b2 {
    top: -0.4em;
    right: -0.4em;
  }
  .b3 {
    bottom: -0.4em;
    left: -0.4em;
  }
  .b4 {
    bottom: -0.4em;
    right: -0.4em;
  }
  }
</style>
