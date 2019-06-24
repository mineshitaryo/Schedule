import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Image, Platform, View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import Home2Screen from '../screens/Home2Screen'
import Home3Screen from '../screens/Home3Screen'
import ProfileScreen from '../screens/ProfileScreen'
import ProfileEditScreen from '../screens/ProfileEditScreen'
import SettingScreen from '../screens/SettingScreen'
import TermOfService from '../screens/TermOfService'
import TutorialScreen from '../screens/TutorialScreen'


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <Icon name="bars" size={24} color='#FFFFFF'onPress={() => { navigation.openDrawer() }} style={{ paddingLeft: 20 }} />
          ),
        })
    },
    Home2: {
      screen: Home2Screen,
      navigationOptions: ({ navigation }) => ({
          headerRight: (
            <Icon name="plus" size={24} color='#FFFFFF' onPress={() => { navigation.navigate('Home3') }} style={{ paddingRight: 20}} />
          ),
        })
    },
    Home3: {
      screen: Home3Screen,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    },
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <Icon name="bars" size={24} onPress={() => { navigation.openDrawer() }} style={{ paddingLeft: 20 }} />
          ),
        })
    },
    ProfileEdit: {
      screen: ProfileEditScreen
    },
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    }
  }
)

const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: SettingScreen,
      navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <Icon name="bars" size={24} onPress={() => { navigation.openDrawer() }} style={{ paddingLeft: 20 }} />
          ),
        })
    },
  },
  {
    initialRouteName: "Setting",
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    }
  }
)

const TermOfServiceStack = createStackNavigator(
  {
    TermOfService: {
      screen: TermOfService,
      navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <Icon name="bars" size={24} onPress={() => { navigation.openDrawer() }} style={{ paddingLeft: 20 }} />
          ),
        })
    },
  },
  {
    initialRouteName: "TermOfService",
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    },
  }
)

const Tab = createBottomTabNavigator(
  {
    Home:{
      screen:HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon size={24} name="home" color={tintColor} />
      }
    },
    Profile:{
      screen:ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon size={24} name="user" color={tintColor} />
      }
    },
    Setting:{
      screen:SettingStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon size={24} name="cog" color={tintColor} />
      }
    }
  }
)

const Drawer = createDrawerNavigator({
  Home:{
    screen:Tab,
    navigationOptions: {
        drawerIcon: <Icon name="home" size={24} />
      }
  } ,
  TermOfService:{
    screen:TermOfServiceStack,
    navigationOptions: {
        drawerIcon: <Icon name="rocket" size={24} />
      }
  }
})

const AppNavigator = createSwitchNavigator({
  Tutorial: {
    screen: TutorialScreen,
  },
  Main: Drawer,
})

export default AppNavigator
