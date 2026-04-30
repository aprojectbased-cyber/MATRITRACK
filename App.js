import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const CARD_GAP = 12;

export default function App() {
  const { width } = useWindowDimensions();
  const horizontalPadding = 20;
  const contentWidth = width - horizontalPadding * 2;
  const cardWidth = (contentWidth - CARD_GAP) / 2;
  const titleSize = Math.min(46, Math.max(28, width * 0.11));
  const iconSize = Math.min(52, Math.max(28, width * 0.12));
  const cardTextSize = Math.min(46, Math.max(22, width * 0.09));

  const cards = [
    { key: 'footings', label: 'Footings', icon: <MaterialCommunityIcons name="hammer-screwdriver" size={iconSize} color="#41525a" /> },
    { key: 'columns', label: 'Columns', icon: <FontAwesome5 name="university" size={iconSize - 4} color="#41525a" /> }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity accessibilityRole="button" style={styles.menuButton}>
            <Ionicons name="menu" size={Math.min(36, Math.max(24, width * 0.09))} color="#1e3139" />
          </TouchableOpacity>
          <Text style={[styles.title, { fontSize: titleSize }]}>MATRITRACK</Text>
        </View>

        <View style={[styles.grid, { gap: CARD_GAP }]}>
          {cards.map((card) => (
            <TouchableOpacity key={card.key} style={[styles.card, { width: cardWidth }]}>
              {card.icon}
              <Text style={[styles.cardText, { fontSize: cardTextSize }]}>{card.label}</Text>
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
    fontWeight: '800',
    letterSpacing: 1,
    color: '#1e3139',
    flexShrink: 1
  },
  grid: {
    flexDirection: 'row'
  },
  card: {
    aspectRatio: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#d8dde3',
    backgroundColor: '#f7f8fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 14
  },
  cardText: {
    color: '#1f323b',
    fontWeight: '500'
  }
});
