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

## Build in Android Studio (requested flow)

This repo can be built in Android Studio by generating the native Android project first.

1. Generate native Android project:
   ```bash
   npm run android:prebuild
   ```
2. Open the generated `android/` folder in Android Studio.
3. Let Gradle sync finish.
4. Build from Android Studio:
   - **Debug APK:** Build > Build Bundle(s) / APK(s) > Build APK(s)
   - **Release APK/AAB:** Build > Generate Signed Bundle / APK

### CLI alternatives (same native project)

After `android/` exists, you can build with Gradle directly:

```bash
npm run android:debug-apk
npm run android:release-apk
```

## EAS cloud build (optional)

If you also want cloud builds:

```bash
npx eas login
npm run build:apk
npm run build:aab
```

If you get `'eas' is not recognized`, use `npx eas --version` once, then rerun.

The Android package/applicationId is `com.matritrack.mobile` (configured in `app.json`).

## Current screen

- Header with menu icon and **MATRITRACK** title.
- Two action cards: **Footings** and **Columns**.
