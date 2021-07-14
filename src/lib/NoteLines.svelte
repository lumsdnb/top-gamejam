<script>
	import { spring } from 'svelte/motion';
</script>

<div class="notes">
	<picture>
		<source srcset="clef-white.png" type="image/png" />
		<img src="clef-white.png" alt="Welcome" />
	</picture>
	<div class="lines">
		<div class="note-line" />
		<div class="note-line" />
		<div class="note-line" />
		<div class="note-line" />
		<div class="note-line" />
	</div>
</div>

<style>
	.notes {
		display: flex;
		flex-direction: row;
	}
	.lines {
	}
	img[src='clef-white.png'] {
		width: 7rem;
		position: relative;
		bottom: 4rem;
		left: 4rem;
	}
	.note-line {
		width: 70vw;
		height: 2px;
		background-color: white;
		margin-bottom: 10px;
	}
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		color: var(--text-color);
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--secondary-color);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: var(--text-color);
	}
</style>
