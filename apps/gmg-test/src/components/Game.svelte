<script lang="ts">
	import { onMount } from 'svelte';
	import { EnablePixiExtension } from 'components-pixi';
	import { App } from 'pixi-svelte';
	import { stateModal } from 'state-shared';
	import { UI, UiGameName } from 'components-ui-pixi';
	import { GameVersion, Modals } from 'components-ui-html';
	import { getContext } from '../game/context';
	import EnableSound from './EnableSound.svelte';
	import EnableGameActor from './EnableGameActor.svelte';
	import Sound from './Sound.svelte';
	import Background from './Background.svelte';
	import LoadingScreen from './LoadingScreen.svelte';
	import Board from './Board.svelte';
	import Anticipations from './Anticipations.svelte';
	import Win from './Win.svelte';
	import FreeSpinIntro from './FreeSpinIntro.svelte';
	import FreeSpinCounter from './FreeSpinCounter.svelte';
	import FreeSpinOutro from './FreeSpinOutro.svelte';
	import SymbolWalkingWild from './SymbolWalkingWild.svelte';

	const context = getContext();

	onMount(() => (context.stateLayout.showLoadingScreen = true));

	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
	});
</script>

<App>
	<EnableSound />
	<EnableGameActor />
	<EnablePixiExtension />

	<Background />

	{#if context.stateLayout.showLoadingScreen}
		<LoadingScreen onloaded={() => {
			context.stateLayout.showLoadingScreen = false;
		}} />
	{:else}
		<Sound />

		<Board />
		<Anticipations />
		<SymbolWalkingWild />

		<UI>
			{#snippet gameName()}
				<UiGameName name="LINES GAME" />
			{/snippet}
			{#snippet logo()}
				<!-- Logo placeholder -->
			{/snippet}
		</UI>
		
		<Win />
		<FreeSpinIntro />
		{#if !context.stateGameSizeLayout.sizeLayout().isPortrait}
			<FreeSpinCounter />
		{/if}
		<FreeSpinOutro />
	{/if}
</App>

<Modals>
	{#snippet version()}
		<GameVersion version="0.0.0" />
	{/snippet}
</Modals>
