import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import { HomeScreen, ChatScreen, ProfileScreen, PostScreen } from '@screens/index';
import { RootTabParamList } from './Navigation.types';
import { IconButton } from 'native-base';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Logout } from '@molecules';

const HomeStack = createBottomTabNavigator<RootTabParamList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator
    initialRouteName="home"
    screenOptions={({ navigation }) => ({
      presentation: 'modal',
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#ff6600',
      headerLeft: () => (
        <IconButton
          icon={<Ionicons name="chevron-back" size={24} />}
          onPress={() => navigation.goBack}
        />
      ),
      headerRight: () => <Logout />,
    })}
  >
    <HomeStack.Screen
      name="home"
      component={HomeScreen}
      options={() => ({
        title: 'Home',
        tabBarIcon: (props) => <Ionicons name="md-home" {...props} />,
      })}
    />
    <HomeStack.Screen
      name="post"
      component={PostScreen}
      options={() => ({
        title: 'Post',
        tabBarIcon: (props) => <MaterialIcons name="post-add" {...props} />,
      })}
    />
    <HomeStack.Screen
      name="chat"
      component={ChatScreen}
      options={() => ({
        title: 'Chat',
        tabBarBadge: 3,
        tabBarIcon: (props) => <Ionicons name="chatbox-ellipses-outline" {...props} />,
        // tabBarBadgeStyle: { color: 'white', backgroundColor: '#ff6600' },
      })}
    />
    <HomeStack.Screen
      name="tag"
      component={ProfileScreen}
      options={() => ({
        title: 'Profile',
        tabBarIcon: (props) => <FontAwesome5 name="user-alt" {...props} size={24} />,
      })}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
