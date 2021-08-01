<script>
  import Level from '$lib/Level.svelte';
  import scales from '/static/scales.json';
  import MessageBox from '$lib/MessageBox.svelte';
  import { gameData, messageSystem } from '../stores.js';
  let letters = $gameData.letters;
  //todo: filter out duplicate letters (sharps, flats)
  const parsedScales = JSON.parse(JSON.stringify(scales));
  parsedScales.forEach((element) => {
    console.log(element.scale);
  });
</script>

<h1 id="title">pick a scale</h1>
<div id="level-list">
  {#each letters as element, i (element)}
    <Level
      linkSrc={`/level/${element}`}
      imgSrc={`./static/forest-of-letters/${element}-happy.png`}
      imgAlt={`letter ${element.toUpperCase()}`}
    />
  {/each}
</div>
<div class="player-box">
  <MessageBox player message={$messageSystem[$gameData.tutorialState][0]} />
</div>

<style>
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
    position: absolute;
    bottom: 1rem;
    width: 90%;
    left: 0%;
    margin: 0 auto;
  }
</style>
