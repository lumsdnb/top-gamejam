<script>
  export let type = 'c';
</script>

<div class="scroll">
  <img src={`/static/scrolls/${type}-major-scroll.png`} alt="" />
</div>

<style>
  @media (min-width: 750px) {
    .scroll {
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 3rem;
    }
    img {
      max-width: 40%;
      max-height: 50%;
      height: auto;
      margin: auto;
      margin-top: auto;
      margin-left: auto;
      position: relative;
      margin-left: -2em;
      margin-top: 2em;
    }
  }
  @media (min-width: 320px) and (max-width: 749px) {
    .scroll {
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 3rem;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
</style>
