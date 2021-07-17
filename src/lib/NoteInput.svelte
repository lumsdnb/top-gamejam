<script>
  import arrow from "./arrow.svg";
</script>

<div class="note-input">
  <div class="note-selection">
    <button>
      <img class="up arrow shade" src={arrow} alt="up arrow">
    </button>
    <p>g</p>
    <button>
      <img class="down arrow shade" src={arrow} alt="down arrow">
    </button>
  </div>
  <div>
    <button>
      <svg class="left arrow shade" fill="#fec837" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g ><path d="M219.6,10h140.2v138.7H219.6V10z"/><path d="M359.8,148.7H500v140.2H359.8V148.7L359.8,148.7z"/><path d="M500,288.9h140.2v140.2H500V288.9z"/><path d="M500,569.4h140.2v140.2H500V569.4L500,569.4z"/><path d="M359.8,709.6H500v140.2H359.8V709.6L359.8,709.6z"/><path d="M219.6,849.8h140.2V990H219.6V849.8z"/><path d="M640.2,429.1h140.2v140.2H640.2V429.1L640.2,429.1z"/></g>
      </svg>
    </button>
    <p>note 1/3</p>
    <button>
      <svg class="right arrow shade" fill="#fec837" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g ><path d="M219.6,10h140.2v138.7H219.6V10z"/><path d="M359.8,148.7H500v140.2H359.8V148.7L359.8,148.7z"/><path d="M500,288.9h140.2v140.2H500V288.9z"/><path d="M500,569.4h140.2v140.2H500V569.4L500,569.4z"/><path d="M359.8,709.6H500v140.2H359.8V709.6L359.8,709.6z"/><path d="M219.6,849.8h140.2V990H219.6V849.8z"/><path d="M640.2,429.1h140.2v140.2H640.2V429.1L640.2,429.1z"/></g>
      </svg>
    </button>
  </div>
  <button>
    <svg class="left arrow shade" fill="#fec837" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
      <g ><path d="M219.6,10h140.2v138.7H219.6V10z"/><path d="M359.8,148.7H500v140.2H359.8V148.7L359.8,148.7z"/><path d="M500,288.9h140.2v140.2H500V288.9z"/><path d="M500,569.4h140.2v140.2H500V569.4L500,569.4z"/><path d="M359.8,709.6H500v140.2H359.8V709.6L359.8,709.6z"/><path d="M219.6,849.8h140.2V990H219.6V849.8z"/><path d="M640.2,429.1h140.2v140.2H640.2V429.1L640.2,429.1z"/></g>
    </svg>
  </button>
  <p>sharp</p>
<button>
  <svg class="right arrow shade" fill="#fec837" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <g ><path d="M219.6,10h140.2v138.7H219.6V10z"/><path d="M359.8,148.7H500v140.2H359.8V148.7L359.8,148.7z"/><path d="M500,288.9h140.2v140.2H500V288.9z"/><path d="M500,569.4h140.2v140.2H500V569.4L500,569.4z"/><path d="M359.8,709.6H500v140.2H359.8V709.6L359.8,709.6z"/><path d="M219.6,849.8h140.2V990H219.6V849.8z"/><path d="M640.2,429.1h140.2v140.2H640.2V429.1L640.2,429.1z"/></g>
    </svg>
  </button>
  <div>
    
  </div>
    <button class="submit-note shade">place note</button>
</div>


<style>
  .arrow{
    width: 3rem;
    height: 3rem;
  }
  .submit-note{
    color: var(--accent-color2);
    user-select: none;
  }
  
  .submit-note:hover{
    transform: scale(1.05);
  }
  .submit-note:active{
    transform: scale(0.97);
  }
  .note-selection{
    font-size: 1.8rem;
  }
  p{
    display: inline-block;
    color: white;
    user-select: none;
  }
  
  .left{
    transform: rotate(180deg);
  }
  .up{
    transform: rotate(-90deg);
  }
  .down{
    transform: rotate(90deg);
  }
  
  .shade{
    filter: drop-shadow(3px 5px 0px black);
  }
  
  button{
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  button:hover{
    transform: scale(1.04);
  }
  button:active{
    transform: scale(0.95);
  }
  
  .note-selection{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>