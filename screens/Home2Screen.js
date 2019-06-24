import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {test} from './Home3Screen';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    };
    const updeter = (state) =>{
      this.setState({
       items: {
         //...this.state.items,
         '2019-05-27': [
           ...this.state.items['2019-05-27'],
           {
             key: '2019-05-27-1',
             name: 'new name'
           },
         ]
       }
     })
    }

    //store = updeter;

  }
  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayPress={(day) => {console.log({test})}}
      />
    );
  }


  loadItems(day) {
    //const newItems = {...this.state.items}
    setTimeout(() => {
     //const newItems = {...this.state.items}
     let newItems = {};
     for (let i = -15; i < 85; i++) {
       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
       const strTime = this.timeToString(time);
       if (!newItems[strTime]) {
         newItems[strTime] = [];
         newItems[strTime].push({
              key:strTime,
              name:'a'
          }); // { strTime: [ {key* strTime, name: 'a'} ], ... }
        }
     }
     this.setState({ items: newItems });
   }, 1000);

   console.log(this.state.items['2019-08-05']);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: Math.max(Math.floor(150))}]}>
        <Text>
           {item.name}
           {item.key}
           {test}
        </Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
