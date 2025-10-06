<script lang="ts">
	import { OnMount } from 'components-shared';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import Anticipation from './Anticipation.svelte';
	import { Container, Rectangle } from 'pixi-svelte';

	const context = getContext();
	
	const sizeLayout = $derived.by(() => context.stateGameSizeLayout.sizeLayout());

	const hasAnticipation = $derived(
		context.stateGame.board.some((reel) => reel.reelState.anticipating),
	);
	
	const yPosition = $derived(sizeLayout.isPortrait ? sizeLayout.y + sizeLayout.height * -0.123 : sizeLayout.y + sizeLayout.height * -0.007);
</script>

{#if hasAnticipation}
	<OnMount
		onmount={() => {
			context.eventEmitter.broadcast({ type: 'soundLoop', name: 'sfx_anticipation' });
			context.eventEmitter.broadcast({
				type: 'soundFade',
				name: 'sfx_anticipation',
				from: 0,
				to: 1,
				duration: SECOND,
			});

			return () => {
				context.eventEmitter.broadcast({ type: 'soundStop', name: 'sfx_anticipation' });
			};
		}}
	/>
{/if}

<Container scale={sizeLayout.scale} x={sizeLayout.x} y={yPosition} boundsArea={{x:0, y:0, 
	width:context.stateGameDerived.boardLayout().width, height:context.stateGameDerived.boardLayout().height}}
	pivot={context.stateGameDerived.boardLayout().pivot}>
{#each context.stateGame.board as reel}
	{#if reel.reelState.anticipating}
		<Anticipation {reel} oncomplete={() => (reel.reelState.anticipating = false)} />
	{/if}
{/each}
</Container>
