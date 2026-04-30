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

## Android Studio: `Error: Module not specified`

That specific Android Studio error appears when you create an **Android App** run configuration for this repo before a native Android module exists.

This project is an **Expo managed app**, so use one of these flows:

1. **Recommended (no Android Studio module required)**
   - Run `npm run android` from the project root.
   - Expo will generate/run the native project for you.

2. **If you want to run from Android Studio**
   - First run `npx expo prebuild --platform android` (or `npm run android` once).
   - Then open the generated `android/` folder in Android Studio.
   - Select module `app` in Run/Debug Configurations (not `<no module>`).

If you stay in the Expo-managed workflow, you usually do **not** need an Android App configuration in Android Studio at all.
