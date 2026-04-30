import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const menuItems = [
  { key: 'dashboard', label: 'Dashboard', icon: <Ionicons name="home" size={16} color="#0e2a33" />, active: true },
  { key: 'projects', label: 'Projects', icon: <MaterialIcons name="folder" size={16} color="#0b2028" /> },
  {
    key: 'reports',
    label: 'Reports and Analytics',
    icon: <MaterialCommunityIcons name="chart-areaspline" size={16} color="#0b2028" />
  },
  { key: 'settings', label: 'Settings', icon: <Ionicons name="settings-sharp" size={16} color="#0b2028" /> }
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <TouchableOpacity
        style={styles.hamburgerButton}
        accessibilityRole="button"
        accessibilityLabel={isSidebarOpen ? 'Close sidebar menu' : 'Open sidebar menu'}
        onPress={() => setIsSidebarOpen((prev) => !prev)}
      >
        <Ionicons name={isSidebarOpen ? 'close' : 'menu'} size={30} color="#0f4c5a" />
      </TouchableOpacity>

      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <Text style={styles.brand}>MATRITRACK</Text>

          <View style={styles.menuList}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={[styles.menuItem, item.active && styles.menuItemActive]}
                accessibilityRole="button"
              >
                {item.icon}
                <Text style={[styles.menuText, item.active && styles.menuTextActive]}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.logoutWrap}>
            <TouchableOpacity style={styles.logoutButton} accessibilityRole="button">
              <Ionicons name="power" size={16} color="#0c2530" />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#edf2f4'
  },
  hamburgerButton: {
    marginTop: 10,
    marginLeft: 12,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 270,
    backgroundColor: '#0f4c5a',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    elevation: 8
  },
  brand: {
    color: '#f1f6f8',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1
  },
  menuList: {
    marginTop: 20,
    gap: 8
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 14
  },
  menuItemActive: {
    backgroundColor: '#6eaab2'
  },
  menuText: {
    color: '#f4fbff',
    fontSize: 14,
    fontWeight: '600'
  },
  menuTextActive: {
    color: '#10212a',
    fontWeight: '700'
  },
  logoutWrap: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(216, 239, 244, 0.5)',
    paddingTop: 14
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  logoutText: {
    color: '#e7f4f8',
    fontSize: 15,
    fontWeight: '600'
  }
});
