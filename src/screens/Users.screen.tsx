import React, { useLayoutEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Input,
  Text,
  View,
  VStack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '@config/firebaseApp';
import { UserModel } from '@interfaces';
import { getInitials } from '@utils';
import { Loading } from '@atoms';

const UsersScreen = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(true);

  // hooks
  const navigation = useNavigation();

  // handlers
  const hanldeNavigation = (user: UserModel) => navigation.navigate('chat', { user });

  useLayoutEffect(() => {
    const q = query(
      collection(db, 'users'),
      // orderBy('fullName', 'desc'),
      where('uid', '!=', auth.currentUser?.uid)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(
        (document) =>
          ({
            uid: document.data().uid,
            email: document.data().email,
            avatar: document.data().avatar,
            fullName: document.data().fullName,
          } as unknown as UserModel)
      );

      setUsers(data);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Center flex={1}>
      <VStack w="full" space={5} p={2} alignSelf="center">
        <Input
          placeholder="Search here"
          variant="filled"
          width="full"
          py="1"
          px="2"
          InputLeftElement={
            <Icon ml="2" size="4" color="light.600" as={<Ionicons name="ios-search" />} />
          }
        />
      </VStack>

      <View flex={1} width="full" p={2} justifyContent="center" alignItems="center">
        <FlatList
          data={users}
          width="full"
          renderItem={({ item: { avatar, fullName, uid } }) => (
            <TouchableOpacity onPress={() => hanldeNavigation({ avatar, fullName, uid })}>
              <Box
                borderBottomWidth="1"
                borderColor="light.200"
                pl={['0', '4']}
                pr={['0', '5']}
                py="2"
              >
                <HStack space={[2, 6]} mx={4} justifyContent="flex-start" alignItems="center">
                  <Avatar size="md" {...(avatar && { source: { uri: avatar } })}>
                    {getInitials(fullName)}
                  </Avatar>
                  <Text color="coolGray.800" fontSize="lg" fontWeight="semibold" ml="2">
                    {fullName}
                  </Text>
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={({ uid }) => uid}
        />

        <Loading loading={loading} />
      </View>
    </Center>
  );
};

export default UsersScreen;
