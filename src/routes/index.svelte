<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import { gameData } from '../stores.js';

  let characterMessage = 'please help me figure this out...';
  //this will be loaded from main json file later
  const scale = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  const yo = () => {
    console.log('YOOOOO');
    $gameData.enteredNotes = ['f'];
  };
  const addEnteredNote = (note) => {
    console.log('note has been entered');
    if ($gameData.enteredNotes.includes(note) === false) {
      $gameData.enteredNotes.push(note);
    }
    console.log($gameData.enteredNotes);
    $gameData.enteredNotes = $gameData.enteredNotes;
  };
  const removeEnteredNote = (note) => {
    console.log('note will be removed');
    $gameData.enteredNotes.splice(-1, 1);
    $gameData.enteredNotes = $gameData.enteredNotes;
  };
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
  <NoteRenderer {scale} />
  <NoteInput />
</section>
<MessageBox message={'yooo'} player />
<p>buttons for testing</p>
<button on:click={() => addEnteredNote('c')}>add c</button>
<button on:click={() => addEnteredNote('d')}>add d</button>
<button on:click={() => addEnteredNote('e')}>add e</button>
<button on:click={() => addEnteredNote('f')}>add f</button>
<button on:click={() => addEnteredNote('g')}>add g</button>
<button on:click={() => addEnteredNote('a')}>add a</button>
<button on:click={() => addEnteredNote('b')}>add b</button>
<button on:click={removeEnteredNote}>delet last note </button>
<button on:click={checkAnswer}>check answer</button>

<style>
  @media (min-width: 320px) {
    section {
      padding: 1.5em 0.5em;
    }
  }
  /* section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: white;
  }
  .shiftdown {
    margin-top: 5rem;
  }
  .bottom {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    left: 50%;
    transform: translateX(-45%);
  } */
</style>
