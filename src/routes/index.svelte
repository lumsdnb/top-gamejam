<script context="module">
  export const prerender = true;
</script>

<script>
  import NoteRenderer from '$lib/NoteRenderer.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';

  //this will be loaded from main json file later
  const scale = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <MessageBox />
  <NoteRenderer notes={scale} />
  <NoteInput />
  <MessageBox message={'yooo'} player />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: white;
  }
</style>
