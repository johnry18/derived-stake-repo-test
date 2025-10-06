# Derived Stake Repo Test

This is a repositiory forked from [Stake Web SDK](https://github.com/StakeEngine/web-sdk). It contains a sample app project using the sdk.

# Installation

- Install pnpm
```
npm install pnpm@10.5.0 -g
```

- Install dependencies
```
pnpm install
```

# Run Sample Project

- Serves the app
```
pnpm run dev --filter=gmg-test
```

- Run stoorybook
```
pnpm run storybook --filter=gmg-test
```

- Build the app
```
pnpm run build --filter=gmg-test
```

# Feature

- Free spin
- Walking wilds

#Context

- Added background size context on app level

# Storybook
- Loading screen
- preSpin
- Base: Random
- Event: reveal, freeSpinTrigger, winInfo
- Bonus: Random

