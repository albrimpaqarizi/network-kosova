/* eslint-disable react/style-prop-object */
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, Text, Heading, View } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { welcomeSlides } from '@static/welcome.static';

export const WelcomeSlider = () => {
  // hooks
  const navigation = useNavigation();

  // handlers
  const handleRedirect = () => navigation.navigate('login');

  return (
    <>
      <StatusBar style="light" />
      <AppIntroSlider
        data={welcomeSlides}
        renderItem={({ item: { text, title, icon } }) => (
          <Center flex={1} bg="primary.600">
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
        onDone={handleRedirect}
      />
    </>
  );
};

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
