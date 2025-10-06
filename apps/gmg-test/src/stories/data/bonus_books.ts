export default [
	{
		id: 1,
		payoutMultiplier: 16.6,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{ name: 'H3' },
						{ name: 'S', scatter: true },
						{ name: 'L5' },
						{ name: 'L3' },
						{ name: 'L5' },
					],
					[{ name: 'H4' }, { name: 'H3' }, { name: 'L3' }, { name: 'H4' }, { name: 'H1' }],
					[
						{ name: 'L2' },
						{ name: 'S', scatter: true },
						{ name: 'L3' },
						{ name: 'H2' },
						{ name: 'L4' },
					],
					[{ name: 'H3' }, { name: 'L2' }, { name: 'H4' }, { name: 'L1' }, { name: 'H4' }],
					[
						{ name: 'H3' },
						{ name: 'L5' },
						{ name: 'L4' },
						{ name: 'S', scatter: true },
						{ name: 'L3' },
					],
				],
				paddingPositions: [9, 137, 38, 92, 70],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 1, 2],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 30,
				wins: [
					{
						symbol: 'L3',
						kind: 3,
						win: 30,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 11,
							multiplier: 1,
							winWithoutMult: 30,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 2,
				type: 'setWin',
				amount: 30,
				winLevel: 2,
			},
			{
				index: 3,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 4,
				type: 'freeSpinTrigger',
				totalFs: 8,
				positions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 5,
				type: 'updateFreeSpin',
				amount: 0,
				total: 8,
			},
			{
				index: 6,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [44, 27, 67, 54, 6],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 7,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 8,
				type: 'updateFreeSpin',
				amount: 1,
				total: 8,
			},
			{
				index: 9,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [66, 204, 69, 49, 42],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
				],
			},
			{
				index: 10,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 11,
				type: 'updateFreeSpin',
				amount: 2,
				total: 8,
			},
			{
				index: 12,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 1,
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 1,
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 1,
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [160, 187, 95, 22, 155],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 4,
						row: 1,
					},
				],
			},
			{
				index: 13,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L2',
						kind: 3,
						win: 30,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 3,
							multiplier: 1,
							winWithoutMult: 30,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
					{
						symbol: 'L2',
						kind: 3,
						win: 30,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 19,
							multiplier: 1,
							winWithoutMult: 30,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 14,
				type: 'setWin',
				amount: 60,
				winLevel: 2,
			},
			{
				index: 15,
				type: 'setTotalWin',
				amount: 90,
			},
			{
				index: 16,
				type: 'updateFreeSpin',
				amount: 3,
				total: 8,
			},
			{
				index: 17,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [99, 129, 63, 45, 63],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 18,
				type: 'winInfo',
				totalWin: 70,
				wins: [
					{
						symbol: 'L4',
						kind: 3,
						win: 20,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 1,
							multiplier: 1,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
					{
						symbol: 'L4',
						kind: 4,
						win: 50,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 2,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 6,
							multiplier: 1,
							winWithoutMult: 50,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 19,
				type: 'setWin',
				amount: 70,
				winLevel: 2,
			},
			{
				index: 20,
				type: 'setTotalWin',
				amount: 160,
			},
			{
				index: 21,
				type: 'updateFreeSpin',
				amount: 4,
				total: 8,
			},
			{
				index: 22,
				type: 'reveal',
				board: [
					[
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [22, 140, 76, 1, 74],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
				],
			},
			{
				index: 23,
				type: 'setTotalWin',
				amount: 160,
			},
			{
				index: 24,
				type: 'updateFreeSpin',
				amount: 5,
				total: 8,
			},
			{
				index: 25,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [79, 195, 130, 49, 105],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 26,
				type: 'winInfo',
				totalWin: 1500,
				wins: [
					{
						symbol: 'H1',
						kind: 3,
						win: 1500,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 6,
							multiplier: 3,
							winWithoutMult: 500,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
				],
			},
			{
				index: 27,
				type: 'setWin',
				amount: 1500,
				winLevel: 6,
			},
			{
				index: 28,
				type: 'setTotalWin',
				amount: 1660,
			},
			{
				index: 29,
				type: 'updateFreeSpin',
				amount: 6,
				total: 8,
			},
			{
				index: 30,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'L5',
						},
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [115, 41, 59, 78, 66],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 4,
						row: 1,
					},
				],
			},
			{
				index: 31,
				type: 'setTotalWin',
				amount: 1660,
			},
			{
				index: 32,
				type: 'updateFreeSpin',
				amount: 7,
				total: 8,
			},
			{
				index: 33,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [11, 20, 11, 118, 160],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
				walkingWilds: [
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 34,
				type: 'setTotalWin',
				amount: 1660,
			},
			{
				index: 35,
				type: 'freeSpinEnd',
				amount: 1630,
				winLevel: 4,
			},
			{
				index: 36,
				type: 'finalWin',
				amount: 1660,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.3,
		freeGameWins: 16.3,
	},
];