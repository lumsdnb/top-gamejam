<script>
  import arrow from './arrow.svg';
  export let type = 'regular';
  export let values = 'x';
  export let currentValue;

  const playUISound = () => {
    let snd = new Audio('./static/sounds/click-high.wav'); // buffers automatically when created
    snd.play();
  };

  let i = 0;
  const clickSound = document.querySelector(`#audio-click`);
  const incrementValue = () => {
    i++;
    playUISound();
    if (i >= values.length) {
      i = 0;
    }
    currentValue = i;
  };
  const decrementValue = () => {
    i--;
    playUISound();
    if (i < 0) {
      i = values.length - 1;
    }
    currentValue = i;
  };
</script>

{#if type === 'column-panel'}
  <div class={type}>
    <button on:click={() => incrementValue()}>
      <img class="up arrow shade" src={arrow} alt="up arrow" />
    </button>
    <p class="bigger">{values[i]}</p>
    <button on:click={() => decrementValue()}>
      <img class="down arrow shade" src={arrow} alt="down arrow" />
    </button>
  </div>
{/if}
{#if type === 'regular'}
  <div class={type}>
    <button on:click={() => decrementValue()}>
      <img class="left arrow shade" src={arrow} alt="down arrow" />
    </button>
    <p>{values[i]}</p>
    <button on:click={() => incrementValue()}>
      <img class="right arrow shade" src={arrow} alt="up arrow" />
    </button>
  </div>
{/if}

<style>
  @media (min-width: 320px) {
    .column-panel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .bigger {
      font-size: 1.56rem;
      color: #fd9979;
    }

    .regular {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .arrow {
      width: 2rem;
      height: 2.5rem;
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
      transform: rotateY(180deg);
    }
    .up {
      transform: rotateZ(90deg) rotateY(180deg);
    }
    .down {
      transform: rotate(90deg);
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
