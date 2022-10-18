/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { Center, HStack, Icon, IconButton, Text, View, VStack } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useAuthStore } from '@store';
import { Logout, UploadImage } from '@molecules';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/Navigation.types';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = () => {
  const { user } = useAuthStore();
  const navigation = useNavigation();
  const [image, setImage] = useState<string>('');

  // handlers
  const handleNavigation = (value: keyof RootStackParamList) => () => navigation.navigate(value);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);

      // console.log('result', `${result.type}/${result.uri.split('.').pop()}`);

      // const metadata = {
      //   contentType: `${result.type}/${result.uri.split('.').pop()}`,
      // };

      // const storageRef = ref(storage, `images/${result.uri.split('/').pop()}`);

      // uploadString(storageRef, '', 'base64').then((snapshot) => {
      //   console.log('Uploaded a data_url string!');
      // });
    }
  };

  return (
    <>
      {/* <StatusBar style="dark" /> */}
      <Center flex={1} p="8">
        <View flex={1} width="100%" justifyContent="flex-start" alignItems="center">
          <UploadImage userName={user?.fullName} uploadImage={pickImage} uri={image} />
          <Text fontSize="2xl" my="5">
            {user?.fullName}
          </Text>

          <VStack width="full" space={4} alignItems="center" mt={7}>
            <HStack w="full" space={2} alignItems="center" justifyContent="space-between">
              <HStack space={3} justifyContent="flex-start">
                <Icon as={FontAwesome} name="user-circle-o" size="lg" color="blue.500" />
                <Text fontSize="md">Account details</Text>
              </HStack>

              <IconButton
                icon={<Icon as={MaterialIcons} name="keyboard-arrow-right" />}
                p={1}
                onPress={handleNavigation('updateProfile')}
                borderRadius="full"
                _icon={{ color: 'light.500', size: 'xl' }}
                _hover={{ bg: 'light.600:alpha.20' }}
                _pressed={{ bg: 'light.600:alpha.20' }}
              />
            </HStack>
            <HStack w="full" space={2} alignItems="center" justifyContent="space-between">
              <HStack space={3} justifyContent="flex-start">
                <Icon as={MaterialIcons} name="settings" size="xl" color="light.600" />
                <Text fontSize="md">Settings</Text>
              </HStack>

              <IconButton
                icon={<Icon as={MaterialIcons} name="keyboard-arrow-right" />}
                onPress={handleNavigation('profileSettings')}
                borderRadius="full"
                p={1}
                _icon={{ color: 'light.500', size: 'xl' }}
                _hover={{ bg: 'light.600:alpha.20' }}
                _pressed={{ bg: 'light.600:alpha.20' }}
              />
            </HStack>

            <Logout />
          </VStack>
        </View>
      </Center>
    </>
  );
};

export default ProfileScreen;
