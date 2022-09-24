import React, { useLayoutEffect, useState } from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import {
  Center,
  Input,
  Modal,
  Icon,
  VStack,
  IconButton,
  FlatList,
  Avatar,
  Box,
  Text,
  HStack,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { UserModel } from '@interfaces';
import { getInitials } from '@utils';
import { db } from '@config/firebaseApp';

export const UserList = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UserModel[] | []>([]);

  // hooks
  const navigation = useNavigation();

  // handlers
  const hanldeNavigation = (uid: string) => navigation.navigate('chat', { uid });

  useLayoutEffect(() => {
    const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUsers(
        snapshot.docs.map(
          (document) =>
            ({
              uid: document.data().uid,
              email: document.data().email,
              fullName: document.data().fullName,
            } as unknown as UserModel)
        )
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Center>
      <IconButton onPress={() => setShowModal(true)}>
        <SimpleLineIcons name="info" size={28} color="black" />
      </IconButton>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
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
          </Modal.Header>
          <Modal.Body>
            <FlatList
              data={users}
              width="full"
              renderItem={({ item: { avatar, fullName, uid } }) => (
                <TouchableOpacity onPress={() => hanldeNavigation(uid)}>
                  <Box
                    borderBottomWidth="1"
                    borderColor="light.200"
                    pl={['0', '4']}
                    pr={['0', '5']}
                    py="2"
                  >
                    <HStack space={[2, 3]} justifyContent="space-between">
                      <Avatar size="md" {...(avatar && { source: { uri: avatar } })}>
                        {getInitials(fullName)}
                      </Avatar>
                      <Text color="coolGray.800" bold>
                        {fullName}
                      </Text>
                    </HStack>
                  </Box>
                </TouchableOpacity>
              )}
              keyExtractor={({ uid }) => uid}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
