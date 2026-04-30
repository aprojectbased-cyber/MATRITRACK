import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const menuItems = [
  { key: 'dashboard', label: 'Dashboard', icon: 'home' },
  { key: 'projects', label: 'Projects', icon: 'folder' },
  { key: 'reports', label: 'Reports & Analytics', icon: 'chart-areaspline' },
  { key: 'settings', label: 'Settings', icon: 'settings-sharp' }
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
  const [activeTab, setActiveTab] = useState('dashboard');

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
        <Text style={styles.pageTitle}>{menuItems.find((item) => item.key === activeTab)?.label ?? 'Dashboard'}</Text>

        <View style={styles.cardsGrid}>
          {actionCards.map((card) => (
            <TouchableOpacity key={card.key} style={styles.actionCard} accessibilityRole="button">
              <View style={styles.cardIconWrap}>{card.icon}</View>
              <Text style={styles.actionCardTitle}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>


      <View style={styles.bottomNav}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.key;

          return (
            <TouchableOpacity
              key={`bottom-${item.key}`}
              style={styles.bottomNavItem}
              accessibilityRole="button"
              onPress={() => setActiveTab(item.key)}
            >
              {item.key === 'projects' ? (
                <MaterialIcons name={item.icon} size={22} color={isActive ? '#0f4c5a' : '#6d8790'} />
              ) : item.key === 'reports' ? (
                <MaterialCommunityIcons name={item.icon} size={22} color={isActive ? '#0f4c5a' : '#6d8790'} />
              ) : (
                <Ionicons name={item.icon} size={22} color={isActive ? '#0f4c5a' : '#6d8790'} />
              )}
              <Text style={[styles.bottomNavText, isActive && styles.bottomNavTextActive]} numberOfLines={1}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {isSidebarOpen && (
        <View style={styles.sidebarLayer}>
          <Pressable
            style={styles.backdrop}
            accessibilityRole="button"
            accessibilityLabel="Close sidebar menu"
            onPress={() => setIsSidebarOpen(false)}
          />

          <View style={styles.sidebar}>
            <Text style={styles.brand}>MATRITRACK</Text>

            <View style={styles.menuList}>
              {menuItems.map((item) => {
                const isActive = activeTab === item.key;

                return (
                  <TouchableOpacity
                    key={item.key}
                    style={[styles.menuItem, isActive && styles.menuItemActive]}
                    accessibilityRole="button"
                    onPress={() => {
                      setActiveTab(item.key);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {item.key === 'projects' ? (
                      <MaterialIcons name={item.icon} size={20} color={isActive ? '#0e2a33' : '#f4fbff'} />
                    ) : item.key === 'reports' ? (
                      <MaterialCommunityIcons name={item.icon} size={20} color={isActive ? '#0e2a33' : '#f4fbff'} />
                    ) : (
                      <Ionicons name={item.icon} size={20} color={isActive ? '#0e2a33' : '#f4fbff'} />
                    )}
                    <Text style={[styles.menuText, isActive && styles.menuTextActive]}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.logoutWrap}>
              <TouchableOpacity style={styles.logoutButton} accessibilityRole="button">
                <Ionicons name="power" size={16} color="#0c2530" />
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 28,
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
    paddingTop: 34
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#113440',
    marginBottom: 18
  },
  cardsGrid: {
    flexDirection: 'row',
    gap: 10
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#0f4c5a',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  cardIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(228, 245, 248, 0.18)'
  },
  actionCardTitle: {
    color: '#e4f5f8',
    fontSize: 16,
    fontWeight: '700'
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#d6e2e6',
    paddingVertical: 10,
    paddingHorizontal: 6
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    transform: [{ translateY: -4 }]
  },
  bottomNavText: {
    fontSize: 10,
    color: '#6d8790',
    fontWeight: '600'
  },
  bottomNavTextActive: {
    color: '#0f4c5a',
    fontWeight: '700'
  },
  sidebarLayer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row'
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  sidebar: {
    width: 320,
    height: '100%',
    backgroundColor: '#0f4c5a',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    elevation: 8
  },
  brand: {
    color: '#f1f6f8',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1
  },
  menuList: {
    marginTop: 12,
    gap: 12
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 16
  },
  menuItemActive: {
    backgroundColor: '#6eaab2'
  },
  menuText: {
    color: '#f4fbff',
    fontSize: 18,
    fontWeight: '600'
  },
  menuTextActive: {
    color: '#10212a',
    fontWeight: '700'
  },
  logoutWrap: {
    marginTop: 'auto',
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
