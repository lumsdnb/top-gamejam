<script>
  import arrow from './arrow.svg';
  import InputPanel from '$lib/InputPanel.svelte';
  import { gameData, userInterface } from '../stores';
  let scaleValues = $gameData.currentScale;
  let notePos = ['note 1/3', 'note 2/3', 'note 3/3'];
  let noteType = ['normal', 'sharp', 'flat'];
  let selectedNoteUI = 0;
  let noteNumberUI = 0;
  let noteTypeUI = 0;
  export let characterMessage;
  const handlePlaceNote = () => {
    console.log('called');
    $gameData.enteredNotes.push($gameData.currentScale[selectedNoteUI]);
    console.log($gameData.enteredNotes);
    console.log($gameData.enteredNotes.length);
    if ($gameData.enteredNotes.length == 1) {
      noteNumberUI = 1;
    }
    console.log(noteNumberUI);
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
    console.log('removing note');
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

<div id="container">
  <div id="span-1-col">
    <InputPanel
      type="column-panel"
      values={scaleValues}
      bind:currentValue={selectedNoteUI}
    />
  </div>
  <div id="span-2-col">
    <!--<button on:click={removeEnteredNote}>delet last note </button>-->
    <InputPanel values={noteType} bind:currentValue={noteTypeUI} />
    <InputPanel values={notePos} bind:currentValue={noteNumberUI} />
  </div>
  <div id="submit-container">
    <button
      on:click={addEnteredNote(scaleValues[selectedNoteUI])}
      class="submit-note shade">place note</button
    >
  </div>
</div>

<!--<button on:click={checkAnswer}>check answer</button>-->

<!-- <style>
  .submit-note {
    color: var(--accent-color2);
    user-select: none;
  }
  
  .shade {
    filter: drop-shadow(3px 5px 0px black);
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  button:hover {
    transform: scale(1.04);
  }
  button:active {
    transform: scale(0.95);
  }
  .note-selection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
    ' horizontal vertical'
    'submitarea submitarea';
  }
  
  .horizontal {
    grid-area: horizontal;
  }
  
  .vertical {
    grid-area: vertical;
  }
  
  .submitarea {
    grid-area: submitarea;
    place-items: center;
    text-align: center;
  }
</style> -->
<style>
  .submit-note:hover {
    transform: scale(1.05);
  }
  .submit-note:active {
    transform: scale(0.97);
  }
  @media (min-width: 320px) {
    #container {
      margin: 0 auto;
      /* background-color: thistle; */
      display: grid;
      grid-template-areas:
        'span-1-col span-2-col span-2-col '
        'span-1-col span-2-col span-2-col '
        'span-1-col submit  submit';
      justify-items: center;
      align-items: center;
    }

    #span-1-col {
      grid-area: span-1-col;
    }
    #span-2-col {
      grid-area: span-2-col;
    }
    #submit-container {
      grid-area: submit;
      /* place-items: center; */
    }
    .submit-note {
      color: var(--accent-color2);
      border: none;
      background-color: transparent;
      user-select: none;
    }
  }
</style>
