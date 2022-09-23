import React from 'react';
import { Alert, Center, Divider, Heading, HStack, Text, useToast, View } from 'native-base';
import { ProfileFormInputs, ProfileSettingsForm } from '@organisms';
import { updateProfile } from 'firebase/auth';
import { auth } from '@config/firebaseApp';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@store';
import { Loading } from '@atoms';

const UpdateProfileScreen = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const toast = useToast();
  const navigation = useNavigation();
  const { user, addAuthUser } = useAuthStore();

  // handlers
  const handleOnSubmit = ({ fullName }: ProfileFormInputs) => {
    if (auth.currentUser) {
      setLoading(true);
      updateProfile(auth.currentUser, { displayName: fullName.trim() })
        .then(() => {
          if (user) addAuthUser({ ...user, fullName }, true, false);
          navigation.navigate('profile');
          setLoading(false);
        })
        .catch((error) => {
          toast.show({
            render: () => (
              <HStack space={2} justifyContent="center" alignItems="center">
                <Alert.Icon color="red.500" />
                <Text color="red.500">{error}</Text>
              </HStack>
            ),
          });
          setLoading(false);
        });
    }
  };

  return (
    <Center flex={1}>
      <View flex={1} p={6} width="100%" justifyContent="center" alignItems="center">
        <Heading size="sm" w="full" textTransform="uppercase">
          Public profile
        </Heading>

        <Divider mt="1" mb="9" h={1} bg="light.200" />

        <ProfileSettingsForm handleOnSubmit={handleOnSubmit} />
      </View>

      <Loading loading={loading} />
    </Center>
  );
};

export default UpdateProfileScreen;
