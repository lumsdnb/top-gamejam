<script context="module">
  import { browser, dev } from "$app/env";

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
  <title>About</title>
</svelte:head>

<h1 id="title">About</h1>
<div id="content">
  <p><b>bard.io</b> teaches you music theory in a fun way.</p>

  <p>
    This project was created as part of the first <a
      href="https://itch.io/jam/top-jam-1">Odin game jam</a
    >.
  </p>
  <p>don't expect this to work yet..</p>
</div>

<style>
  @media (min-width: 320px) {
    #title {
      font-size: 1.5rem;
      text-transform: capitalize;
      margin-bottom: 1em;
      text-shadow: 2px 2px 1px black;
    }
    #content {
      background-color: rgba(129, 129, 129, 0.418);
      font-size: 1.5rem;
      padding: 0.4em;
    }
    #content p {
      margin-bottom: 1em;
    }
  }
  @media (min-width: 375px) {
    #title {
      font-size: 2rem;
      margin-bottom: 2em;
    }
    #content {
      font-size: 1.8rem;
    }
    #content p {
      margin-bottom: 1.5em;
    }
  }
</style>
