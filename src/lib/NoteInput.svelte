<script>
  import arrow from './arrow.svg';
  import InputPanel from '$lib/InputPanel.svelte';
  let scaleValues = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  let notePos = ['note 1/3', 'note 2/3', 'note 3/3'];
  let noteType = ['normal', 'sharp', 'flat'];
</script>

<div class="note-input">
  <div class="note-selection" />
  <InputPanel type="column-panel" values={scaleValues} />
  <div>
    <InputPanel values={notePos} />
  </div>
  <InputPanel values={noteType} />
  <div />
  <button class="submit-note shade">place note</button>
</div>

<style>
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
</style>
