<script>
  export let sharp = false;
  export let flat = false;
  export let active = false;
</script>

<div class="note">
  {#if sharp}
    #
  {/if}
  {#if flat}
    b
  {/if}
  <img src="./static/assets/note.png" alt="" />
  {#if active}
    <span class="indicator -active" />
  {:else}
    <span class="indicator -inactive" />
  {/if}
</div>

<style>
  @media (min-width: 320px) {
    .note {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: white;
      filter: drop-shadow(6px 6px 5px black);
      font-size: 0.8rem;
    }
    .note > img {
      transform: scale(5) translateY(-0.07rem);

      z-index: 3;
    }
    .indicator {
      position: relative;
      top: 0.25rem;
      right: 0.6rem;
      width: 0.7rem;
      height: 0.4rem;
    }
    .-active {
      background-color: gold;
    }
    .inactive-note {
      background-color: var(--bg1);
    }
  }
</style>
