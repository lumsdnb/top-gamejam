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
  {#if active}
    <span class="active-note"> o </span>
  {:else}
    <span class="inactive-note">o</span>
  {/if}
</div>

<style>
  .entered-notes > span {
    display: inline-block;
    font-size: 1.4rem;
    filter: drop-shadow(6px 6px 5px black);
  }
  .note {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: white;
  }
  .active-note {
    color: gold;
  }
  .inactive-note {
    color: white;
  }
</style>
