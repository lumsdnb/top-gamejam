<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 320px) {
    main {
      width: 90%;
      margin: 0 auto;
      padding: .3em 0;
      min-height: 91vh;
      position: relative;
    }
  }
  @media (min-width: 750px) {
    main {
      width: 90%;
      margin: 0 auto;
      top: 2em;
      /*background-color: bisque;*/
    }
  }
</style>
