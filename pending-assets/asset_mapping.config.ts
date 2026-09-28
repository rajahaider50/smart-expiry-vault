import type { ImageSourcePropType } from 'react-native';

/**
 * Phase 1 asset registry. Generated PNG/WEBP files should be added under
 * assets/images using the asset_id filenames from 01_ai_images.json.
 * Until then, the template icon remains the safe fallback.
 */
const registry: Record<string, ImageSourcePropType> = {
  img_app_logo_512: require('../assets/images/icon.png'),
  img_splash_bg: require('../assets/images/splash-icon.png'),
  img_empty_vault_state: require('../assets/images/partial-react-logo.png'),
};

export function getVaultAsset(assetId: string): ImageSourcePropType {
  return registry[assetId] ?? registry.img_empty_vault_state;
}

export function hasVaultAsset(assetId: string): boolean {
  return Boolean(registry[assetId]);
}
