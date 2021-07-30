<script>
  import arrow from './arrow.svg';
  import { gameData } from '../stores';
  const nextStep = () => {
    $gameData.tutorialState += 1;
  };
</script>

<!-- <p>{`note: ${selectedNoteUI}, note # ${noteNumberUI}, type: ${noteTypeUI}`}</p> -->
<div id="container">
  <div id="span-1-col">
    +25
    <img class="gold" src="./static/assets/gold-icon.png" alt="gold" />
  </div>
  <div id="span-2-col" />
  <div id="span-2-col">
    <button on:click={nextStep} class="submit-note shade">continue</button>
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
      color: white;
      filter: drop-shadow(6px 6px 5px black);
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
    button {
      padding: 1rem;
      color: var(--accent-color2);
      background-color: transparent;
      border: none;
      filter: drop-shadow(6px 6px 5px black);
    }
    button:hover {
      transform: scale(1.05);
    }
  }
</style>
