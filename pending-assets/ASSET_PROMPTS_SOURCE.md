# SMART EXPIRY & WARRANTY VAULT — 03: ASSET PIPELINE & AI PROMPTS

## 1. Asset Pipeline Architecture & Protocol

To maintain a zero-friction, modular asset pipeline during production, all graphical elements, illustrations, category badges, app icons, and background textures are decoupled from core codebase logic. 

### 1.1 Directory Structure Protocol
```text
project-root/
├── assets/
│   ├── images/              <-- Rendered production PNG/WEBP assets
│   ├── vectors/             <-- SVG icons and UI badges
│   └── lottie/              <-- Dynamic JSON animation files
└── pending-assets/
    ├── 01_ai_images.json    <-- MVP Phase 1 AI Prompt Specification
    ├── 02_ai_images.json    <-- Incremental Phase 2 Prompts
    ├── logo_and_splash.json <-- App Icon & Splash Video Prompts
    └── asset_mapping.config.ts <-- Dynamic Asset Resolver Utility
```

---

## 2. Complete Asset Prompts JSON (`pending-assets/01_ai_images.json`)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "phase": "01_MVP_RELEASE",
  "generated_date": "2026-09-28",
  "total_items": 25,
  "items": [
    {
      "asset_id": "img_app_logo_512",
      "target_screen": "Google Play Store / iOS App Store",
      "usage": "Master App Icon",
      "dimensions": "512x512",
      "format": "PNG",
      "prompt": "Modern geometric app logo featuring a floating glowing neon-cyan vault shield lock intertwined with a subtle sandglass symbol, isometric 3D claymorphism finish, matte dark slate purple background, minimalist, ultra-clean vector design, 8k resolution --sq 1:1"
    },
    {
      "asset_id": "img_splash_bg",
      "target_screen": "Screen_01_SplashOnboarding",
      "usage": "Full background glassmorphic wallpaper",
      "dimensions": "1080x2400",
      "format": "WEBP",
      "prompt": "Cybernetic dark ambient wallpaper with subtle glowing dark indigo radial gradients, translucent glass geometric overlays, deep slate background #090d16, matte finish, futuristic UI background concept, 8k --ar 9:20"
    },
    {
      "asset_id": "img_onboarding_privacy",
      "target_screen": "Screen_01_SplashOnboarding (Slide 1)",
      "usage": "Illustration for Offline Privacy Guarantee",
      "dimensions": "800x800",
      "format": "WEBP",
      "prompt": "3D claymorphic icon of an encrypted metal vault box with an offline WiFi diagonal shield logo, glowing emerald lock accents, frosted dark glass platform, studio lighting, matte dark theme --ar 1:1"
    },
    {
      "asset_id": "img_onboarding_alerts",
      "target_screen": "Screen_01_SplashOnboarding (Slide 2)",
      "usage": "Illustration for Smart Expiry Alerts",
      "dimensions": "800x800",
      "format": "WEBP",
      "prompt": "3D render of a futuristic glass calendar flip-clock with glowing amber warning bell icons hovering nearby, dark mode translucent aesthetic, high detail --ar 1:1"
    },
    {
      "asset_id": "img_onboarding_vault",
      "target_screen": "Screen_01_SplashOnboarding (Slide 3)",
      "usage": "Illustration for Digital Warranty Organization",
      "dimensions": "800x800",
      "format": "WEBP",
      "prompt": "3D clean floating folder stack containing scanned invoice receipts, passport document badges, and warranty tags with glowing indigo outlines, slate dark theme --ar 1:1"
    },
    {
      "asset_id": "img_empty_vault_state",
      "target_screen": "Screen_02_VaultHome",
      "usage": "Placeholder graphic when vault is empty",
      "dimensions": "600x600",
      "format": "WEBP",
      "prompt": "Minimalist 3D translucent open safe box floating above a dark soft circle, light cyan reflection inside empty space, modern UI empty state graphic --ar 1:1"
    },
    {
      "asset_id": "ic_cat_documents",
      "target_screen": "Screen_02_VaultHome / Screen_03_AddScan",
      "usage": "Category icon for Passports, Visas, IDs",
      "dimensions": "256x256",
      "format": "PNG",
      "prompt": "3D claymorphic official passport document icon with a gold emblem stamp, neon indigo background accent, rounded square container --sq 1:1"
    },
    {
      "asset_id": "ic_cat_electronics",
      "target_screen": "Screen_02_VaultHome / Screen_03_AddScan",
      "usage": "Category icon for Appliances & Tech Gadgets",
      "dimensions": "256x256",
      "format": "PNG",
      "prompt": "3D icon of futuristic sleek headphones and a smart tablet device, electric blue highlights, dark translucent pill button frame --sq 1:1"
    },
    {
      "asset_id": "ic_cat_vehicles",
      "target_screen": "Screen_02_VaultHome / Screen_03_AddScan",
      "usage": "Category icon for Vehicle Registration & Tax",
      "dimensions": "256x256",
      "format": "PNG",
      "prompt": "3D sleek sports car key remote control paired with a tax token stamp badge, glowing amber light detail, dark aesthetic --sq 1:1"
    },
    {
      "asset_id": "ic_cat_medicines",
      "target_screen": "Screen_02_VaultHome / Screen_03_AddScan",
      "usage": "Category icon for Prescriptions & Medicines",
      "dimensions": "256x256",
      "format": "PNG",
      "prompt": "3D medical pill bottle with glowing capsule pills floating nearby, vibrant teal color theme, glossy finish, translucent box --sq 1:1"
    },
    {
      "asset_id": "ic_cat_insurance",
      "target_screen": "Screen_02_VaultHome / Screen_03_AddScan",
      "usage": "Category icon for Health & Property Insurance",
      "dimensions": "256x256",
      "format": "PNG",
      "prompt": "3D glass shield with a central heart rate heartbeat line, glowing purple aura, clean luxury UI widget --sq 1:1"
    },
    {
      "asset_id": "img_ocr_scan_frame",
      "target_screen": "Screen_03_AddScanItem",
      "usage": "Camera Viewfinder scanner guidance dynamic overlay",
      "dimensions": "1080x1080",
      "format": "PNG",
      "prompt": "Transparent overlay frame with neon-cyan glowing corner brackets, subtle grid scan lines, cybernetic laser focus reticle, vector overlay --sq 1:1"
    },
    {
      "asset_id": "img_ocr_scanning_beam",
      "target_screen": "Screen_03_AddScanItem",
      "usage": "Animated horizontal scanning beam element",
      "dimensions": "1080x200",
      "format": "PNG",
      "prompt": "Horizontal cyan-to-indigo gradient laser line beam with soft glowing bloom effect on completely transparent background --ar 5:1"
    },
    {
      "asset_id": "badge_expiry_critical",
      "target_screen": "Screen_04_ItemDetail",
      "usage": "High priority warning visual badge (<7 Days)",
      "dimensions": "300x300",
      "format": "PNG",
      "prompt": "Glossy 3D pulsing red alert exclamation crest with metallic border finish, dark glass backdrop --sq 1:1"
    },
    {
      "asset_id": "badge_expiry_warning",
      "target_screen": "Screen_04_ItemDetail",
      "usage": "Moderate warning visual badge (<30 Days)",
      "dimensions": "300x300",
      "format": "PNG",
      "prompt": "3D warm amber hourglass timer icon with soft ambient light, studio lighting, vector claymorphic --sq 1:1"
    },
    {
      "asset_id": "badge_expiry_valid",
      "target_screen": "Screen_04_ItemDetail",
      "usage": "Protected active warranty status badge",
      "dimensions": "300x300",
      "format": "PNG",
      "prompt": "3D emerald green checkmark shield icon with metallic silver edges, bright glow --sq 1:1"
    },
    {
      "asset_id": "img_analytics_savings_hero",
      "target_screen": "Screen_06_Analytics",
      "usage": "Banner background illustration for protected value",
      "dimensions": "900x450",
      "format": "WEBP",
      "prompt": "3D stylized vault door slightly ajar revealing floating glowing gold currency symbols and warranty certificates, dark cyan gradient backlighting --ar 2:1"
    },
    {
      "asset_id": "img_backup_zip_box",
      "target_screen": "Screen_07_Settings",
      "usage": "Encrypted Export graphic element",
      "dimensions": "500x500",
      "format": "WEBP",
      "prompt": "3D encrypted zip container file cube wrapped in a physical golden glowing padlock chain, cybernetic slate theme --sq 1:1"
    },
    {
      "asset_id": "img_biometric_lock_active",
      "target_screen": "Screen_07_Settings",
      "usage": "FaceID / Fingerprint security status card",
      "dimensions": "400x400",
      "format": "WEBP",
      "prompt": "3D floating human fingerprint scanner pad emitting electric blue glowing light waves, dark glass disc surface --sq 1:1"
    },
    {
      "asset_id": "ic_notif_push_header",
      "target_screen": "Screen_08_NotificationCenter",
      "usage": "Native Push Notification small header status icon",
      "dimensions": "96x96",
      "format": "PNG",
      "prompt": "Flat solid white minimalist shield icon outline on transparent background --sq 1:1"
    },
    {
      "asset_id": "img_premium_crown",
      "target_screen": "Global Purchase Drawer",
      "usage": "Ad-free & Unlimited Export monetization badge",
      "dimensions": "400x400",
      "format": "WEBP",
      "prompt": "Luxury 3D royal crown floating above a dark velvet glass pedestal, glowing diamond purple accents --sq 1:1"
    },
    {
      "asset_id": "img_placeholder_receipt",
      "target_screen": "Screen_04_ItemDetail",
      "usage": "Fallback sample receipt image when preview is unreadable",
      "dimensions": "800x1200",
      "format": "WEBP",
      "prompt": "Stylized store purchase bill receipt on dark table surface with glowing total price highlight and barcode --ar 2:3"
    },
    {
      "asset_id": "ic_calendar_sync",
      "target_screen": "Screen_05_AlertsCalendar",
      "usage": "Calendar timeline synchronization button icon",
      "dimensions": "200x200",
      "format": "PNG",
      "prompt": "3D spinning refresh arrow wrapped around a miniature calendar grid, cyan neon color --sq 1:1"
    },
    {
      "asset_id": "img_snooze_bell",
      "target_screen": "Screen_05_AlertsCalendar",
      "usage": "Action dialog graphic for snoozing alert",
      "dimensions": "300x300",
      "format": "PNG",
      "prompt": "3D sleeping bell icon with Zzz floating particles, soft amber glow --sq 1:1"
    },
    {
      "asset_id": "img_admob_reward_gift",
      "target_screen": "Screen_07_Settings",
      "usage": "Rewarded Ad completion reward unlock visual",
      "dimensions": "400x400",
      "format": "WEBP",
      "prompt": "3D glowing mystery gift box bursting open with light rays and golden key icons --sq 1:1"
    }
  ]
}
```

---

## 3. App Logo & Animated Splash Screen Video Prompts

### 3.1 App Icon Design Specification
*   **Concept:** "Cybernetic Shield Vault"
*   **DALL-E 3 / Midjourney Prompt:**
    ```text
    App icon vector graphic, a modern geometric vault lock integrated with a sandglass expiry emblem, glowing neon purple and cyan accents on deep matte slate background, 3D claymorphic style, crisp lines, app store badge ready --v 6.0 --style raw
    ```

### 3.2 Animated Splash Screen Video / Motion Prompt (Runway Gen-2 / Sora / Lottie)
*   **Duration:** 2.5 Seconds (Looping)
*   **Video Generation Prompt:**
    ```text
    Cinematic 3D animation of a matte dark metallic vault shield closing smoothly. Once locked, a glowing neon cyan pulse spreads outward in a circular wave, highlighting a digital clock ticking down. High-tech sci-fi UI atmosphere, 60fps, smooth easing.
    ```

---

## 4. Asset Integration Loader Code (`assetLoader.ts`)

This TypeScript utility dynamically handles asset resolution, providing instantaneous local static fallback if an AI-generated image asset is missing during build time.

```typescript
// src/utils/assetLoader.ts

import { ImageSourcePropType } from 'react-native';

export interface AssetMapItem {
  asset_id: string;
  localPath: ImageSourcePropType;
  fallbackColor: string;
}

// Production Static Asset Mapping
const ASSET_REGISTRY: Record<string, ImageSourcePropType> = {
  img_splash_bg: require('../../assets/images/img_splash_bg.webp'),
  img_app_logo_512: require('../../assets/images/img_app_logo_512.png'),
  img_empty_vault_state: require('../../assets/images/img_empty_vault_state.webp'),
  ic_cat_documents: require('../../assets/images/ic_cat_documents.png'),
  ic_cat_electronics: require('../../assets/images/ic_cat_electronics.png'),
  ic_cat_vehicles: require('../../assets/images/ic_cat_vehicles.png'),
  ic_cat_medicines: require('../../assets/images/ic_cat_medicines.png'),
  ic_cat_insurance: require('../../assets/images/ic_cat_insurance.png'),
  badge_expiry_critical: require('../../assets/images/badge_expiry_critical.png'),
  badge_expiry_warning: require('../../assets/images/badge_expiry_warning.png'),
  badge_expiry_valid: require('../../assets/images/badge_expiry_valid.png'),
};

// Fallback placeholding configuration
const DEFAULT_FALLBACK_IMAGE = require('../../assets/images/img_placeholder_receipt.webp');

/**
 * Resolves local image asset by asset_id safely with fallbacks.
 * @param assetId Unique identifier key from pending-assets JSON
 */
export const getVaultAsset = (assetId: string): ImageSourcePropType => {
  if (ASSET_REGISTRY[assetId]) {
    return ASSET_REGISTRY[assetId];
  }
  console.warn(`[AssetLoader] Asset ID "${assetId}" not found in local registry. Using fallback.`);
  return DEFAULT_FALLBACK_IMAGE;
};

/**
 * Validates availability of all core category icons.
 */
export const validateCategoryAssets = (): boolean => {
  const coreCategories = [
    'ic_cat_documents',
    'ic_cat_electronics',
    'ic_cat_vehicles',
    'ic_cat_medicines',
    'ic_cat_insurance'
  ];
  return coreCategories.every((catId) => Boolean(ASSET_REGISTRY[catId]));
};
```

```text
[ASSET PIPELINE AND AI PROMPTS SPECIFICATION END]
```