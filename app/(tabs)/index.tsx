import { MaterialIcons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { VaultCard } from '@/components/vault-card';
import { categories, daysUntil, seedVaultItems, type VaultCategory } from '@/lib/vault-data';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<VaultCategory>('All Items');
  const visibleItems = useMemo(() => seedVaultItems.filter((item) => {
    const matchesCategory = category === 'All Items' || item.category === category;
    const haystack = `${item.title} ${item.merchant} ${item.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [category, query]);
  const expiringSoon = seedVaultItems.filter((item) => daysUntil(item.expiry) <= 30 && daysUntil(item.expiry) >= 0).length;
  const protectedValue = seedVaultItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <ScreenContainer className="px-5" containerClassName="bg-background">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 34 }}>
        <View className="flex-row items-center justify-between pb-5 pt-3">
          <View>
            <Text className="text-xs font-semibold uppercase tracking-[2px] text-indigo">PRIVATE VAULT</Text>
            <Text className="mt-1 text-[28px] font-bold leading-9 text-foreground">Your documents,</Text>
            <Text className="text-[28px] font-bold leading-9 text-indigo">protected.</Text>
          </View>
          <Pressable onPress={() => router.push('/settings')} style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
            <View className="h-11 w-11 items-center justify-center rounded-full border border-border bg-surface"><MaterialIcons name="shield" size={21} color="#818cf8" /></View>
          </Pressable>
        </View>

        <View className="mb-4 flex-row gap-3">
          <View className="flex-1 rounded-2xl border border-warning/30 bg-warning/10 p-4">
            <Text className="text-xs font-semibold uppercase text-warning">Expiring soon</Text>
            <Text className="mt-2 text-3xl font-bold text-foreground">{expiringSoon}</Text>
            <Text className="mt-1 text-xs text-muted">within 30 days</Text>
          </View>
          <View className="flex-1 rounded-2xl border border-success/30 bg-success/10 p-4">
            <Text className="text-xs font-semibold uppercase text-success">Protected value</Text>
            <Text className="mt-2 text-3xl font-bold text-foreground">${protectedValue.toLocaleString()}</Text>
            <Text className="mt-1 text-xs text-muted">active warranties</Text>
          </View>
        </View>

        <View className="mb-4 flex-row items-center rounded-2xl border border-border bg-surface px-4">
          <MaterialIcons name="search" size={20} color="#94a3b8" />
          <TextInput value={query} onChangeText={setQuery} placeholder="Search your vault" placeholderTextColor="#64748b" className="h-12 flex-1 px-3 text-sm text-foreground" />
          <MaterialIcons name="tune" size={19} color="#818cf8" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
          <View className="flex-row gap-2">
            {categories.map((item) => <Pressable key={item} onPress={() => setCategory(item)} style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}>
              <View className="rounded-full border px-4 py-2" style={{ borderColor: category === item ? '#6366f1' : '#23314f', backgroundColor: category === item ? '#6366f120' : '#131b2e' }}>
                <Text className="text-xs font-semibold" style={{ color: category === item ? '#a5b4fc' : '#94a3b8' }}>{item}</Text>
              </View>
            </Pressable>)}
          </View>
        </ScrollView>

        <View className="mb-3 flex-row items-center justify-between"><Text className="text-lg font-bold text-foreground">Vault inventory</Text><Text className="text-xs text-muted">{visibleItems.length} records</Text></View>
        {visibleItems.map((item) => <VaultCard key={item.id} item={item} onPress={() => router.push({ pathname: '/item/[id]', params: { id: item.id } })} />)}
        {visibleItems.length === 0 && <View className="items-center rounded-2xl border border-dashed border-border px-6 py-10"><MaterialIcons name="inventory-2" size={34} color="#64748b" /><Text className="mt-3 font-semibold text-foreground">No matching records</Text><Text className="mt-1 text-center text-sm text-muted">Try another search or category.</Text></View>}

        <Pressable onPress={() => router.push('/add')} style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] })}>
          <View className="mt-5 flex-row items-center justify-center rounded-2xl bg-indigo px-5 py-4"><MaterialIcons name="add-a-photo" size={20} color="#ffffff" /><Text className="ml-2 font-bold text-white">Add document or warranty</Text></View>
        </Pressable>
      </ScrollView>
    </ScreenContainer>
  );
}
