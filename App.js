import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const cards = [
  { key: 'footings', label: 'Footings', icon: <MaterialCommunityIcons name="hammer-screwdriver" size={52} color="#41525a" /> },
  { key: 'columns', label: 'Columns', icon: <FontAwesome5 name="university" size={48} color="#41525a" /> }
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity accessibilityRole="button" style={styles.menuButton}>
            <Ionicons name="menu" size={36} color="#1e3139" />
          </TouchableOpacity>
          <Text style={styles.title}>MATRITRACK</Text>
        </View>

        <View style={styles.grid}>
          {cards.map((card) => (
            <TouchableOpacity key={card.key} style={styles.card}>
              {card.icon}
              <Text style={styles.cardText}>{card.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f5f7'
  },
  container: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40
  },
  menuButton: {
    marginRight: 16
  },
  title: {
    fontSize: 46,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#1e3139'
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#d8dde3',
    backgroundColor: '#f7f8fa',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
  cardText: {
    fontSize: 46,
    color: '#1f323b',
    fontWeight: '500'
  }
});
