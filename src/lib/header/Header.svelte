<script>
  import { page } from '$app/stores';
  import logo from '/static/assets/favicon.png';
</script>

<header>
  <div class="corner">hamburger menu?</div>

  <nav>
    <ul>
      <li class:active={$page.path === '/'}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.path === '/levels'}>
        <a sveltekit:prefetch href="/levels">Levels</a>
      </li>
      <li class:active={$page.path === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
    </ul>
  </nav>

  <div class="corner">
    <!-- TODO put something else here? github link? -->
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    padding: 1rem;
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    --background: #394f57;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 1rem;
    margin: 0;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -1rem;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10%;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
