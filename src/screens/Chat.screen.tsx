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
import { ChatModel, UserModel } from '@interfaces';
import { getInitials } from '@utils';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [chats, setChats] = useState<ChatModel[]>([]);

  const hanldeNavigation = (user: UserModel, chatId: string) => {
    navigation.navigate('chat', { user, chatId });
  };

  useLayoutEffect(() => {
    const q = query(collection(db, 'chats'), where('uid', 'array-contains', auth.currentUser?.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chat = snapshot.docs.map(
        (document) =>
          ({
            id: document.id,
            text: document.data().text,
            user: document
              .data()
              .users.find((item: { uid: string }) => item.uid !== auth.currentUser?.uid),
            createdAt: document.data().createdAt.toDate(),
          } as unknown as ChatModel)
      );

      setChats(chat);
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
          data={chats}
          width="full"
          renderItem={({ item: { id, user, text, createdAt } }) => (
            <TouchableOpacity onPress={() => hanldeNavigation(user, id)}>
              <Box
                borderBottomWidth="1"
                borderColor="light.200"
                pl={['0', '4']}
                pr={['0', '5']}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="md" {...(user.avatar && { source: { uri: user.avatar } })}>
                    {getInitials(user.fullName)}
                    <Avatar.Badge color="green.500" />
                  </Avatar>
                  <VStack>
                    <Text color="coolGray.800" bold>
                      {user.fullName}
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
          keyExtractor={({ id }) => id}
        />
      </View>
    </Center>
  );
};

export default ChatScreen;
