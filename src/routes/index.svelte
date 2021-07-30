<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import { gameData, messageSystem } from '../stores.js';
  import { fade } from 'svelte/transition';

  let characterMood = 'sad';

  const startGame = () => {
    $gameData.tutorialState = 1;
    $gameData.showScroll = true;
  };
  if ($gameData.tutorialState == 2) {
    $gameData.showUI = false;
  }
  if ($gameData.tutorialState == 3) {
    console.log('state 3 fired');
    $gameData.showUI = true;
  }
  const checkAnswer = () => {
    console.log('checking answer...');
    const majorChord = [
      $gameData.currentScale[0],
      $gameData.currentScale[2],
      $gameData.currentScale[4],
    ];
    console.log('chord needed: ' + majorChord);
    console.log('your chord: ' + $gameData.enteredNotes);
    if (arrayCompare(majorChord, $gameData.enteredNotes)) {
      characterMood = 'happy';
      $gameData.tutorialState = 6;
    } else $gameData.tutorialState = 5;
  };

  function arrayCompare(_arr1, _arr2) {
    if (
      !Array.isArray(_arr1) ||
      !Array.isArray(_arr2) ||
      _arr1.length !== _arr2.length
    ) {
      return false;
    }

    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<!-- intro screen -->
{#if $gameData.tutorialState == 0}
  <section class="welcome">
    <h1>welcome to the forest of letters</h1>
    <button on:click={startGame}>enter</button>
  </section>
{/if}

<!-- scroll screen -->
{#if $gameData.tutorialState == 1}
  <Scroll type="c" />
{/if}

<!-- main screen -->
{#if $gameData.tutorialState >= 2}
  <MessageBox
    message={$messageSystem[$gameData.tutorialState][1]}
    mood={characterMood}
  />
  {#if $gameData.tutorialState >= 4}
    <section transition:fade>
      <NoteRenderer />
      <NoteInput />
    </section>
  {/if}
{/if}
<div class="player-box">
  <MessageBox
    message={$messageSystem[$gameData.tutorialState][0]}
    player
    on:click={checkAnswer}
  />
</div>

<style>
  @media (min-width: 320px) {
    section {
      padding: 1.5em 0.5em;
    }
    .welcome {
      margin: 20vh 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    .welcome > button {
      margin: 5rem;
      font-size: 2rem;
      background-color: transparent;
      border: none;
      color: var(--accent-color2);
      filter: drop-shadow(3px 5px 0px black);
    }
    .welcome > button:hover {
      transform: scale(1.05);
    }
    .welcome > button:active {
      transform: scale(0.9);
    }
    .player-box {
      position: absolute;
      bottom: 1rem;
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
