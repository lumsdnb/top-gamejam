<script>
  import { spring } from 'svelte/motion';
  import Note from '$lib/Note.svelte';
  import { gameData } from '../stores.js';
import { loop_guard } from 'svelte/internal';
  let scale = $gameData.currentScale;
  let enteredNotes = $gameData.enteredNotes;
  let noteTypes = $gameData.enteredNoteTypes;
</script>

<div id="container">
  <div id="clef">
    <img src="/assets/clef-white.png" alt="chef" />
  </div>
  <div id="grid-lines">
    <div class="block b1" />
    <div class="block b2" />
    <div class="block b3" />
    <div class="block b4" />
    <div class="block b5" />
    <div class="block b6" />
    <div class="block b7" />
  </div>
  <div id="grid-notes">
    <!-- the individual notes have to be positioned absolutely -->
    <!-- place note here -->
    <!-- this first loops through every note line aka c-b note 
    once it finds a note that exists, it checks the full array to see if a type other than 0 exists -->
    {#each Array(7) as _, i}
      
      {#each enteredNotes as n, j}
        <!-- first check if it matches the note line   -->
        {#if n == $gameData.lettersCToB[i]}
          <!-- then pass it a note type -->
          <div class={`n${i} note-container`}>
            <Note type={$gameData.enteredNotesWithTypes[j].noteType}/>
          </div>
        {/if}
      {/each}
    {/each}
  </div>
</div>

<style>
  #container {
    width: 100%;
    min-height: 15rem;
  }
  /*basic note placement*/
  .note-container{
    width: 2rem;
    height: .2rem;
  }
  .n0 {
    grid-area: c7;

  }
  .n1 {
    grid-area: c6;
    
  }
  .n2 {
    grid-area: c5;
  }
  .n3 {
    grid-area: c4;
  }
  .n4 {
    grid-area: c3;
  }
  .n5 {
    grid-area: c2;
  }
  .n6 {
    grid-area: c1;
  }
  
  #clef img {
      width: 82px;
      object-fit: cover;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
      z-index: 5;
    }
    #grid-notes {
      width: 100%;
      height: 10rem;
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
      /* place-items: center;
      place-content: center; */
      overflow: hidden;
    }
    #grid-lines {
      position: absolute;
      width: 100%;
      height: 10rem;
      display: grid;
      grid-template-areas:
      'block1'
      'block2'
      'block3'
      'block4'
      'block5'
      'block6'
      'block7';
    z-index: -1;
    }
    .block {
      width: 100%;
      height: 100%;
      border-bottom: 3px solid white;
      filter: drop-shadow(2px 2px 5px black);
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

    @media (min-width: 750px) {
      #container {
        background-color: transparent;
        border: none;
        display: flex;
        margin-bottom: 1em;
  
        max-width: 520px;
        position: relative;
        margin-left: auto;
      }
    }
    @media (min-width: 320px) {
      #container {
        background-color: transparent;
        border: none;
        display: flex;
        margin: 0.5em 0;
  
        max-width: 90vw;
        position: relative;
        margin-left: auto;
      }
      
    }
    </style>
