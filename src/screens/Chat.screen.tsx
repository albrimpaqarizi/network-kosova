import React, { useLayoutEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Input,
  Spacer,
  Text,
  View,
  VStack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '@config/firebaseApp';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { MessageModel } from '@interfaces';
import { getInitials } from '@utils';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<MessageModel[]>([]);

  const hanldeNavigation = (uid: string, docId: string) => {
    navigation.navigate('chat', { uid, docId });
  };

  useLayoutEffect(() => {
    const q = query(
      collection(db, 'chats'),
      where('uid', 'array-contains', auth.currentUser?.uid)
      // orderBy('createdAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map(
          (document) =>
            ({
              // eslint-disable-next-line no-underscore-dangle
              _id: document.data()._id,
              docId: document.id,
              text: document.data().text,
              user: document.data().user,
              createdAt: document.data().createdAt.toDate(),
            } as unknown as MessageModel)
        )
      );
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
          data={messages}
          width="full"
          renderItem={({ item: { user, text, createdAt, docId } }) => (
            // eslint-disable-next-line no-underscore-dangle
            <TouchableOpacity onPress={() => hanldeNavigation(user._id, docId)}>
              <Box
                borderBottomWidth="1"
                borderColor="light.200"
                pl={['0', '4']}
                pr={['0', '5']}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="md" {...(user.avatar && { source: { uri: user.avatar } })}>
                    {getInitials(user.name)}
                  </Avatar>
                  <VStack>
                    <Text color="coolGray.800" bold>
                      {user.name}
                    </Text>
                    <Text color="coolGray.600" isTruncated maxW="200">
                      {text}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                    {dayjs(createdAt).format('H:mm A')}
                  </Text>
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={({ _id }) => _id}
        />
      </View>
    </Center>
  );
};

export default ChatScreen;
