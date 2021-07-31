<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import ReceiveGoldUI from '$lib/ReceiveGoldUI.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import { gameData, messageSystem } from '../stores.js';
  import { fade, fly, slide } from 'svelte/transition';

  let characterMood = 'sad';

  const startGame = () => {
    $gameData.tutorialState = 1;
    $gameData.showScroll = true;
    // audio test
    /*const audio = document.getElementById('audio-c');
    audio.play();*/
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
      $gameData.gold += 25;
      $gameData.wonRound = true;
      $gameData.canPresent = false;
      //audio
      const correctAudio1 = document.querySelector(
        `audio[data-note=${$gameData.enteredNotes[0]}]`
      );
      correctAudio1.play();
      const correctAudio2 = document.querySelector(
        `audio[data-note=${$gameData.enteredNotes[1]}]`
      );
      correctAudio2.play();
      const correctAudio3 = document.querySelector(
        `audio[data-note=${$gameData.enteredNotes[2]}]`
      );
      correctAudio3.play();
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
  <section class="welcome" in:fade={{ duration: 400 }} out:slide>
    <h1>welcome to the forest of letters</h1>
    <button on:click={startGame}>enter</button>
  </section>
{/if}

<!-- scroll screen -->
{#if $gameData.tutorialState == 1}
  <div class="scroll" transition:fly={{ y: 200, duration: 700 }}>
    <Scroll type="c" />
  </div>
{/if}

<!-- main screen -->
{#if $gameData.tutorialState >= 2}
  <MessageBox mood={characterMood} />
  {#if $gameData.tutorialState >= 4}
    <section transition:fade>
      <NoteRenderer />
      {#if $gameData.tutorialState < 6}
        <NoteInput />
      {:else}
        <div in:fly={{ y: -200, duration: 700 }} out:fade>
          <ReceiveGoldUI />
        </div>
      {/if}
    </section>
  {/if}
{/if}

<div class="player-box">
  <MessageBox player on:click={checkAnswer} />
</div>

<!--Individual note audio tags-->
<audio data-note="c" id="audio-c" src="../static/sounds/note1.wav" />
<audio data-note="cs" id="audio-csharp" src="../static/sounds/note2.wav" />
<audio data-note="d" id="audio-d" src="../static/sounds/note3.wav" />
<audio data-note="ds" id="audio-dsharp" src="../static/sounds/note4.wav" />
<audio data-note="e" id="audio-e" src="../static/sounds/note5.wav" />
<audio data-note="f" id="audio-f" src="../static/sounds/note6.wav" />
<audio data-note="fs" id="audio-fsharp" src="../static/sounds/note7.wav" />
<audio data-note="g" id="audio-g" src="../static/sounds/note8.wav" />
<audio data-note="gs" id="audio-gsharp" src="../static/sounds/note9.wav" />
<audio data-note="a" id="audio-a" src="../static/sounds/note10.wav" />
<audio data-note="as" id="audio-asharp" src="../static/sounds/note11.wav" />
<audio data-note="b" id="audio-b" src="../static/sounds/note12.wav" />

<!--UI audio tags-->
<audio id="audio-correct" src="../static/sounds/correct.wav" />
<audio id="audio-incorrect" src="../static/sounds/incorrect.wav" />
<audio id="audio-click-high" src="../static/sounds/click-high.wav" />
<audio id="audio-click" src="../static/sounds/click.wav" />
<audio id="audio-msg-click" src="../static/sounds/msg-click.wav" />

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
