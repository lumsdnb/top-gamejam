<script>
  import arrow from '/static/assets/arrow.svg';
  import { gameData } from '../stores';
  const nextStep = () => {
    $gameData.enteredNotesAsID = [];
    $gameData.enteredNotes = [];
    $gameData.enteredNoteTypes = [];
    if ($gameData.finishedTutorial) {
      $gameData.tutorialState = 7;
    }
    $gameData.tutorialState += 1;
    $gameData.wonRound = false;
  };
</script>

<!-- <p>{`note: ${selectedNoteUI}, note # ${noteNumberUI}, type: ${noteTypeUI}`}</p> -->
<div id="container">
  <div id="span-1-col">
    <img class="gold" src="/static/assets/gold-icon.png" alt="gold" />
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
    width: 16rem;
    height: 16rem;
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
      padding: 1rem;
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
      color: rgb(171, 177, 86);

      text-decoration: none;
      color: var(--accent-color);
      background-color: transparent;
      border: none;
      filter: drop-shadow(6px 6px 5px black);
    }

    button:hover {
      transform: scale(1.05);
    }
  }
</style>
