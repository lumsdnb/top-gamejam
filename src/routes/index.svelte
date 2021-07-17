<script context="module">
  export const prerender = true;
</script>

<script>
  import Counter from '$lib/Counter.svelte';
  import NoteLines from '$lib/NoteLines.svelte';
  import NoteInput from '$lib/NoteInput.svelte';
  import MessageBox from '$lib/MessageBox.svelte';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <MessageBox />
  <NoteLines />
  <NoteInput />
  <MessageBox message={"yooo"} player/>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
