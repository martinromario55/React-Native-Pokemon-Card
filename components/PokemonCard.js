import { Text, View, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      {/* <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
      /> */}

      <View>
        <Text>Type: {type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(', ')}</Text>
      </View>

      <View>
        <Text>Weakness: {weaknesses.join(', ')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#333',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})
