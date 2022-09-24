/* eslint-disable no-underscore-dangle */
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Avatar, Center, HStack, Text, View } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { addDoc, collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { ChatParamList, MessageModel } from '@interfaces';
import { useAuthStore } from '@store';
import { db } from '@config/firebaseApp';
import { getInitials } from '@utils';

const SingleChatScreen = () => {
  const [messages, setMessages] = useState<MessageModel[]>([]);

  // hooks
  const { user: authUser } = useAuthStore();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ChatParamList, 'chat'>>();

  const onSend = useCallback(
    async (newMessage: MessageModel[]) => {
      const newMessages = newMessage.map((item) => ({
        ...item,
        uid: [authUser?.uid || '', params?.uid],
      }));

      setMessages(GiftedChat.append<MessageModel>(messages, newMessages));
      if (params.docId) {
        const newData = newMessage.map((item) => ({
          _id: item._id,
          text: item.text,
          uid: authUser?.uid,
          createdAt: item.createdAt,
        }));
        addDoc(collection(db, 'chats', params.docId, 'messgaes'), { ...newData[0] });
      } else {
        addDoc(collection(db, 'chats'), { ...newMessages[0] });
      }
    },
    [authUser?.uid, messages, params]
  );

  //   const renderBubble = (props: Bubble<MessageModel>['props']) => (
  //     <Bubble {...props} wrapperStyle={{ left: { backgroundColor: '#f2f2f2' } }} />
  //   );

  useLayoutEffect(() => {
    const queryUser = query(collection(db, 'users'), where('uid', '==', params?.uid));
    const getUser = onSnapshot(queryUser, (snapshot) => {
      const { fullName, avatar } = snapshot.docs[0].data();
      navigation.setOptions({
        headerTitle: () => (
          <HStack space={2} ml={-4} alignItems="center">
            <Avatar size="sm" {...(avatar && { source: { uri: avatar } })}>
              {getInitials(fullName)}
            </Avatar>
            <Text>{fullName}</Text>
          </HStack>
        ),
      });
    });

    const unsubscribe = async () => {
      const docRef = doc(db, 'chats', 'EgJUnRSbWJ0NJq7fOOx0');

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('here', docSnap.data());
      } else {
        console.log('Document does not exist');
      }
      //   const data = docSnap.data().map(
      //     (document) =>
      //       ({
      //         // eslint-disable-next-line no-underscore-dangle
      //         _id: document.data()._id,
      //         text: document.data().text,
      //         user: document.data().user,
      //         createdAt: document.data().createdAt.toDate(),
      //       } as unknown as MessageModel)
      //   );

      //   setMessages(data);
    };

    return () => {
      getUser();
      unsubscribe();
    };
  }, [navigation, params.uid]);

  return (
    <Center flex={1}>
      <View flex={1} width="full" justifyContent="flex-start" alignItems="center">
        <SafeAreaView style={styles.chat}>
          <GiftedChat
            messages={messages}
            showAvatarForEveryMessage
            onSend={onSend}
            user={{
              _id: authUser?.uid || '',
              name: authUser?.fullName,
              avatar: authUser?.photoURL,
            }}
          />
        </SafeAreaView>
      </View>
    </Center>
  );
};

export default SingleChatScreen;

const styles = StyleSheet.create({
  chat: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
