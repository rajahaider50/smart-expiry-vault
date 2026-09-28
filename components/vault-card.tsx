import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { daysUntil, statusFor, type VaultItem } from '@/lib/vault-data';

export function VaultCard({ item, onPress }: { item: VaultItem; onPress?: () => void }) {
  const status = statusFor(daysUntil(item.expiry));
  return (
    <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.72 : 1 })}>
      <View className="mb-3 flex-row items-center rounded-2xl border border-border bg-surface px-4 py-4">
        <View className="mr-3 h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${item.accent}20` }}>
          <MaterialIcons name={item.icon as any} size={24} color={item.accent} />
        </View>
        <View className="min-w-0 flex-1">
          <Text className="text-base font-semibold text-foreground" numberOfLines={1}>{item.title}</Text>
          <Text className="mt-1 text-xs text-muted">{item.merchant} · {item.category}</Text>
        </View>
        <View className="items-end">
          <View className="rounded-full px-2.5 py-1" style={{ backgroundColor: `${status.color}20` }}>
            <Text className="text-[11px] font-semibold" style={{ color: status.color }}>{status.label}</Text>
          </View>
          <Text className="mt-2 text-xs text-muted">{item.value ? `$${item.value.toLocaleString()}` : 'No value'}</Text>
        </View>
      </View>
    </Pressable>
  );
}
