<script>
  import { spring } from 'svelte/motion';
  import Note from '$lib/Note.svelte';
</script>

<picture>
  <source srcset="/assets/clef-white.png" type="image/png" />
  <img src="/assets/clef-white.png" alt="Welcome" />
</picture>
<div class="container">
  <div class="lines">
    <div class="note-line" />
    <div class="note-line" />
    <div class="note-line" />
    <div class="note-line" />
    <div class="note-line" />
  </div>
  <div class="entered-notes">
    <Note active />
    <Note sharp />
    <Note flat />
  </div>
</div>

<style>
  .entered-notes {
    display: flex;
    flex-direction: column;
    position: relative;
    right: 4rem;
  }

  .container {
    display: flex;
    flex-direction: row;
  }
  img[src*='clef-white.png'] {
    width: 7rem;
    position: relative;
    top: 7.5rem;
    right: 14rem;
    filter: drop-shadow(6px 6px 5px black);
  }
  .note-line {
    width: 70vw;
    height: 2px;
    background-color: white;
    margin-bottom: 1.1rem;
  }
  .counter {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  .counter button {
    width: 2em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    color: var(--text-color);
    font-size: 2rem;
  }

  .counter button:hover {
    background-color: var(--secondary-color);
  }

  svg {
    width: 25%;
    height: 25%;
  }

  path {
    vector-effect: non-scaling-stroke;
    stroke-width: 2px;
    stroke: var(--text-color);
  }
</style>
