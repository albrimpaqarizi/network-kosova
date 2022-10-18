import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'native-base';
import React from 'react';

export const welcomeSlides = [
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
