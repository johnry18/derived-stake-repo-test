<script lang="ts">
	import { SpineProvider, SpineTrack, Sprite, type SpineTrackProps } from 'pixi-svelte';
	import { Tween } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { SYMBOL_SIZE } from '../game/constants';

	type Props = {
		assetKey: string;
		loop?: boolean;
		x?: number;
		y?: number;
		showFrame?: boolean;
		listener: SpineTrackProps['listener'];
	};

	const { assetKey, loop, x, y, showFrame = true, listener }: Props = $props();
	
	const scale = new Tween(1, { duration: 250 });

	const startYoyoAnimation = async () => {
		await scale.set(0.75);
		await scale.set(1);
		await scale.set(0.75);
		await scale.set(1);

		if (loop) {
			startYoyoAnimation();
		}
	};

	onMount(() => {
		startYoyoAnimation();
	});
</script>

<Sprite
	x={x}
	y={y}
	anchor={0.5}
	key={assetKey}
	width={SYMBOL_SIZE}
	height={SYMBOL_SIZE}
	scale={scale.current}
/>

{#if showFrame}
	<SpineProvider x={x} y={y} key="winframe">
		<SpineTrack trackIndex={0} animationName="animation" loop={loop} listener={listener} />
	</SpineProvider>
{/if}

