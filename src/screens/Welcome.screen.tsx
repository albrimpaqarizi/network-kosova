/* eslint-disable react/style-prop-object */
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, Text, Heading, View, Icon } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const WelcomeScreen = () => {
  // hooks
  const navigation = useNavigation();

  // handlers
  const handleRedirect = (path: 'login') => () => navigation.navigate(path);

  return (
    <>
      <StatusBar style="light" />
      <AppIntroSlider
        data={slides}
        renderItem={({ item: { text, title, icon } }) => (
          <Center key={title} flex={1} bg="primary.600">
            {icon}
            <View>
              <Heading size="lg" color="white" mb={4} textAlign="center">
                {title}
              </Heading>
              <Text fontSize="lg" px="3" textAlign="center" color="white">
                {text}
              </Text>
            </View>
          </Center>
        )}
        renderDoneButton={() => (
          <View style={styles.buttonCircle}>
            <Ionicons name="checkmark" size={24} color="rgba(255, 255, 255, .9)" />
          </View>
        )}
        renderNextButton={() => (
          <View style={styles.buttonCircle}>
            <Ionicons name="arrow-forward" size={24} color="rgba(255, 255, 255, .9)" />
          </View>
        )}
        onDone={handleRedirect('login')}
      />
    </>
  );
};

export default WelcomeScreen;

const slides = [
  {
    title: 'Welcome to Network Kosova',
    text: "Let's get to your account setup. It will take about a minute.",
    icon: <Icon as={AntDesign} name="user" size={100} color="white" mb="20" />,
  },
  {
    title: 'Share your own',
    text: 'Recommendation with the reliability community',
    icon: <Icon as={AntDesign} name="team" size={100} color="white" mb="20" />,
  },
  {
    title: 'Get notified',
    text: 'Keep up with everything going on in your region',
    icon: <Icon as={AntDesign} name="notification" size={100} color="white" mb="20" />,
  },
];
