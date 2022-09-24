import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import {
  HomeScreen,
  ChatScreen,
  ProfileScreen,
  PostScreen,
  UpdateProfileScreen,
  ProfileSettingsScreen,
  SingleChatScreen,
  UsersScreen,
} from '@screens/index';
import { HomeParamList, RootParamList } from './Navigation.types';
import { IconButton, View } from 'native-base';
import { GestureResponderEvent } from 'react-native';

const Tab = createBottomTabNavigator<HomeParamList>();
const HomeStack = createNativeStackNavigator<RootParamList>();

const TabStackNavigator = () => (
  <Tab.Navigator
    initialRouteName="home"
    screenOptions={({ navigation }) => ({
      presentation: 'modal',
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
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
      name="chats"
      component={ChatScreen}
      options={({ navigation }) => ({
        title: 'Chat',
        tabBarBadge: 3,
        tabBarIcon: (props) => <Ionicons name="chatbox-ellipses-outline" {...props} />,
        headerRight: () => (
          <IconButton onPress={(_event: GestureResponderEvent) => navigation.navigate('users')}>
            <SimpleLineIcons name="note" size={20} color="black" />
          </IconButton>
        ),
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
      name="chat"
      component={SingleChatScreen}
      options={() => ({
        headerTitleStyle: { fontSize: 15 },
        headerRight: () => (
          <View>
            <Foundation name="info" size={28} color="black" />
          </View>
        ),
      })}
    />
    <HomeStack.Screen
      name="updateProfile"
      component={UpdateProfileScreen}
      options={() => ({ title: 'Update Profile', headerTitleAlign: 'center' })}
    />
    <HomeStack.Screen name="users" component={UsersScreen} options={() => ({ title: 'Users' })} />
    <HomeStack.Screen
      name="profileSettings"
      component={ProfileSettingsScreen}
      options={() => ({ title: 'Settings Profile', headerTitleAlign: 'center' })}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
