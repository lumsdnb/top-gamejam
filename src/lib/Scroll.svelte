<script>
  export let type = 'c';
</script>

<div class="scroll-container">
  <div class="scroll">
    <img src={`/static/scrolls/${type}-major-scroll.png`} alt="" />
  </div>
  <div class="scroll-text">
    <p>chords are build from different notes of the major scale</p>
    <br
    <p>1st 3rd and 5th create a major chord</p>
  </div>
</div>

<style>
  p {
    color: black;
  }
  .scroll-text {
    position: relative;
    font-size: var(--fz5);
    bottom: 23rem;
    left: 7rem;
    max-width: 19rem;
    z-index: 4;
  }
  @media (min-width: 900px) {
    .scroll {
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 3rem;
    }

    img {
      max-width: 366px;
      max-height: 50%;
      height: auto;
      margin: auto;
      margin-top: auto;
      margin-left: auto;
      position: relative;
      margin-left: -2em;
      margin-top: 5em;
    }
  }
  @media (min-width: 750px) and (max-width: 899px) {
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
      position: relative;
      top: 3em;
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
