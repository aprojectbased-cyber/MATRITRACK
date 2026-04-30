# MatriTrack Mobile (Expo)

Cross-platform starter app (iOS + Android) matching your provided home-screen concept.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm run start
   ```
3. Open:
   - Android emulator/device: `a`
   - iOS simulator/device (macOS): `i`

## Current screen

- Header with menu icon and **MATRITRACK** title.
- Two action cards: **Footings** and **Columns**.


## Expo Go compatibility

Expo Go generally supports only the most recent SDK. This project is pinned to **Expo SDK 54** so it can open in current Expo Go builds.

If you previously installed dependencies for SDK 53, reinstall cleanly:

```bash
rm -rf node_modules package-lock.json
npm install
npx expo start -c
```

If you hit `Unable to resolve "expo-asset" from "expo-font/.../FontLoader.js"`, ensure dependencies are reinstalled after this update because `expo-asset` and `expo-font` are now explicitly declared.
