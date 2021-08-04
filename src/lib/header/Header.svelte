<script>
  import { page } from '$app/stores';
  import { gameData } from '../../stores.js';

  import logo from '/static/assets/favicon.png';
  let hamburger = true;
  let modal = false;
</script>
<!-- fuck is this  -->
<!-- <nav class="desktop-nav">
  <ul>
    {#if $gameData.tutorialState >= 6}
      <li class:active={$page.path === '/levels'}>
        <a sveltekit:prefetch href="/levels">Levels</a>
      </li>
    {/if}
    <li class:active={$page.path === '/'}>
      <a sveltekit:prefetch href="/"><h1>bard.io</h1></a>
    </li>
    <li class:active={$page.path === '/about'}>
      <a sveltekit:prefetch href="/about">About</a>
    </li>
  </ul>
</nav> -->

{#if hamburger}
  <nav id="mobile-nav">
    <button
      on:click={() => {
        modal = true;
      }}
    >
      <img
        src="./static/assets/menu-icon-mobile.png"
        alt="Menu Button"
        id="menu-icon"
      />
    </button>
    <h1>bard.io</h1>
  </nav>
{:else}
  <!-- else content here -->
  <header>
    <div class="corner">hamburger menu?</div>

    <nav>
      <ul>
        <li class:active={$page.path === '/'}>
          <a sveltekit:prefetch href="/">Home</a>
        </li>
        {#if $gameData.finishedTutorial}
          <li class:active={$page.path === '/levels'}>
            <a sveltekit:prefetch href="/levels">Levels</a>
          </li>
        {/if}
        <li class:active={$page.path === '/about'}>
          <a sveltekit:prefetch href="/about">About</a>
        </li>
      </ul>
    </nav>

    <div class="corner">
      <!-- TODO put something else here? github link? -->
    </div>
  </header>
{/if}
{#if modal}
  <!-- content here -->
  <div
    id="modal"
    on:click={() => {
      modal = false;
    }}
  >
    <ul id="modal-inner">
      <li class:active={$page.path === '/'}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      {#if $gameData.tutorialState >= 7}
        <li class:active={$page.path === '/levels'}>
          <a sveltekit:prefetch href="/levels">Levels</a>
        </li>
      {/if}
      <li class:active={$page.path === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
    </ul>
  </div>
{/if}

<style>
  nav {
    z-index: 55;
    filter: drop-shadow(2px 2px 1px black);
  }
  
  /* desktop nav, hidden by default */
  .desktop-nav {
    position: absolute;
    top: 4rem;
    visibility: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .desktop-nav > ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .desktop-nav li {
    list-style: none;
    padding: 0 1rem;
  }
  @media (min-width: 320px) {
    /* navbar and button */
    #mobile-nav {
    /* background-color: cadetblue; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
 
    #mobile-nav > h1{
      display: block;
      font-size: 1.86rem;
    }
    #mobile-nav > button{
      background-color: transparent;
      border-radius: 5px;
      width: 15%;
      position: absolute;
      right:0;
      height: 100%;

    }
    #mobile-nav > button img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    /* modal */
     #modal {
    z-index: 99;
    position: fixed;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    padding: 0;
    margin:0;
  }
  #modal-inner {
    padding: 0;
    width: 50%;
    height: 100vh;
    background-color: #666;
    padding-top: 2em;
    align-self: flex-end;
    margin: 0;
  }
  #modal-inner li {
    margin-bottom: 2em;
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #modal-inner li a {
    padding: 0.5em;
    font-size: 1.6rem;
  }
  }
  
  @media (min-width: 650px) {
    #mobile-nav {
      position: absolute;
      /* top: -5rem; */
      visibility: hidden;
    }
    .desktop-nav {
      position: static;
      visibility: visible;
    }
  }
</style>
