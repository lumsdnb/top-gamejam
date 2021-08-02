<script>
  import Level from '$lib/Level.svelte';
  import scales from '/static/scales.json';
  import MessageBox from '$lib/MessageBox.svelte';
  import { gameData, messageSystem } from '../stores.js';
  import scalesJSON from '/static/scales.json';

  let letters = $gameData.letters;
  //todo: filter out duplicate letters (sharps, flats)
  const parsedScales = JSON.parse(JSON.stringify(scales));
  parsedScales.forEach((element) => {
    console.log(element.scale);
  });
</script>

{#if $gameData.completedLetters.length == 7}
  <div class="final-wizard">
    <button onclick="window.location.href = '/wizard'"
      >confront the wizard</button
    >
  </div>
{:else}
  <h1 id="title">pick a scale</h1>
{/if}
<div id="level-list">
  {#each letters as l, i (l)}
    <div>
      <Level
        linkSrc={`/level/${l}`}
        imgSrc={`./static/forest-of-letters/${l}-happy.png`}
        imgAlt={`letter ${l}`}
        message={`hint: ${scalesJSON[i].notes}`}
      />
      {#if $gameData.completedLetters.includes(l)}
        <div class="play-status"><p>completed</p></div>
      {/if}
    </div>
  {/each}
</div>

<div class="player-box">
  <MessageBox player message={$messageSystem[$gameData.tutorialState][0]} />
</div>

<style>
  .final-wizard {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-size: var(--fz1);
    height: 100%;
    width: 75vw;
  }
  .final-wizard > button {
    background-color: var(--accent-color2);
    padding: 1rem;
    border-radius: 0.1rem;
    max-width: 28rem;
    background: url(/static/scale-the-mountain/mountain-bg-mobile.png);
    background-size: cover;
    border: none;
    filter: drop-shadow(8px 11px 0px black);
  }
  .final-wizard > button:hover {
    transform: scale(1.05);
    filter: drop-shadow(2px 6px 0px black);
    transition: all 70ms ease-in-out;
  }
  .play-status {
    position: relative;
    bottom: 3rem;
    left: 3rem;
  }
  @media (min-width: 320px) {
    #title {
      text-transform: capitalize;
      margin: 1em;
      text-shadow: 1px 1px 2px #ff3e00;
    }
    #level-list {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: 0.5em;
      overflow: hidden;
    }
  }
  .player-box {
    position: fixed;
    bottom: 1rem;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
  }
  @media (max-width: 321px) {
    #level-list {
      display: flex;
      grid-template-columns: repeat(2, 50%);
      gap: 0.5em;
      overflow: hidden;
    }
  }
</style>
