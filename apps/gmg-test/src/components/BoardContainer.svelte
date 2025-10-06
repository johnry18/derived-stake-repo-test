<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { getContext } from '../game/context';

	type Props = {
		children: () => any;
	};
	const props: Props = $props();

	const context = getContext();

	const sizeLayout = $derived.by(() => context.stateGameSizeLayout.sizeLayout());
	const yPosition = $derived(sizeLayout.isPortrait ? sizeLayout.y + sizeLayout.height * -0.123 : sizeLayout.y + sizeLayout.height * -0.007);
</script>

<Container
	x={sizeLayout.x * 0.995}
	y={yPosition}
	pivot={context.stateGameDerived.boardLayout().pivot}
	scale={sizeLayout.scale}
>
	{@render props.children()}
</Container>
