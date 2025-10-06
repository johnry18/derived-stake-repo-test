<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventFreeSpinOutro =
		| { type: 'freeSpinOutroShow' }
		| { type: 'freeSpinOutroHide' }
		| { type: 'freeSpinOutroCountUp'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Sprite, SpineProvider, SpineTrack, SpineSlot } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';
	import { CanvasSizeRectangle } from 'components-layout';
	import { OnMount } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';

	import { getContext } from '../game/context';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';
	import WinCoins from './WinCoins.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();

	let show = $state(true);
	let animationName = $state<AnimationName>('intro');
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});
	let onCountUpComplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		freeSpinOutroShow: () => (show = true),
		freeSpinOutroHide: async () => (show = false),
		freeSpinOutroCountUp: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show}>
	{#if winLevelData}
		{@const duration = winLevelData.presentDuration}
		{@const isBigWin = winLevelData.type === 'big'}
		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				<OnMount onmount={() => startCountUp()} />

				<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />

				<FreeSpinAnimation>
					{#snippet children()}
						{#if isBigWin}
							<Sprite
								anchor={{ x: 0.5, y: 1.2 }}
								width={500 * 2.2}
								height={156 * 2.2}
								key="freespins_{stateUrlDerived.lang()}.png"
							/>
						{:else}
							<Sprite
								anchor={{ x: 0.5, y: 1.2 }}
								width={500 * 4.5}
								height={80 * 4.5}
								key="winsmall_{stateUrlDerived.lang()}.png"
							/>
						{/if}

						<SpineProvider key="fsOutroNumber" width={200}>
							<SpineTrack
								trackIndex={0}
								{animationName}
								loop={animationName === 'idle'}
								listener={{
									complete: () => (animationName = 'idle'),
								}}
							/>
							<SpineSlot slotName="slot_number">
								<ResponsiveBitmapText
									anchor={0.5}
									style={{
										fontFamily: 'gold',
										fontSize: 200,
									}}
									text={bookEventAmountToCurrencyString(countUpAmount)}
									maxWidth={300}
								/>
							</SpineSlot>
						</SpineProvider>

						<Sprite
							anchor={{ x: 0.5, y: isBigWin ? -3.2 : -2 }}
							width={177 * (isBigWin ? 2.2 : 3)}
							height={42 * (isBigWin ? 2.2 : 3)}
							key="totalwin.png"
						/>
						
				<PressToContinue scale={1.2} x={0} y={520} onpress={() => (countUpCompleted ? oncomplete() : finishCountUp())} />
					{/snippet}
				</FreeSpinAnimation>

				<WinCoins emit={!countUpCompleted} levelAlias={winLevelData?.alias} />

			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>
