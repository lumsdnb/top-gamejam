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
<MessageBox />
<section>
  <NoteRenderer {scale} />
  <NoteInput />
</section>
<MessageBox message={'yooo'} player />

<style>
  @media (min-width: 320px) {
    section{
      padding: 1.5em .5em ;
    }
  }
  /* section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: white;
  }
  .shiftdown {
    margin-top: 5rem;
  }
  .bottom {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    left: 50%;
    transform: translateX(-45%);
  } */
</style>
