<script lang="ts">
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		x?: number;
		y?: number;
		scale?: number;
		onpress: () => void;
	};

	const props: Props = $props();
</script>

<Sprite
	key="pressToContinueText_{stateUrlDerived.lang()}.png"
	width={800}
	height={134}
	anchor={{ x: 0.5, y: 0.5 }}
	scale={props.scale}
	x={props.x} y={props.y}
/>
<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
<OnPressFullScreen onpress={() => props.onpress()} />
