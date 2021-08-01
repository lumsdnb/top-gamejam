<script>
  import { page } from '$app/stores';
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import MainInput from '$lib/MainInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import ReceiveGoldUI from '$lib/ReceiveGoldUI.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { gameData } from '$lib/../stores';

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

<MessageBox mood={characterMood} noteLetter={$page.params.slug} />
<p>{$gameData.tutorialState}</p>

<section transition:fade>
  <NoteRenderer />
  {#if ($gameData.wonRound = true)}
    <MainInput />
  {:else}
    <div in:fly={{ y: -200, duration: 700 }} out:fade>
      <ReceiveGoldUI />
    </div>
  {/if}
</section>
<div class="player-box">
  <MessageBox player on:click={checkAnswer} />
</div>

<style>
  @media (min-width: 320px) {
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

    .player-box {
      position: absolute;
      bottom: 1rem;
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
