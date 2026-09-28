import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { ScreenContainer } from '@/components/screen-container';
import { seedVaultItems } from '@/lib/vault-data';

export default function AnalyticsScreen() {
  const total = seedVaultItems.reduce((sum, item) => sum + item.value, 0);
  const groups = ['Electronics', 'Vehicles', 'Documents', 'Medicines'];
  return <ScreenContainer className="px-5" containerClassName="bg-background"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
    <View className="pb-5 pt-3"><Text className="text-xs font-semibold uppercase tracking-[2px] text-indigo">VAULT INTELLIGENCE</Text><Text className="mt-1 text-3xl font-bold text-foreground">Savings dashboard</Text><Text className="mt-2 text-sm leading-5 text-muted">See what your reminders are helping you protect.</Text></View>
    <View className="overflow-hidden rounded-3xl border border-indigo/40 bg-indigo/20 p-5"><View className="flex-row items-start justify-between"><View><Text className="text-xs font-semibold uppercase tracking-wider text-indigoGlow">TOTAL PROTECTED VALUE</Text><Text className="mt-3 text-4xl font-bold text-foreground">${total.toLocaleString()}</Text><Text className="mt-2 text-sm text-muted">Across {seedVaultItems.length} active records</Text></View><View className="h-12 w-12 items-center justify-center rounded-2xl bg-indigo"><MaterialIcons name="auto-graph" size={24} color="#fff" /></View></View></View>
    <View className="mt-4 flex-row gap-3"><View className="flex-1 rounded-2xl border border-border bg-surface p-4"><Text className="text-xs text-muted">Saved by renewals</Text><Text className="mt-2 text-xl font-bold text-success">$1,240</Text><Text className="mt-1 text-xs text-muted">this year</Text></View><View className="flex-1 rounded-2xl border border-border bg-surface p-4"><Text className="text-xs text-muted">Records monitored</Text><Text className="mt-2 text-xl font-bold text-foreground">{seedVaultItems.length}</Text><Text className="mt-1 text-xs text-muted">offline & private</Text></View></View>
    <Text className="mb-3 mt-7 text-lg font-bold text-foreground">Category allocation</Text>
    {groups.map((group, index) => { const count = seedVaultItems.filter((item) => item.category === group).length; const colors = ['#6366f1', '#f59e0b', '#818cf8', '#10b981']; return <View key={group} className="mb-4"><View className="mb-2 flex-row justify-between"><Text className="text-sm font-semibold text-foreground">{group}</Text><Text className="text-xs text-muted">{count} record{count === 1 ? '' : 's'}</Text></View><View className="h-2 overflow-hidden rounded-full bg-surface"><View className="h-2 rounded-full" style={{ width: `${Math.max(count * 25, 8)}%`, backgroundColor: colors[index] }} /></View></View>; })}
  </ScrollView></ScreenContainer>;
}
