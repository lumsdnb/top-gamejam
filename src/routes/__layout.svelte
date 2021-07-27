<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<Header />

<main>
  <slot />
</main>

<style>
  /* main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: ;
  } */
  @media (min-width: 320px) and (max-width: 749px) {
    main {
      width: 90%;
      margin: 0 auto;
      /*background-color: bisque;*/
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
