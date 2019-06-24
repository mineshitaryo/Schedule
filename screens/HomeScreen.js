import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button } from 'react-native'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="go to Home3"
          onPress={() => this.props.navigation.navigate('Home2')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
})

export default HomeScreen
