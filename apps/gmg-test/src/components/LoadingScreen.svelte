<script lang="ts">
	import { Container, Sprite } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';

	import { getContext } from '../game/context';
	import PressToContinue from './PressToContinue.svelte';
	import TransitionAnimation from './TransitionAnimation.svelte';

	type Props = {
		onloaded: () => void;
	};

	const { onloaded } = $props() as Props;
	const context = getContext();

	let loadingType = $state<'start' | 'transition'>('start');

	let sizeLayout = $derived.by(() => context.stateGameSizeLayout.sizeLayout());
</script>

<!-- logo and loading progress -->
<FadeContainer show={loadingType === 'start'}>
			{#if !context.stateApp.loaded}
			 <Container scale={sizeLayout.scale} x={sizeLayout.x} y={sizeLayout.y + sizeLayout.height * 0.3} >
				<LoadingProgress width={500} height={90}>
					{#snippet background(sizes)}
						<Sprite key="progressBarBackground.png" {...sizes} />
					{/snippet}
					{#snippet progress(sizes)}
						<Sprite key="progressBar.png" {...sizes} />
					{/snippet}
					{#snippet frame(sizes)}
						<Sprite key="progressBarFrame.png" {...sizes} />
					{/snippet}
				</LoadingProgress>
			 </Container>
			{/if}
</FadeContainer>

<!-- press to continue -->
<FadeContainer show={loadingType === 'start' && context.stateApp.loaded}>
	<PressToContinue scale={sizeLayout.scale} x={sizeLayout.x} y={sizeLayout.y + sizeLayout.height * 0.42} onpress={() => (loadingType = 'transition')} />
</FadeContainer>

<!-- transition between the loading screen and the game -->
<FadeContainer show={loadingType === 'transition'}>
	<TransitionAnimation oncomplete={onloaded} />
</FadeContainer>
