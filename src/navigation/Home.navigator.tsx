import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  HomeScreen,
  ChatScreen,
  ProfileScreen,
  PostScreen,
  UpdateProfileScreen,
  ProfileSettingsScreen,
} from '@screens/index';
import { HomeParamList, RootParamList } from './Navigation.types';

const Tab = createBottomTabNavigator<HomeParamList>();
const HomeStack = createNativeStackNavigator<RootParamList>();

const TabStackNavigator = () => (
  <Tab.Navigator
    initialRouteName="home"
    screenOptions={({ navigation }) => ({
      presentation: 'modal',
      tabBarShowLabel: false,
      // headerRight: () => <Logout />,
    })}
  >
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={() => ({
        title: 'Home',
        tabBarIcon: (props) => <Ionicons name="md-home" {...props} />,
      })}
    />
    <Tab.Screen
      name="post"
      component={PostScreen}
      options={() => ({
        title: 'Post',
        tabBarIcon: (props) => <MaterialIcons name="post-add" {...props} />,
      })}
    />
    <Tab.Screen
      name="chat"
      component={ChatScreen}
      options={() => ({
        title: 'Chat',
        tabBarBadge: 3,
        tabBarIcon: (props) => <Ionicons name="chatbox-ellipses-outline" {...props} />,
        // tabBarBadgeStyle: { color: 'white', backgroundColor: '#ff6600' },
      })}
    />
    <Tab.Screen
      name="profile"
      component={ProfileScreen}
      options={() => ({
        title: 'Profile',
        tabBarIcon: (props) => <FontAwesome5 name="user-alt" {...props} size={24} />,
      })}
    />
  </Tab.Navigator>
);

const HomeStackNavigator = () => (
  <HomeStack.Navigator initialRouteName="root">
    <HomeStack.Screen
      name="root"
      component={TabStackNavigator}
      options={() => ({ headerShown: false })}
    />
    <HomeStack.Screen
      name="updateProfile"
      component={UpdateProfileScreen}
      options={() => ({ title: 'Update Profile', headerTitleAlign: 'center' })}
    />
    <HomeStack.Screen
      name="profileSettings"
      component={ProfileSettingsScreen}
      options={() => ({ title: 'Settings Profile', headerTitleAlign: 'center' })}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
