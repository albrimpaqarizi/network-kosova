import React, { useLayoutEffect, useState } from 'react';
import { Alert, Center, Divider, Heading, HStack, Text, useToast, View } from 'native-base';
import { ProfileFormInputs, ProfileSettingsForm } from '@organisms';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '@config/firebaseApp';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@store';
import { Loading } from '@atoms';
import { query, collection, where, onSnapshot } from 'firebase/firestore';

const UpdateProfileScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [authUser, setAuthUser] = useState<ProfileFormInputs | null>(null);

  // hooks
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

  useLayoutEffect(() => {
    const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAuthUser({
        gender: snapshot.docs[0].data().gender,
        email: snapshot.docs[0].data().email,
        fullName: snapshot.docs[0].data().fullName,
      });
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user?.uid]);

  return (
    <Center flex={1}>
      <View flex={1} p={6} width="100%" justifyContent="flex-start" alignItems="center">
        <Heading size="sm" w="full" mt={4} textTransform="uppercase">
          Public profile
        </Heading>

        <Divider mt="1" mb="9" h={1} bg="light.200" />
        {!loading && authUser && (
          <ProfileSettingsForm data={authUser} handleOnSubmit={handleOnSubmit} />
        )}
      </View>

      <Loading loading={loading} />
    </Center>
  );
};

export default UpdateProfileScreen;
