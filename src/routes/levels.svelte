<script>
  import scales from '/static/scales.json';
  const cleanedScales = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  //todo: filter out duplicate letters (sharps, flats)
  const parsedScales = JSON.parse(JSON.stringify(scales));
  parsedScales.forEach((element) => {
    console.log(element.scale);
  });

  const details = document.querySelectorAll('details');
  console.log(details + 'yo');
</script>

<div class="level-screen">
  <h1>pick a scale</h1>

  <div class="level-list">
    {#each cleanedScales as element, i (element)}
      <details>
        <summary
          >{element}<img
            src={`./static/forest-of-letters/${element}-happy.png`}
            alt={`letter ${element.toUpperCase()}`}
          /></summary
        >
        <div class="level-content">
          <p>Easy level to get started with..</p>
          <a class="level-link" href={`/levels/${element}`}>play</a>
        </div>
      </details>
    {/each}
  </div>
</div>

<style>
  .level-link {
    text-align: right;
  }

  /* # The Rotating Marker # */
  details summary::-webkit-details-marker {
    display: none;
  }
  summary::before {
    content: '▶';
    position: absolute;
    top: 1rem;
    left: 0.8rem;
    transform: rotate(0);
    transform-origin: center;
    transition: 0.2s transform ease;
  }
  details[open] > summary:before {
    transform: rotate(90deg);
    transition: 0.45s transform ease;
  }

  /* # The Sliding Summary # */
  details {
    overflow: hidden;
  }
  details summary {
    position: relative;
    z-index: 10;
  }
  @keyframes details-show {
    from {
      margin-bottom: -80%;
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  details > *:not(summary) {
    animation: all 500ms ease-in-out;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    color: transparent;
    overflow: hidden;
  }
  details[open] > *:not(summary) {
    color: inherit;
  }
  details[open] {
    background-color: rgba(4, 4, 4, 0.4);
  }

  details {
    max-width: 100%;
    box-sizing: border-box;
    margin-top: 5px;
    background: white;
  }
  summary {
    border: 4px solid transparent;
    outline: none;
    display: block;
    background: #394f57;
    color: white;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  details[open] summary,
  summary:hover {
    color: #ffca28;
    border: 4px #fec837 solid;
  }
  summary:hover::before,
  details[open] summary::before {
    color: #ffa128;
  }
  .level-content {
    padding: 1rem;
    border: 2px solid #888;
    border-top: none;
    display: flex;
    flex-direction: column;
  }

  .level-screen {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
