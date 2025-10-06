<script lang="ts">
	import { Container } from "pixi-svelte";
	import { getContext } from "../game/context";
	import { FadeContainer } from "components-pixi";
	import { Tween } from "svelte/motion";
	import { getSymbolX, getSymbolY } from "../game/utils";
	import SymbolCustomWin from "./SymbolCustomWin.svelte";

	const context = getContext();

	const sizeLayout = $derived.by(() => context.stateGameSizeLayout.sizeLayout());
	const yPosition = $derived(
		sizeLayout.isPortrait 
			? sizeLayout.y + sizeLayout.height * -0.123 
			: sizeLayout.y + sizeLayout.height * -0.007
	);

	//Initialize tweens for up to 3 walking wilds
	const tweenPos = [
		{
			x: new Tween(0, { duration: 1000 }),
			y: new Tween(0, { duration: 1000 })
		},
		{
			x: new Tween(0, { duration: 1000 }),
			y: new Tween(0, { duration: 1000 })
		},
		{
			x: new Tween(0, { duration: 1000 }),
			y: new Tween(0, { duration: 1000 })
		}
	];

	// Function to set tween target positions based on reel and row
	const setTweenToPosition = (index: number, reelIndex: number, row: number) => {
		tweenPos[index].x.set(getSymbolX(reelIndex));
		tweenPos[index].y.set(getSymbolY(row - 1));
	};

	$effect(() => {
		if (context.stateGame.walkingWilds) {
			context.stateGame.walkingWilds.forEach((wild, index) => {
				setTweenToPosition(index, wild.reel, wild.row);
			});
		}
	});
</script>


<Container
	x={sizeLayout.x * 0.995}
	y={yPosition}
	pivot={context.stateGameDerived.boardLayout().pivot}
	scale={sizeLayout.scale}
>
	{#if context.stateGame.walkingWilds}
		{#each context.stateGame.walkingWilds as walkingWild, index}
			{@const reelSymbol = context.stateGame.board[walkingWild.reel].reelState.symbols[walkingWild.row]}
			<FadeContainer 
				show={!!walkingWild}
				x={tweenPos[index].x.current}
				y={tweenPos[index].y.current}
			>
				<SymbolCustomWin
					assetKey="wild.png"
					x={0}
					y={0}
					loop={true}
					showFrame={reelSymbol.symbolState === 'win' || reelSymbol.symbolState === 'postWinStatic'}
					listener={{}}
				/>
			</FadeContainer>
		{/each}
	{/if}
</Container>