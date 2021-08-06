<script>
  import arrow from '/static/assets/arrow.svg';
  let notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  let noteType = ['', '♯', '♭'];
  export let currentNote = 0;
  export let currentNoteType = 0;
  let i = 0;
  const playUISound = () => {
    let snd = new Audio('../static/sounds/click-high.wav'); // buffers automatically when created
    snd.play();
  };

  const incrementNote = () => {
    currentNote++;
    playUISound();
    if (currentNote >= notes.length) {
      currentNote = 0;
    }
  };
  const decrementNote = () => {
    currentNote--;
    playUISound();
    if (currentNote < 0) {
      currentNote = notes.length - 1;
    }
  };
  const incrementNoteType = () => {
    currentNoteType++;
    playUISound();
    if (currentNoteType >= noteType.length) {
      currentNoteType = 0;
    }
  };
  const decrementNoteType = () => {
    currentNoteType--;
    playUISound();
    if (currentNoteType < 0) {
      currentNoteType = noteType.length - 1;
    }
  };
</script>

<div class="panel">
  <button class="up-btn" on:click={() => incrementNote()}>
    <img class="up arrow shade" src={arrow} alt="up arrow" />
  </button>

  <div class="middle">
    <button class="middle-left" on:click={() => decrementNoteType()}>
      <img class="left arrow shade" src={arrow} alt="down arrow" />
    </button>
    <span class="current-note">
      <span>{notes[currentNote]}</span>
      <span class="note-type">{noteType[currentNoteType]}</span>
    </span>
    <button class="middle-right" on:click={() => incrementNoteType()}>
      <img class="right arrow shade" src={arrow} alt="up arrow" />
    </button>
  </div>

  <button class="down-btn" on:click={() => decrementNote()}>
    <img class="down arrow shade" src={arrow} alt="down arrow" />
  </button>
</div>

<!-- new sharp flat left right UI buttons -->

<style>
  @media (min-width: 320px) {
    .panel {
      display: grid;
      grid-template-areas: 
      'up'
      'middle'
      'down'
      ;
    }
    .up-btn{
      grid-area: up;
    }
  
    .middle {
      grid-area: middle;
      display: grid;
       grid-template-areas:'left middle right';
    }
    .middle-left{
      grid-area: left;
    }
   .current-note {
     grid-area: middle;
      position: relative;
      font-size: var(--fz1);
      padding: 0.5rem;
      color: #fd9979;
      filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.712));
    }
    .middle-right{
      grid-area: right;
    }
    .down-btn{
      grid-area: down;
    }

   

    .note-type {
      position: absolute;
      font-size: var(--fz2);
      color: white;
      bottom: 0rem;
      left: -0.6rem;
      bottom: 0.4rem;
      filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.712));
    }

    .regular {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .arrow {
      width: 4rem;
      height: 4rem;
    }
    /* .submit-note {
    color: var(--accent-color2);
    user-select: none;
  }

  .submit-note:hover {
    transform: scale(1.05);
  }
  .submit-note:active {
    transform: scale(0.97);
  } */
    /* .note-selection {
    font-size: 1.8rem;
  } */
    p {
      display: inline-block;
      color: white;
      user-select: none;
      width: 6rem;
      text-align: center;
    }

    .left {
      transform: rotateZ(-179.5deg);
    }
    .right {
      transform: rotateZ();
    }
    .up {
       transform-origin: center;
      transform: rotate(-89.5deg);
    }
    .down {
      transform-origin: center;
      transform: rotate(89.5deg);
    }

    /* .shade {
    filter: drop-shadow(3px 5px 0px black);
  } */

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
  }
</style>
