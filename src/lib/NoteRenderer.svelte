<script>
  import { spring } from 'svelte/motion';
  import Note from '$lib/Note.svelte';
  export let notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
</script>

<div class="container">
  <div class="notes">
    <div class="clef">
      <picture>
        <source srcset="/assets/clef-white.png" type="image/png" />
        <img src="/assets/clef-white.png" alt="Welcome" />
      </picture>
    </div>
    <div class="note1">
      <Note active />
    </div>
    <div class="note2">
      <Note sharp />
    </div>
    <div class="note3">
      <Note sharp />
    </div>
    <div class="note4">
      <Note sharp />
    </div>
    <div class="note5">
      <Note sharp />
    </div>
    <div class="note6">
      <Note sharp />
    </div>
    <div class="note7">
      <Note sharp />
    </div>
    <div class="note8">
      <Note sharp />
    </div>
    <div class="note9">
      <Note sharp />
    </div>
    <div class="note10">
      <Note sharp />
    </div>
    <div class="note11">
      <Note sharp />
    </div>
    <div class="note12">
      <Note sharp />
    </div>
    <div class="line1-none" />
    <div class="line2-none" />
    <div class="line3">
      <div class="note-line" />
    </div>
    <div class="line4-none" />
    <div class="line5">
      <div class="note-line" />
    </div>
    <div class="line6-none" />
    <div class="line7">
      <div class="note-line" />
    </div>
    <div class="line8-none" />
    <div class="line9">
      <div class="note-line" />
    </div>
    <div class="line10-none" />
    <div class="line11">
      <div class="note-line" />
    </div>
    <div class="line12-none" />
  </div>
</div>

<style>
  .entered-notes {
    display: flex;
    flex-direction: column;
    position: relative;
    right: 4rem;
  }
  img[src*='clef-white.png'] {
    width: 12rem;
    filter: drop-shadow(6px 6px 5px black);
  }
  .line-group {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50% -30%);
  }

  .note-line {
    width: 30vw;
    height: 3px;
    background-color: white;
  }

  /* -------- grid stuff -------- */

  .notes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1fr 12);
    gap: 0px 0px;
    grid-auto-flow: row;
    place-items: center;
  }

  .note1 {
    grid-area: 12 / 2 / 13 / 3;
  }

  .note2 {
    grid-area: 11 / 2 / 12 / 3;
  }

  .note3 {
    grid-area: 10 / 2 / 11 / 3;
  }

  .note4 {
    grid-area: 9 / 2 / 10 / 3;
  }

  .note5 {
    grid-area: 8 / 2 / 9 / 3;
  }

  .note6 {
    grid-area: 7 / 2 / 8 / 3;
  }

  .note7 {
    grid-area: 6 / 2 / 7 / 3;
  }

  .note8 {
    grid-area: 5 / 2 / 6 / 3;
  }

  .note9 {
    grid-area: 4 / 2 / 5 / 3;
  }

  .note10 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .note11 {
    grid-area: 2 / 2 / 3 / 3;
  }

  .note12 {
    grid-area: 1 / 2 / 2 / 3;
  }

  .line1-none {
    grid-area: 12 / 1 / 13 / 4;
  }

  .line2-none {
    grid-area: 11 / 1 / 12 / 4;
  }

  .line3 {
    grid-area: 10 / 1 / 11 / 4;
  }

  .line4-none {
    grid-area: 9 / 1 / 10 / 4;
  }

  .line5 {
    grid-area: 8 / 1 / 9 / 4;
  }

  .line6-none {
    grid-area: 7 / 1 / 8 / 4;
  }

  .line7 {
    grid-area: 6 / 1 / 7 / 4;
  }

  .line8-none {
    grid-area: 5 / 1 / 6 / 4;
  }

  .line9 {
    grid-area: 4 / 1 / 5 / 4;
  }

  .line10-none {
    grid-area: 3 / 1 / 4 / 4;
  }

  .line11 {
    grid-area: 2 / 1 / 3 / 4;
  }

  .line12-none {
    grid-area: 1 / 1 / 2 / 4;
  }

  .clef {
    grid-area: 2 / 1 / 11 / 2;
  }
</style>
