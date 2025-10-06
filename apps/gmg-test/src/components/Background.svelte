<script lang="ts">
	import { Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { getContext } from '../game/context';

	const context = getContext();

	const isFeatureState = $derived(context.stateGame.gameType === 'freegame');
	const isPortrait = $derived(context.stateGameSizeLayout.sizeLayout().isPortrait);
	const sizeLayout = $derived(context.stateGameSizeLayout.sizeLayout());
	const yPosition = $derived(sizeLayout.isPortrait ? sizeLayout.y +  sizeLayout.height * -0.29 : sizeLayout.y +  sizeLayout.height * -0.37);
</script>

<FadeContainer show={context.stateLayout.showLoadingScreen} duration={0} zIndex={-2}>
	<Sprite 
		visible={isPortrait} 
		key="bg_preloader_portrait" 
		anchor={0.5} 
		{...context.stateGameSizeLayout.sizeLayout()} 
	/>
	<Sprite 
		visible={!isPortrait} 
		key="bg_preloader_landscape" 
		anchor={0.5} 
		{...context.stateGameSizeLayout.sizeLayout()} 
	/>
</FadeContainer>

<FadeContainer show={!context.stateLayout.showLoadingScreen} duration={500} zIndex={-1}>
	<Sprite 
		visible={isPortrait} 
		key="bg_main_portrait" 
		anchor={0.5} 
		{...context.stateGameSizeLayout.sizeLayout()} 
	/>
	<Sprite 
		visible={!isPortrait} 
		key="bg_main_landscape" 
		anchor={0.5} 
		{...context.stateGameSizeLayout.sizeLayout()} 
	/>
</FadeContainer>

<FadeContainer show={!isFeatureState} duration={500} zIndex={-1}>
	<Sprite 
		key="main-logo" 
		anchor={0.5} 
		x={ sizeLayout.x + sizeLayout.width * 0}
		y={ yPosition }
		scale={sizeLayout.scale * 0.95}
	/>
</FadeContainer>

<FadeContainer show={isFeatureState} duration={500} zIndex={-1}>
	<Sprite 
		key="freespin-logo" 
		anchor={0.5} 
		x={ sizeLayout.x + sizeLayout.width * 0}
		y={ yPosition }
		scale={sizeLayout.scale * 0.95}
	/>
</FadeContainer>