<script lang="ts">
    import { onMount } from 'svelte';

    export let images: { id: number; path: string; alt: string }[] = [];
    export let speed = 15;
    let animation: Animation | null=null;
    let trackElement: HTMLElement;
    onMount(() => {
        if (trackElement) {
            const keyframes = [
                { transform: 'translateX(-50%)' },
                { transform: 'translateX(0%)' }
            ];

            animation = trackElement?.animate?.(keyframes, {
                duration: speed * 1000,
                iterations: Infinity
            });
        }
    });
</script>

<style>
    .carousel-container {
        overflow: hidden;
        position: relative;
        padding: 2rem 0;
    }

    .carousel-container::before,
    .carousel-container::after {
        content: "";
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }

    .carousel-container::before {
        left: 0;
        background: linear-gradient(to right, white 20%, transparent 100%);
    }

    .carousel-container::after {
        right: 0;
        background: linear-gradient(to left, white 20%, transparent 100%);
    }

    .carousel-track {
        display: flex;
        width: max-content;
    }

    .carousel-item {
        flex: none;
        width: 450px;
        height: 350px;
        margin: 0 0.5rem;
        transition: filter 0.3s ease;
    }

    .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }
    .carousel-item:hover img {
        filter: grayscale(0%);
    }
</style>

<div data-testid="partners-carousel"
     class="carousel-container" 
     role="group" 
     on:mouseenter={() => animation?.updatePlaybackRate?.(0.5)}
     on:mouseleave={() => animation?.updatePlaybackRate?.(1)}>
    <div class="carousel-track" bind:this={trackElement}>
        {#each images as image (image.id)}
            <div class="carousel-item">
                <img src={image.path} alt={image.alt} class=" rounded-4xl" loading="lazy" />
            </div>
        {/each}
        {#each images as image (image.id)} 
            <div class="carousel-item">
                <img src={image.path} alt={image.alt} class=" rounded-4xl" loading="lazy" />
            </div>
        {/each}
    </div>
</div>
