<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import MainInput from '$lib/MainInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import ReceiveGoldUI from '$lib/ReceiveGoldUI.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import { gameData, messageSystem } from '../stores.js';
  import { fade, fly, slide } from 'svelte/transition';

  let characterMood = 'sad';
  const playPresentedChord = () => {
    console.log('playing chord');
    $gameData.enteredNotesAsID.forEach((note, i) => {
      console.log('it issssss . . .');
      console.log(note);

      const sound = new Audio(`../static/sounds/note${note}.wav`);
      sound.play();
    });
  };

  const startGame = () => {
    $gameData.tutorialState = 1;
    $gameData.showScroll = true;
  };
  if ($gameData.tutorialState === 2) {
    $gameData.showUI = false;
  }
  if ($gameData.tutorialState === 3) {
    console.log('state 3 fired');
    $gameData.showUI = true;
  }
  if ($gameData.tutorialState >= 7) {
    console.log('state 3 fired');
    $gameData.showUI = false;
  }

  const checkAnswer = () => {
    console.log('checking answer...');

    //audio
    playPresentedChord();

    const majorChord = [
      $gameData.currentScale[0],
      $gameData.currentScale[2],
      $gameData.currentScale[4],
    ];
    const minorChord = [
      $gameData.currentScale[0],
      $gameData.currentScale[2],
      $gameData.currentScale[4],
    ];
    // function timeFunction() {
    //         setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
    // }
    console.log('chord needed: ' + majorChord);
    console.log('your chord: ' + $gameData.enteredNotes);
    if (arrayCompare(majorChord, $gameData.enteredNotes)) {
      characterMood = 'happy';
      $gameData.tutorialState = 6;
      $gameData.gold += 25;
      $gameData.wonRound = true;
      $gameData.canPresent = false;
      $gameData.completedLetters.push('c');
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
  <title>bard.io</title>
</svelte:head>
<!-- intro screen -->
{#if $gameData.tutorialState == 0}
  <section class="welcome" in:fade={{ duration: 400 }} out:slide>
    <h1>welcome to the forest of letters</h1>
    <button on:click={startGame}>enter</button>
  </section>
{/if}

<!-- scroll screen -->
{#if $gameData.tutorialState == 1}
  <div class="scroll" transition:fly={{ y: 200, duration: 200 }}>
    <Scroll type="c" />
  </div>
{/if}

<!-- main screen -->
{#if $gameData.tutorialState >= 2}
  <MessageBox
    mood={characterMood}
    message={$messageSystem[$gameData.tutorialState][1]}
  />
  {#if $gameData.tutorialState >= 4}
    <section class="center-flex" transition:fade>
      <NoteRenderer />
      {#if $gameData.tutorialState <= 5}
        <MainInput />
      {:else}
        <div in:fly={{ y: -200, duration: 500 }} out:fade>
          <ReceiveGoldUI />
        </div>
      {/if}
    </section>
  {/if}
{/if}

<div class="player-box">
  <MessageBox
    player
    on:click={checkAnswer}
    message={$messageSystem[$gameData.tutorialState][0]}
  />
</div>

<!--UI audio tags-->
<audio id="audio-correct" src="../static/sounds/correct.wav" />
<audio id="audio-incorrect" src="../static/sounds/incorrect.wav" />
<audio id="audio-click-high" src="../static/sounds/click-high.wav" />
<audio id="audio-click" src="../static/sounds/click.wav" />
<audio id="audio-msg-click" src="../static/sounds/msg-click.wav" />

<style>
  .center-flex {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 320) {
    .center-flex {
      flex-direction: row;
    }
  }
  @media (min-width: 750px) {
    .center-flex {
      flex-direction: column;
    }
    section {
      padding: 1.5em 0.5em;
    }
    .welcome {
      font-size: var(--fz1);
      margin: 20vh 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    .welcome > button {
      margin: 5rem;
      font-size: var(--fz3);
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
