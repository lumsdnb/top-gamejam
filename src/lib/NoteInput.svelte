<script>
  import arrow from './arrow.svg';
  import InputPanel from '$lib/InputPanel.svelte';
  let scaleValues = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  let notePos = ['note 1/3', 'note 2/3', 'note 3/3'];
  let noteType = ['normal', 'sharp', 'flat'];
</script>

<div id="container">
  <div id="span-1-col">
    <InputPanel type="column-panel" values={scaleValues} />
  </div>
  <div id="span-2-col">
    <InputPanel values={notePos} />
    <InputPanel values={noteType} />
  </div>
  <div id="submit-container">
    <button class="submit-note shade">place note</button>
  </div>
</div>

<!-- <style>
  .submit-note {
    color: var(--accent-color2);
    user-select: none;
  }
  .submit-note:hover {
    transform: scale(1.05);
  }
  .submit-note:active {
    transform: scale(0.97);
  }

  .shade {
    filter: drop-shadow(3px 5px 0px black);
  }
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

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ' horizontal vertical'
      'submitarea submitarea';
  }

  .horizontal {
    grid-area: horizontal;
  }

  .vertical {
    grid-area: vertical;
  }

  .submitarea {
    grid-area: submitarea;
    place-items: center;
    text-align: center;
  }
</style> -->
<style>
  @media (min-width: 320px) {
  #container{
    margin: 0 auto;
    /* background-color: thistle; */
  display: grid;
  grid-template-areas: 
  "span-1-col span-2-col span-2-col "
  "span-1-col span-2-col span-2-col "
  "span-1-col submit  submit";
  justify-items: center;
  align-items: center;
  }

  #span-1-col{
    grid-area: span-1-col;
  }
  #span-2-col{
    grid-area: span-2-col;
  }
  #submit-container{
    grid-area: submit;
    /* place-items: center; */
  }
  .submit-note{
    color: var(--accent-color2);
    border: none;
    background-color: transparent;
    user-select: none;
  }
  }
</style>