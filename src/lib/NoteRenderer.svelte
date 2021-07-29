<script>
  import { spring } from 'svelte/motion';
  import Note from '$lib/Note.svelte';
  import { gameData } from '../stores.js';
  let scale = $gameData.currentScale;
  let enteredNotes = $gameData.enteredNotes;
</script>

<div id="container">
  <div id="clef">
    <img src="/assets/clef-white.png" alt="chef" />
  </div>
  <div id="grid-notes">
    <div id="grid-lines">
      <div class="block b1" />
      <div class="block b2" />
      <div class="block b3" />
      <div class="block b4" />
      <div class="block b5" />
      <div class="block b6" />
      <div class="block b7" />
    </div>
    <!-- the individual notes have to be positioned absolutely -->
    <!-- place note here -->
    {#each Array(7) as _, i}
      {#if $gameData.enteredNotes.includes(scale[i])}
        <div class={`n${i}`}>
          <Note />
        </div>
      {/if}
    {/each}
  </div>
</div>

<!-- <p>{`you entered ${$gameData.enteredNotes}`}</p> -->
<style>
  @media (min-width: 320px) {
    #container {
      background-color: transparent;
      border: none;
      display: flex;
      margin-bottom: 1em;
    }

    /*basic note placement*/
    .n0 {
      grid-area: d7;
    }
    .n1 {
      grid-area: d6;
    }
    .n2 {
      grid-area: d5;
    }
    .n3 {
      grid-area: d4;
    }
    .n4 {
      grid-area: d3;
    }
    .n5 {
      grid-area: d2;
    }
    .n6 {
      grid-area: d1;
    }

    #clef img {
      width: 82px;
      object-fit: cover;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }
    #grid-notes {
      width: 100%;
      height: fit-content;
      background-color: transparent;
      display: grid;
      grid-template-areas:
        'a1 b1 c1 d1 e1 f1 g1 h1'
        'a2 b2 c2 d2 e2 f2 g2 h2'
        'a3 b3 c3 d3 e3 f3 g3 h3'
        'a4 b4 c4 d4 e4 f4 g4 h4'
        'a5 b5 c5 d5 e5 f5 g5 h5'
        'a6 b6 c6 d6 e6 f6 g6 h6'
        'a7 b7 c7 d7 e7 f7 g7 h7';
      /*  */
      position: relative;
    }
    #grid-lines {
      position: absolute;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-areas:
        'block1'
        'block2'
        'block3'
        'block4'
        'block5'
        'block6'
        'block7';
    }
    .block {
      width: 100%;
      height: 100%;
      border-bottom: 3px solid white;
    }
    .b1 {
      grid-area: block1;
    }
    .b2 {
      grid-area: block2;
    }
    .b3 {
      grid-area: block3;
    }
    .b4 {
      grid-area: block4;
    }
    .b5 {
      grid-area: block5;
    }
    .b6 {
      grid-area: block6;
      border-bottom: 3px dotted white;
    }
    .b7 {
      grid-area: block7;
      border-bottom: none;
    }
  }
</style>
