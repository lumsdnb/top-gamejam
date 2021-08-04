<script>
  export let type = 'c';
</script>


  <div class="scroll">
    <img src={`/static/scrolls/${type}-major-scroll.png`} alt="" />
    <div class="scroll-text">
      <p>chords are build from different notes of the major scale</p>

      <p>1st 3rd and 5th create a major chord</p>
    </div>
  </div>


<style>
  p {
    color: black;
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
      height:100%;
    }
    .scroll-text{
      position:absolute;
      bottom: 6%;
      text-align: center;
      padding: 3em 4rem;
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
      position: relative;
      top: 3em;
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
  }
</style>
