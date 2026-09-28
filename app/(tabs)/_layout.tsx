import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useColors } from '@/hooks/use-colors';

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === 'web' ? 12 : Math.max(insets.bottom, 8);
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.muted, tabBarStyle: { paddingTop: 8, paddingBottom: bottomPadding, height: 56 + bottomPadding, backgroundColor: colors.background, borderTopColor: colors.border, borderTopWidth: 0.5 } }}>
    <Tabs.Screen name="index" options={{ title: 'Vault', tabBarIcon: ({ color }) => <MaterialIcons name="shield" size={23} color={color} /> }} />
    <Tabs.Screen name="calendar" options={{ title: 'Alerts', tabBarIcon: ({ color }) => <MaterialIcons name="event" size={23} color={color} /> }} />
    <Tabs.Screen name="analytics" options={{ title: 'Insights', tabBarIcon: ({ color }) => <MaterialIcons name="auto-graph" size={23} color={color} /> }} />
    <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color }) => <MaterialIcons name="tune" size={23} color={color} /> }} />
  </Tabs>;
}
