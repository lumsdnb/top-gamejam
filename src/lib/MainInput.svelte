<script>
  import arrow from '/static/assets/arrow.svg';
  import InputPanel from '$lib/InputPanel.svelte';
  import { gameData } from '../stores';
  import NoteInputPanel from './NoteInputPanel.svelte';
  let scaleValues = [$gameData.currentScale];
  let noteNumberUI = 0;
  let noteTypeUI = 0;
  let noteType = ['', '♯', '♭'];
  
  const addSelectedNote = (letterID, type) => {
    console.table(letterID, type);
    let noteID = $gameData.letterPositions[letterID];
    if (
      $gameData.enteredNotes.includes($gameData.lettersCToB[letterID]) === false
      ) {
        //shifts half tones up or down
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
              
              //push note with type
              $gameData.enteredNotesWithTypes.push({"letter":$gameData.lettersCToB[letterID], "noteType":type})
              //push the letter
              $gameData.enteredNotes.push($gameData.lettersCToB[letterID]);
              $gameData.enteredNoteTypes.push(type);
              $gameData.enteredHalfTones.push(noteID);
              console.log(`note${noteID} has been entered`);
              // AUDIO HERE
              const snd = new Audio(`../static/sounds/note${noteID}.wav`); // buffers automatically when created
              snd.play();
            }
            console.table($gameData.enteredNotesWithTypes);
            
            $gameData.enteredNotes = $gameData.enteredNotes;
          };
          const removeEnteredNote = (note) => {
            console.log('removing note');
    $gameData.enteredNotesWithTypes.pop()
    $gameData.enteredNotes.splice(-1, 1);
    $gameData.enteredNoteTypes.splice(-1, 1);
    $gameData.enteredNotes = $gameData.enteredNotes;
    // AUDIO HERE
    let removeBtnAudio = new Audio('../static/sounds/click-high.wav'); // buffers automatically when created
    removeBtnAudio.play();
  };
</script>

<div class="container">
  <NoteInputPanel
    bind:currentNote={noteNumberUI}
    bind:currentNoteType={noteTypeUI}
  />
  <div class="text-button-panel">
    <button class="btn shade" on:click={removeEnteredNote}>delete note </button>
      <button
        on:click={addSelectedNote(noteNumberUI, noteTypeUI)}
        class="btn shade">place note</button
      >
    </div>

</div>

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
  }
  .text-button-panel > * {
    font-size: var(--fz4);
  }
  .btn:hover {
    transform: scale(1.05);
  }
  .btn:active {
    transform: scale(0.97);
  }
  .btn {
    color: var(--accent-color2);
    border: none;
    background-color: transparent;
    user-select: none;
  }
  .btn {
    padding: 1rem;
    color: var(--accent-color2);
    background-color: transparent;
    border: none;
  }

  @media (min-width: 768px) {
    .container {
     

    }
  }

</style>
