<script>
  import { identity } from 'svelte/internal';

  export let imgSrc;
  export let imgAlt;
  export let linkSrc;
  export let message = 'Easy level to get started with..';
  let showDetails = false;
  const clickHandler = () => {
    console.log('cliked');
    return (showDetails = showDetails ? false : true);
  };
</script>

<div
  id="container"
  on:mouseleave={() => {
    showDetails = false;
  }}
  on:click={(e) => {
    //   fix cursor bug
    clickHandler();
  }}
>
  <p>{message}</p>
  <a id="level-link" href={linkSrc}>play</a>

  <div id="img-container" class:details={showDetails}>
    <img src={imgSrc} alt={imgAlt} />
  </div>
</div>

<style>
  #container {
    user-select: none;
    background-color: #394f57;
    position: relative;
    margin-bottom: 1rem;
    position: relative;
    padding: 3rem;
    min-height: 100%;
    font-size: 1rem;
    filter: drop-shadow(2px 2px 2px black);
  }

  @media (min-width: 320px) {
    #container {
      margin-bottom: 1rem;
      position: relative;
      font-size: 1rem;
      padding: 1rem;
    }
    #container p {
      margin-bottom: 1em;
    }
    #level-link {
      text-align: center;
    }

    #img-container {
      position: absolute;
      width: fit-content;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #394f57;
    }
    #img-container:hover {
      cursor: pointer;
    }

    #img-container img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    .details {
      width: 0 !important;
    }
  }
</style>
