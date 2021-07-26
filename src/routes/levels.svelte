<script>
  import Level from "$lib/Level.svelte";
  import scales from "/static/scales.json";
  const cleanedScales = ["c", "d", "e", "f", "g", "a", "b"];
  //todo: filter out duplicate letters (sharps, flats)
  const parsedScales = JSON.parse(JSON.stringify(scales));
  parsedScales.forEach((element) => {
    console.log(element.scale);
  });

  const details = document.querySelectorAll("details");
  console.log(details + "yo");
</script>

<h1 id="title">pick a scale</h1>
<div id="level-list">
  {#each cleanedScales as element, i (element)}
    <Level
      linkSrc={`/levels/${element}`}
      imgSrc={`./static/forest-of-letters/${element}-happy.png`}
      imgAlt={`letter ${element.toUpperCase()}`}
    />
  {/each}
</div>

<style>
  @media (min-width: 320px) {
    #title {
      font-size: 1.5rem;
      text-transform: capitalize;
      margin-bottom: 1em;
      text-shadow: 1px 1px 2px #ff3e00;
    }
    #level-list {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: 0.5em;
      overflow: hidden;
    }
  }
</style>
