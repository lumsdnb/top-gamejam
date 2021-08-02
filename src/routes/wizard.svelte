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
<div id="content">yo</div>
<MessageBox wizard />

<section transition:fade>
  <NoteRenderer />
  {#if $gameData.wonRound}
    <!-- ------   you won some gold!------    -->
    <div in:fly={{ y: -200, duration: 700 }} out:fade>
      <ReceiveGoldUI />
    </div>
  {:else}
    <MainInput />
  {/if}
</section>
<div class="player-box">
  <MessageBox player on:click message="i know how to do this" />
  {$gameData.wonRound}
</div>

<style>
  .bg-img {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: url(../static/scale-the-mountain/mountain-bg-mobile.png);
  }
  body {
    color: green;
    background-color: var(--primary-color);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
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
