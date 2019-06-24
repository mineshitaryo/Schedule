import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react'
import {  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import DatePicker from 'react-native-datepicker'

class Home3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
      date:"2016-05-15",
    };
  }

  storeData = async () => {

   try{
     await AsyncStorage.setItem('date',this.state.date);
   }catch(error){
     console.log(error);
   }

   Alert.alert(date + ': stored');
 }

 getData = async () => {

   try{
     const value = await AsyncStorage.getItem('date');
     if(value !== null){
       Alert.alert('We have ' + value);
     }else{
       Alert.alert('We have no data');
     }
   }catch(error){
     console.log(error);
   }

 }

 componentDidMount(){
   this.storeData();
   this.getData();
 }
  render () {
    let test = this.state.date;
    return (
      <View>
        <Text>{value}</Text>
        <TextInput
          style={{height: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}
          numberOfLines={10}
        />
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2015-01-01"
        maxDate="2021-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <Button
          title='保存'
          onPress={()=>this.storeData('2021-01-01')}
      />
      <Button
          title='取得'
          onPress={()=>this.getData()}
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

export default Home3Screen
