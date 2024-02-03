import { Text, View, StyleSheet, Platform } from 'react-native'
import React, { Component } from 'react'

export default class PokemonCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>Pokemon Card</Text>
      </View>
    )
  }
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
