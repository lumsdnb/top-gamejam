<script>
  export let type = 0; //1 for sharp, 2 for flat
  export let active = false;
  import { fade, fly, blur } from 'svelte/transition';
</script>

  <div class="note" in:fly={{ y: -5, duration: 100 }} out:blur={{ duration: 60 }}>
    {#if type==1}
      <span class="ntype">#</span>
    {/if}
    {#if type==2}
      <span class="ntype">b</span>
    {/if}
    <img src="/static/assets/note.png" alt="" />
    {#if active}
      <span class="indicator -active" />
    {:else}
      <span class="indicator -inactive" />
    {/if}
  </div>

<style>
  
  .note {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    filter: drop-shadow(6px 6px 5px black);
  }
  .note > img {
    transform: scale(5) translateY(-0.07rem);
    z-index: 3;
  }
  
  @media (min-width: 320px) {
    .ntype{
      color: white;
      font-size: 1.4em;
      position: relative;
      right: 1rem;
      top: .7rem;
      transform: rotate(4deg);
      filter: drop-shadow(2px 2px 2px black);
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
