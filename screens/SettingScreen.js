import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button } from 'react-native'

class SettingScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Setting</Text>
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

export default SettingScreen
