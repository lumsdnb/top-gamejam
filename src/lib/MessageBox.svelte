<script>
  import { set_data } from 'svelte/internal';
  export let message = 'i am sad...';
  export let player = false;
</script>
<!-- Todo: find a better way to set the order of thes -->
<div class:reorder={!player} class="message-box">
  {#if player}
    <img id="player-img" src="/static/assets/favicon.png" alt="" />
    <p>{message}</p>
    {:else}
    <!-- changed some logic here -->
    <p>{message}</p>
    <img src="/static/forest-of-letters/a-happy.png" alt="" />
  {/if}
  <!-- boxes on the corners -->
  <div class="box b1"></div>
  <div class="box b2"></div>
  <div class="box b3"></div>
  <div class="box b4"></div>
</div>

<style>
  /* add media query */
  .message-box {
    color: white;
    width: 100%;
    /* height: 5rem; */
    background-color: var(--bg2);
    border: 1px white solid;
    padding: .2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* display: grid;
    grid-template-columns: ; */
  }
  .message-box > p {
    padding: 0 1rem;
  }
  img {
    max-width:25%;
    border: 1px solid orangered;
  }
  #player-img{
    background-color: #085E2B;
    border: 1px solid #E25714;

  }
  .box{
    background-color: white;
    width: .4em;
    height: .4em;
    position: absolute;
  }
  .b1{
    top:-.2em;
    left: -.2em;
  }
  .b2{
    top:-.2em;
    right:-.2em;
  }
  .b3{
    bottom:-.2em;
    left: -.2em;
  }
  .b4{
    bottom:-.2em;
    right: -.2em;
  }

</style>
