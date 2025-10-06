<script lang="ts">
	import ReelSymbol from './ReelSymbol.svelte';
	import { getContext } from '../game/context';

	const context = getContext();

	const isSymbolWalkingWild = (reelIndex: number, rowIndex: number) => {
		if (!context.stateGame.walkingWilds) return false;
		return context.stateGame.walkingWilds.some((ww) => ww.reel === reelIndex && ww.row === rowIndex);
	};
</script>

{#each context.stateGame.board as reel, reelIndex (reelIndex)}
	{#each reel.reelState.symbols as reelSymbol, reelRow (reelRow)}
		{#if !isSymbolWalkingWild(reelIndex, reelRow)}
			<ReelSymbol {reelIndex} {reelSymbol} />
			{:else}
				{ reelSymbol.oncomplete()}
		{/if}
	{/each}
{/each}
