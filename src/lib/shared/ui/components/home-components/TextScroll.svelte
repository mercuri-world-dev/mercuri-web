<script lang="ts">
	export let text = 'who we are';
	export let seperator = '✷';
	export let speed = 10;
	export let gap = '2rem';
	export let fontSize = '69px';
	export let seperatorWeight = 'bold';
</script>

<div data-testid="text-scroll" class="scroll-container">
	<div
		class="scroll-text"
		style="--speed: {speed}s; gap: {gap}; font-size: {fontSize};"
	>
		{#each Array(10).fill(text) as word}
			<span>{word}</span>
			<span style="font-weight: {seperatorWeight};">{seperator}</span>
		{/each}
	</div>
</div>

<style>
	@keyframes scrollText {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.scroll-container {
		overflow: hidden;
		white-space: nowrap;
		position: relative;
		width: 100%;
		background: white;
		mask-image: linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%);
	}

	.scroll-text {
		display: flex;
		animation: scrollText var(--speed) linear infinite;
		font-weight: bold;
		color: transparent;
		-webkit-text-stroke: 2px rgb(46, 5, 160);
	}
</style>