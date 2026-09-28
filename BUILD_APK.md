# Android APK handoff

The project is an Expo managed mobile app. Phase 1 has been verified in the WebDev mobile preview and pushed to the public GitHub repository.

## Recommended build

1. Create an Expo/EAS account and generate an `EXPO_TOKEN`.
2. Add `EXPO_TOKEN` as a repository secret in GitHub.
3. Open **Actions → Build Android APK → Run workflow**.
4. The workflow uses `eas.json`'s `preview` profile and produces an installable `.apk`.

The same profile can be run locally with `eas build --platform android --profile preview`. Production uses the `production` profile and emits an Android App Bundle.

## Asset handoff

Generated PNG/WebP/Lottie files should be placed in `assets/images`, `assets/vectors`, or `assets/lottie` using the asset IDs in `pending-assets/01_ai_images.json`. The requested splash animation prompt is in `pending-assets/logo_and_splash.json`. Once assets are added, the next implementation phase will wire them into the asset registry and splash/onboarding flow.
