<script>
  export let sharp = false;
  export let flat = false;
  export let active = false;
  export let position = '0';
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
  @media (min-width: 320px) {
 .note {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    filter: drop-shadow(6px 6px 5px black);
    font-size: .8rem;
  }
  .active-note {
    color: gold;
  }
  .inactive-note {
    color: white;
  }
}
</style>
