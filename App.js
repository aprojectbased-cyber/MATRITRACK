import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const CARD_GAP = 12;
const SCREEN_PADDING = 20;

export default function App() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.max(0, width - SCREEN_PADDING * 2);
  const cardWidth = Math.max(140, (contentWidth - CARD_GAP) / 2);
  const titleSize = Math.min(34, Math.max(20, width * 0.075));
  const iconSize = Math.min(52, Math.max(28, width * 0.12));
  const cardTextSize = Math.min(32, Math.max(18, width * 0.07));

  const cards = [
    { key: 'footings', label: 'Footings', icon: <MaterialCommunityIcons name="hammer-screwdriver" size={iconSize} color="#41525a" /> },
    { key: 'columns', label: 'Columns', icon: <FontAwesome5 name="university" size={iconSize - 4} color="#41525a" /> }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
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
              <Text
                style={[styles.cardText, { fontSize: cardTextSize }]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.75}
              >
                {card.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f5f7'
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 36,
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom: 24
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 28
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
    flexDirection: 'row',
    flexWrap: 'wrap'
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
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  }
});
