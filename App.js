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

const actionCards = [
  {
    key: 'footings',
    title: 'Footings',
    icon: <MaterialCommunityIcons name="office-building" size={30} color="#e4f5f8" />
  },
  {
    key: 'columns',
    title: 'Columns',
    icon: <MaterialCommunityIcons name="view-column" size={30} color="#e4f5f8" />
  }
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.hamburgerButton}
          accessibilityRole="button"
          accessibilityLabel={isSidebarOpen ? 'Close sidebar menu' : 'Open sidebar menu'}
          onPress={() => setIsSidebarOpen((prev) => !prev)}
        >
          <Ionicons name={isSidebarOpen ? 'close' : 'menu'} size={30} color="#0f4c5a" />
        </TouchableOpacity>

        <Text style={styles.headerBrand}>MATRITRACK</Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.pageTitle}>Dashboard</Text>

        <View style={styles.cardsGrid}>
          {actionCards.map((card) => (
            <TouchableOpacity key={card.key} style={styles.actionCard} accessibilityRole="button">
              <View style={styles.cardIconWrap}>{card.icon}</View>
              <Text style={styles.actionCardTitle}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

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
  header: {
    marginTop: 10,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  headerBrand: {
    color: '#0f4c5a',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.8
  },
  hamburgerButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#113440',
    marginBottom: 16
  },
  cardsGrid: {
    gap: 12
  },
  actionCard: {
    backgroundColor: '#0f4c5a',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  cardIconWrap: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(228, 245, 248, 0.18)'
  },
  actionCardTitle: {
    color: '#e4f5f8',
    fontSize: 18,
    fontWeight: '700'
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
