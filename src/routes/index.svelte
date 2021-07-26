<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
  import { gameData } from '../stores.js';

  let characterMessage = 'please help me figure this out...';
  //this will be loaded from main json file later
  const scale = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<MessageBox message={characterMessage} />
<section>
  <NoteRenderer {scale} />
  <NoteInput bind:characterMessage />
</section>
<MessageBox message={'yooo'} player />

<style>
  @media (min-width: 320px) {
    section {
      padding: 1.5em 0.5em;
    }
  }
</style>
