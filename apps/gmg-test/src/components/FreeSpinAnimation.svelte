<script lang="ts">
	import type { Snippet } from 'svelte';

	import {
		Container,
		SpineProvider,
		SpineSlot,
		SpineTrack,
	} from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		children: Snippet<[]>;
	};

	const props: Props = $props();

	type AnimationName = 'intro' | 'idle';

	const context = getContext();

	let animationName = $state<AnimationName>('intro');
	
	const sizeLayout = $derived.by(() => context.stateGameSizeLayout.sizeLayout());
</script>

	<Container scale={sizeLayout.scale} x={sizeLayout.x} y={sizeLayout.y} boundsArea={{x:0, y:0, 
			width:sizeLayout.width, height: sizeLayout.height}}
			pivot={{x: sizeLayout.width * 0.5, y: sizeLayout.height * 0.5}}
	>
		<SpineProvider
			key="fsIntro"
			scale={0.45}
			x={sizeLayout.width * 0.5}
			y={sizeLayout.height * 0.5}
		>
			<SpineTrack
				trackIndex={0}
				{animationName}
				loop={animationName === 'idle'}
				listener={{
					complete: () => (animationName = 'idle'),
				}}
			/>
			<SpineSlot slotName="slot_text_placeholder">
				{@render props.children() }
			</SpineSlot>
		</SpineProvider>
	</Container>
