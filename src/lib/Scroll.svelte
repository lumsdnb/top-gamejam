<script>
  export let type = 'c';
</script>

<div class="scroll">
  <img src={`/static/scrolls/${type}-major-scroll.png`} alt="" />
  <div class="scroll-text">
    <p>chords are build from different notes of the major scale</p>

    <p>
      The <strong>first</strong>,<strong>third</strong> and
      <strong>5th</strong> note create a major chord
    </p>
  </div>
</div>

<style>
  p {
    color: black;
  }
  strong {
    color: rgb(34, 22, 37);
  }
  @media (min-width: 320px) {
    .scroll {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .scroll img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    .scroll-text {
      position: absolute;
      bottom: 6%;
      text-align: center;
      padding: 3em 4rem;
      z-index: 2;
      /* background-color: rgba(137, 43, 226, 0.473); */
    }
    .scroll-text p {
      font-size: 1rem;
    }
    .scroll-text p:first-child {
      margin-bottom: 1.5em;
    }
  }
  /* this will probably be irrelevant */
  @media (min-width: 768px) {
    .scroll-text {
      bottom: 10%;
    }
    .scroll-text p {
      font-size: 1.5rem;

    }
  }
  @media (min-width: 1500px) {
     .scroll-text {
      bottom: 5.5%;
      padding: 3em 6rem;

    }
    .scroll-text p {
      font-size: 1.5rem;
    }
  }
</style>
