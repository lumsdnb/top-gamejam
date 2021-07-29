<script>
  export let type = 'c';
</script>

<div class="scroll">
  <img src={`/static/scrolls/${type}-major-scroll.png`} alt="" />
</div>

<style>
  @media (min-width: 320px) {
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
