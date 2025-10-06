<script lang="ts">
	import { Rectangle } from 'pixi-svelte';
	import { getContext } from '../game/context';
	import { Tween } from 'svelte/motion';
	import { onMount } from 'svelte';

	type Props = {
		oncomplete: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const alpha = new Tween(0, { duration: 1000 });

	const startAnimation = async () => {
		await alpha.set(1);
		props.oncomplete();
	};

	onMount(() => {
		startAnimation();
	});
</script>

<Rectangle 
	{...context.stateLayoutDerived.canvasSizes()} 
	backgroundColor={0x000000} 
	alpha={alpha.current} 
/>
