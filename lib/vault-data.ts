export type VaultCategory = 'All Items' | 'Documents' | 'Electronics' | 'Vehicles' | 'Medicines' | 'Insurance';

export type VaultItem = {
  id: string;
  title: string;
  category: Exclude<VaultCategory, 'All Items'>;
  merchant: string;
  expiry: string;
  value: number;
  icon: string;
  accent: string;
};

export const categories: VaultCategory[] = ['All Items', 'Documents', 'Electronics', 'Vehicles', 'Medicines', 'Insurance'];

export const seedVaultItems: VaultItem[] = [
  { id: 'sony-bravia', title: 'Sony Bravia Warranty', category: 'Electronics', merchant: 'Sony Store', expiry: '2026-10-12', value: 1299, icon: 'tv', accent: '#6366f1' },
  { id: 'car-token', title: 'Vehicle Token Tax', category: 'Vehicles', merchant: 'Excise Department', expiry: '2026-11-04', value: 420, icon: 'directions-car', accent: '#f59e0b' },
  { id: 'passport', title: 'Passport Renewal', category: 'Documents', merchant: 'Government ID', expiry: '2027-02-18', value: 0, icon: 'badge', accent: '#818cf8' },
  { id: 'vitamins', title: 'Vitamin D Prescription', category: 'Medicines', merchant: 'City Pharmacy', expiry: '2026-10-05', value: 86, icon: 'medication', accent: '#10b981' },
];

export function daysUntil(date: string) {
  const now = new Date('2026-09-28T12:00:00');
  const target = new Date(`${date}T09:00:00`);
  return Math.ceil((target.getTime() - now.getTime()) / 86400000);
}

export function statusFor(days: number) {
  if (days < 0) return { label: 'Expired', color: '#ef4444' };
  if (days <= 30) return { label: `${days}d left`, color: '#f59e0b' };
  return { label: `${days}d left`, color: '#10b981' };
}
