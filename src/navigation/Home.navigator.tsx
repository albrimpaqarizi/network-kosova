import * as React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';

// hooks
import useColorScheme from '@hooks/useColorScheme';

// screens
import { TabOneScreen, TabTwoScreen } from '@screens/index';

import { RootTabParamList, RootTabScreenProps } from './Navigation.types';

const HomeStack = createBottomTabNavigator<RootTabParamList>();

const HomeStackNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <HomeStack.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}
    >
      <HomeStack.Screen
        name="home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'home'>) => ({
          tabBarIcon: () => <AntDesign name="home" size={30} color="white" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            >
              <FontAwesome name="info-circle" size={25} style={{ marginRight: 15 }} />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        })}
      />
      <HomeStack.Screen
        name="tag"
        component={TabTwoScreen}
        options={{
          tabBarIcon: () => <AntDesign name="tags" size={30} color="white" />,
          headerStyle: {
            backgroundColor: '#ca005e',
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
