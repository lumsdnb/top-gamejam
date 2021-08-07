<script>
  import { page } from '$app/stores';
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import MainInput from '$lib/MainInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import ReceiveGoldUI from '$lib/ReceiveGoldUI.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { gameData, characterMessages } from '$lib/../stores';
  import scalesJSON from '/static/scales.json';

  let characterMood = 'sad';
  let roundLetter = $page.params.slug;

  console.log(roundLetter);

  let noteIndex = $gameData.lettersCToB.findIndex((n) => {
    if (n === roundLetter) {
      return true;
    }
  });

  $gameData.currentScale = scalesJSON[noteIndex].notes;
  $gameData.currentNoteTypes = scalesJSON[noteIndex].noteTypes;
  console.log(scalesJSON[noteIndex].notes);
  // messages pulled from store
  let charMessages = $characterMessages[roundLetter];
  let charMessageID = 0;

  console.log('key is ' + noteIndex);
  $gameData.canPresent = true;

  const playPresentedChord = () => {
    console.log('playing chord');
    $gameData.enteredHalfTones.forEach((note, i) => {
      const sound = new Audio(`../static/sounds/note${note}.wav`);
      sound.play();
    });
  };

  // const startGame = () => {
  //   $gameData.tutorialState = 1;
  //   $gameData.showScroll = true;
  // };
  // if ($gameData.tutorialState === 2) {
  //   $gameData.showUI = false;
  // }
  // if ($gameData.tutorialState === 3) {
  //   console.log('state 3 fired');
  //   $gameData.showUI = true;
  // }
  // if ($gameData.tutorialState >= 7) {
  //   console.log('state 3 fired');
  //   $gameData.showUI = false;
  // }
  const correctAnswer = () => {
    characterMood = 'happy';
    // not for non tutorial
    // $gameData.tutorialState = 6;
    charMessageID = 1;
    $gameData.gold += 25;
    $gameData.wonRound = true;
    $gameData.canPresent = false;
    $gameData.completedLetters.push(roundLetter);
  };

  const compareNoteTypes = (arr1, arr2) => {
    console.log('one' + arr1);
    console.log('two' + arr2);

    if (arr1[0] == arr2[0]) {
      if (arr1[1] == arr2[1]) {
        if (arr1[2] == arr2[2]) {
          return true;
        }
      }
    }
  };

  const checkAnswer = () => {
    console.log('checking answer...');

    playPresentedChord();
    const types = $gameData.currentNoteTypes;
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
      //letters are correct, now check if the types are correct as well
      // for example 0 0 1 0 1 0 2
      // if (
      //   compareNoteTypes($gameData.enteredNoteTypes, $gameData.currentNoteTypes)
      // ) {
      correctAnswer();
      // } else alert('note types dont match bro');
    } else charMessageID = 2;
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

<MessageBox
  mood={characterMood}
  noteLetter={$page.params.slug}
  message={charMessages[charMessageID]}
/>

<section transition:fade>
  <NoteRenderer />
  {#if $gameData.wonRound}
    <!-- ------   you won some gold!------    -->
    <div in:fly={{ y: -200, duration: 700 }} out:fade>
      <ReceiveGoldUI />
    </div>
  {:else}
    <MainInput />
  {/if}
</section>
<div class="player-box">
  <MessageBox
    player
    on:click={checkAnswer}
    message="seems like the devs only implemented major chords so far..."
  />
  {$gameData.wonRound}
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
