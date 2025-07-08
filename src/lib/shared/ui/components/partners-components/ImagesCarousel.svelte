<script lang="ts">
    import { onMount } from 'svelte';

    export let images: { id: number; path: string; alt: string }[] = [];
    export let speed: number = 15;
    export let left_to_right: boolean = true;

    export let grayfilter: boolean = false;
    export let logoStyle: boolean = false;


    let array: Array<number> = logoStyle ? Array(4) : Array(2);
    // export let 
    let animation: Animation | null=null;
    let trackElement: HTMLElement;
    onMount(() => {
        if (trackElement) {
            const keyframes = left_to_right ? [
                { transform: 'translateX(-50%)' },
                { transform: 'translateX(0%)' },

            ] : 
            [
                { transform: 'translateX(0%)' },
                { transform: 'translateX(-50%)' }
            ];

            animation = trackElement?.animate?.(keyframes, {
                duration: speed * 1000,
                iterations: Infinity
            });
        }
    });
</script>

<div data-testid="partners-carousel"
     class="carousel-container" 
     role="group" 
     on:mouseenter={() => animation?.updatePlaybackRate?.(0.5)}
     on:mouseleave={() => animation?.updatePlaybackRate?.(0.8)}>
    <div class="carousel-track" bind:this={trackElement}>
        {#each array as _}
            {#each images as image (image.id)}
                <div class="carousel-item" style="{logoStyle ? 'height:200px; width:230px;' : 'height:350px; width:450px;'}">
                    <img 
                        src={image.path} 
                        alt={image.alt} 
                        style="{ grayfilter ? '' : 'filter:none'}; { logoStyle ? 'background-color: var(--color-pale-purple); padding: 2rem' : '' };" 
                        class=" rounded-4xl" 
                        loading="lazy" />
                </div>
            {/each} 
        {/each}   
    </div>
</div>



<style lang="postcss">
    @reference "tailwindcss";

    .carousel-container {
        overflow: hidden;
        position: relative;
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
        @apply flex flex-row gap-3;
        width: max-content;
    }

    .carousel-item {
        transition: filter 0.3s ease;
    }

    .carousel-item img {
        width: 100%;
        height: 100%;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }
    .carousel-item:hover img {
        filter: grayscale(0%);
    }
    
</style>
