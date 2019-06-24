import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button } from 'react-native'

class TutorialScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Tutorial</Text>
        <Button
          title="Hello H"
          onPress={() => this.props.navigation.navigate('Main')}
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

export default TutorialScreen
