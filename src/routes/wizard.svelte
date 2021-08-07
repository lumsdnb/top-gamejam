<script context="module">
  import { browser, dev } from '$app/env';
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import MainInput from '$lib/MainInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import ReceiveGoldUI from '$lib/ReceiveGoldUI.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import { fade, fly } from 'svelte/transition';
  import { gameData, characterMessages } from '$lib/../stores';
  import scalesJSON from '/static/scales.json';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>scale the mountain!</title>
</svelte:head>
<div class="bg-img" />

<h1 id="title">Scale the mountain!</h1>
<MessageBox wizard message="this is the part where you fight the wizard..." />

<section transition:fade={{ duration: 5000 }}>
  Game demo created during <a href="https://itch.io/jam/top-jam-1"
    >Odin Game Jam #1</a
  >
  <br />
  <p>
    built by <br />@lumsdnb <br />@DeeAyDan <br />@BLVCK_BEVRD <br />using
    SvelteKit
  </p>
</section>
<div class="player-box">
  <MessageBox player on:click message="thanks for playing!" />
  {$gameData.wonRound}
</div>

<style>
  .bg-img {
    position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: url(/static/scale-the-mountain/mountain-bg-mobile.png);
  }
  .player-box {
    position: fixed;
    bottom: 0;
  }
  body {
    color: green;
    background-color: var(--primary-color);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  section {
    background-color: var(--bg2);
    color: white;
    padding: 3rem;
    margin-top: 4rem;
  }
  @media (min-width: 320px) {
    #title {
      font-size: 1.5rem;
      text-transform: capitalize;
      margin-bottom: 1em;
      text-shadow: 1px 1px 2px #ff3e00;
    }
    #content {
      background-color: rgba(129, 129, 129, 0.418);
      font-size: 1rem;
      padding: 0.4em;
    }
    #content p {
      margin-bottom: 1em;
    }
  }
</style>
