<script>
  import { page } from '$app/stores';
  import { gameData } from '../../stores.js';

  import logo from '/static/assets/favicon.png';
  let hamburger = true;
  let modal = false;
</script>

{#if hamburger}
  <!-- this id should be changed to something else -->
  <nav id="mobile-nav">
    <button
      on:click={() => {
        modal = true;
      }}
    >
      <img src="assets/menu-icon-mobile.png" alt="Menu Button" id="menu-icon" />
    </button>
    <a sveltekit:prefetch href="/">bard.io</a>
    <div id="desktop-nav">
      {#if $gameData.tutorialState >= 6}
        <a sveltekit:prefetch href="/levels">LEVELS</a>
      {/if}
      <a sveltekit:prefetch href="/about">ABOUT</a>
    </div>
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
  @media (min-width: 320px) {
    /* desktop nav */
    #desktop-nav {
      display: none;
    }
    /* navbar and button */
    #mobile-nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      /* set a fix height - this might come back to bite me on the balls */
      height: 9vh;
    }

    #mobile-nav > a {
      display: block;
      font-size: 1.86rem;
      color: white;
    }
    #mobile-nav > button {
      background-color: transparent;
      width: 15%;
      position: absolute;
      right: 0;
      height: 100%;
    }
    #mobile-nav > button img {
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
      margin: 0;
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
  @media (min-width: 375px) {
    #mobile-nav > a {
      font-size: 2.5rem;
    }
    #modal-inner li a {
      font-size: 2rem;
    }
  }
  @media (min-width: 768px) {
    #mobile-nav {
      padding: 0 2em;
    }
    #mobile-nav > a {
      width: 20%;
      font-size: 2rem;
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    #mobile-nav > button {
      display: none;
    }
    #desktop-nav {
      width: 80%;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
    }
    #desktop-nav a {
      font-size: 2rem;
    }
  }
</style>
