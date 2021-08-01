<script>
  import { page } from '$app/stores';
  import { gameData } from '../../stores.js';

  import logo from '/static/assets/favicon.png';
  let hamburger = true;
  let modal = false;
</script>

{#if hamburger}
  <nav id="h-nav">
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
    <h1>game state {$gameData.tutorialState}</h1>
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
        {#if $gameData.tutorialState >= 6}
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
      {#if $gameData.tutorialState >= 6}
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
  @media (min-width: 320px) and (max-width: 749px) {
    #h-nav {
      /* background-color: aquamarine; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8em 0;
      position: relative;
    }
    #h-nav > button {
      position: absolute;
      right: 0;
      padding: 0.2em;
      display: flex;
      height: 100%;
      width: 20%;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: rgb(255, 255, 255);
      border: none;
    }
    #h-nav > h1 {
      /* got this from figma */
      font-size: 1.56rem;
    }
    #modal {
      z-index: 99999;
      position: fixed;
      width: 100%;
      min-height: 100vh;
      background-color: rgba(255, 255, 255, 0.3);
      display: flex;
      flex-direction: column;
    }
    #modal-inner {
      width: 50%;
      height: 100vh;
      background-color: #666;
      /* padding: em 0; */
      padding-top: 2em;
      align-self: flex-end;
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
      font-size: 1.5rem;
    }
    #menu-icon {
      width: 70%;
      max-width: 50px;
    }
  }
  @media (min-width: 750px) {
    #menu-icon {
      width: 100%;
      max-width: 50px;
      left: 0px;
    }
    #h-nav > button {
      padding: 0.2em;
      display: flex;
      height: 100%;
      width: 10%;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
    }
    #h-nav {
      display: inherit;
    }
    #h-nav > h1 {
      left: 50px;
      position: relative;
      text-align: inherit;
      padding-top: 10px;
      font-size: 2rem;
    }
    #modal {
      z-index: 99999;
      position: fixed;
      width: 100%;
      min-height: 100vh;
      background-color: rgba(255, 255, 255, 0.3);
      display: flex;
      flex-direction: column;
    }
    #modal-inner {
      width: 50%;
      height: 100vh;
      background-color: #666;
      /* padding: em 0; */
      padding-top: 2em;
      align-self: flex-end;
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
      font-size: 1.5rem;
    }
  }
</style>
