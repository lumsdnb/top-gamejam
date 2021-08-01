<script>
  import arrow from '/static/assets/arrow.svg';
  import { gameData } from '../stores';
  const nextStep = () => {
    $gameData.enteredNotesAsID = [];
    $gameData.enteredNotes = [];
    $gameData.enteredNoteTypes = [];
    $gameData.tutorialState += 1;
  };
</script>

<!-- <p>{`note: ${selectedNoteUI}, note # ${noteNumberUI}, type: ${noteTypeUI}`}</p> -->
<div id="container">
  <div id="span-1-col">
    <img class="gold" src="./static/assets/gold-icon.png" alt="gold" />
    +25
  </div>
  <div id="span-2-col">
    <a
      class="continue-button shade"
      on:click={nextStep}
      sveltekit:prefetch
      href="/levels">continue</a
    >
  </div>
</div>

<style>
  .gold {
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 320px) {
    #container {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #span-1-col {
      grid-area: span-1-col;
      color: white;
      padding: 3rem;
      font-size: var(--fz3);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      filter: drop-shadow(6px 6px 5px black);
    }

    .continue-button {
      color: var(--accent-color2);
      border: none;
      background-color: transparent;
      user-select: none;
      font-size: var(--fz3);
      filter: drop-shadow(6px 6px 5px black);
    }
    .continue-button:hover {
      transform: scale(1.1);
      text-decoration: none;
    }
    button {
      padding: 1rem;
      color: var(--accent-color2);
      background-color: transparent;
      border: none;
      font-size: var(--fz2);
      filter: drop-shadow(6px 6px 5px black);
    }
    button:hover {
      transform: scale(1.05);
    }
  }
</style>
