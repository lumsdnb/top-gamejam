<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import { gameData } from '../stores.js';

  let characterMessage = 'please help me figure this out...';

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
      characterMessage = 'you got it!';
    } else characterMessage = "no, that's not quite right..";
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
<MessageBox message={characterMessage} />
<section>
  <NoteRenderer />
  <NoteInput bind:characterMessage />
</section>
<MessageBox message={'yooo'} player on:click={checkAnswer} />

<style>
  @media (min-width: 320px) {
    section {
      padding: 1.5em 0.5em;
    }
  }
</style>
