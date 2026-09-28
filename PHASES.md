# Smart Expiry & Warranty Vault — phased build

## Phase 1 — Foundation preview (current)
- Expo SDK 54 + TypeScript + NativeWind dark glassmorphism shell
- Vault Home dashboard with urgency cards, local sample records, search and categories
- Alerts calendar, analytics, settings, add-record and detail preview routes
- Asset prompt handoff in `pending-assets/`

## Phase 2 — Offline engine
- Replace seed records with `expo-sqlite` schema from the guide
- Add AsyncStorage settings persistence and local file attachment paths
- Integrate camera/gallery capture and on-device ML Kit OCR parser
- Schedule 30d / 7d / 1d / day-of local notifications

## Phase 3 — Security and migration
- Biometric lock with PIN fallback
- Encrypted JSON + image ZIP backup and restore
- Full edit, renew, delete, snooze, and notification history flows

## Phase 4 — Production release
- Native AdMob placements, premium export entitlement, generated PNG/WebP/Lottie assets
- Android/iOS build profiles, store metadata, QA on physical devices
- APK/AAB/IPA release builds
