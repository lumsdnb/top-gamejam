<script>
  import arrow from './arrow.svg';
  import InputPanel from '$lib/InputPanel.svelte';
  import { gameData } from '../stores';
  import NoteInputPanel from './NoteInputPanel.svelte';
  let scaleValues = [$gameData.currentScale];
  let noteNumberUI = 0;
  let noteTypeUI = 0;
  let noteType = ['', '♯', '♭'];

  const addEnteredNote = (letterID, type) => {
    console.table(letterID, type);
    console.info($gameData.letterPositions[letterID]);
    let noteID = $gameData.letterPositions[letterID];
    if (
      $gameData.enteredNotes.includes($gameData.letters[letterID]) === false
    ) {
      switch (noteTypeUI) {
        case 1:
          noteID++;
          if (noteID >= 12) {
            noteID = 0;
          }
          break;
        case 2:
          noteID--;
          if (noteID <= 0) {
            noteID = 12;
          }
          break;

        default:
          break;
      }
      console.warn('id is' + noteID);

      //push the letter
      $gameData.enteredNotes.push($gameData.letters[letterID]);
      $gameData.enteredNoteTypes.push(type);
      $gameData.enteredNotesAsID.push(noteID);

      console.log(`note${noteID} has been entered`);
      // AUDIO HERE
      console.warn(noteID);
      const snd = new Audio(`./static/sounds/note${noteID}.wav`); // buffers automatically when created
      snd.play();
    }
    console.log($gameData.enteredNotes);
    $gameData.enteredNotes = $gameData.enteredNotes;
  };
  const removeEnteredNote = (note) => {
    console.log('removing note');
    $gameData.enteredNotes.splice(-1, 1);
    $gameData.enteredNoteTypes.splice(-1, 1);
    $gameData.enteredNotes = $gameData.enteredNotes;
    // AUDIO HERE
    const removeAudio = document.querySelector(`#audio-click`);
    removeAudio.play();
  };
</script>

<p>{$gameData.enteredNoteTypes}</p>
<div class="container">
  <NoteInputPanel
    bind:currentNote={noteNumberUI}
    bind:currentNoteType={noteTypeUI}
  />
  <div class="text-button-panel">
    <button class="delete" on:click={removeEnteredNote}>delete note </button>
    <div id="submit-container">
      <button
        on:click={addEnteredNote(noteNumberUI, noteTypeUI)}
        class="submit-note shade">place note</button
      >
    </div>
  </div>
</div>

<!--UI audio tags-->
<audio id="audio-correct" src="../static/sounds/correct.wav" />
<audio id="audio-incorrect" src="../static/sounds/incorrect.wav" />
<audio id="audio-click-high" src="../static/sounds/click-high.wav" />
<audio id="audio-click" src="../static/sounds/click.wav" />
<audio id="audio-msg-click" src="../static/sounds/msg-click.wav" />

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
  }
  .text-button-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .text-button-panel > * {
    padding: 1rem;
    font-size: var(--fz4);
  }
  .submit-note:hover {
    transform: scale(1.05);
  }
  .submit-note:active {
    transform: scale(0.97);
  }
  @media (min-width: 750px) {
    .container {
      flex-direction: column;
    }
  }
  @media (max-width: 749px) {
    .container {
      margin: 0 auto;
    }
  }
  @media (min-width: 320px) {
    .submit-note {
      color: var(--accent-color2);
      border: none;
      background-color: transparent;
      user-select: none;
    }
    .delete {
      padding: 1rem;
      color: var(--accent-color2);
      background-color: transparent;
      border: none;
    }
    .delete:hover {
      transform: scale(1.05);
    }
  }
</style>
