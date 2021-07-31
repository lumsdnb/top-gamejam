<script>
  import arrow from './arrow.svg';
  import InputPanel from '$lib/InputPanel.svelte';
  import { gameData } from '../stores';
  let scaleValues = $gameData.currentScale;
  let notePos = ['note 1/3', 'note 2/3', 'note 3/3'];
  let noteType = ['normal', 'sharp', 'flat'];
  let selectedNoteUI = 0;
  let noteNumberUI = 0;
  let noteTypeUI = 0;
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
      // AUDIO HERE
      const noteAudio = document.querySelector(`audio[data-note=${note}]`);
      noteAudio.play();
    }
    console.log($gameData.enteredNotes);
    $gameData.enteredNotes = $gameData.enteredNotes;
  };
  const removeEnteredNote = (note) => {
    console.log('removing note');
    $gameData.enteredNotes.splice(-1, 1);
    $gameData.enteredNotes = $gameData.enteredNotes;
    // AUDIO HERE
    const removeAudio = document.querySelector(`#audio-click`);
    removeAudio.play();
  };
</script>

<!-- <p>{`note: ${selectedNoteUI}, note # ${noteNumberUI}, type: ${noteTypeUI}`}</p> -->
<div id="container">
  <div id="span-1-col">
    <InputPanel
      type="column-panel"
      values={scaleValues}
      bind:currentValue={selectedNoteUI}
    />
  </div>
  <div id="span-2-col">
    <!-- <InputPanel values={notePos} bind:currentValue={noteNumberUI} /> -->
    <button class="delete" on:click={removeEnteredNote}
      >delete last note
    </button>
    <InputPanel values={noteType} bind:currentValue={noteTypeUI} />
  </div>
  <div id="submit-container">
    <button
      on:click={addEnteredNote(scaleValues[selectedNoteUI])}
      class="submit-note shade">place note</button
    >
  </div>
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
  @media (min-width: 750px) {
    #container {
      display: grid;
      grid-template-areas:
        'span-1-col span-2-col span-2-col '
        'span-1-col span-2-col span-2-col '
        'span-1-col submit  submit';
      justify-items: center;
      align-items: center;
      max-width: 520px;
      margin-left: auto;
      margin-right: 0px;
    }
  }
  @media (max-width: 749px) {
    #container {
      margin: 0 auto;
    }
  }
  @media (min-width: 320px) {
    #container {
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
