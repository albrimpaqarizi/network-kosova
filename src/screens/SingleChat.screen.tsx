/* eslint-disable no-underscore-dangle */
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Center, View } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { ChatParamList, MessageModel } from '@interfaces';
import { useAuthStore } from '@store';
import { db } from '@config/firebaseApp';
import { Loading } from '@atoms';

const SingleChatScreen = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageModel[]>([]);

  // hooks
  const { user } = useAuthStore();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ChatParamList, 'chat'>>();

  const onSend = useCallback(
    async (newMessage: MessageModel[]) => {
      setMessages(GiftedChat.append<MessageModel>(messages, newMessage));

      if (params.chatId) {
        addDoc(collection(db, 'messages'), { ...newMessage[0], chatId: params.chatId });
      } else {
        const newData = {
          text: newMessage[0].text,
          createdAt: newMessage[0].createdAt,
          uid: [user?.uid || '', params?.user.uid],
          users: [
            params?.user,
            { uid: user?.uid || '', fullName: user?.fullName, avatar: user?.photoURL || '' },
          ],
        };
        addDoc(collection(db, 'chats'), newData).then((res) => {
          addDoc(collection(db, 'messages'), { ...newMessage[0], chatId: res.id });
        });
      }
    },
    [messages, params, user]
  );

  //   const renderBubble = (props: Bubble<MessageModel>['props']) => (
  //     <Bubble {...props} wrapperStyle={{ left: { backgroundColor: '#f2f2f2' } }} />
  //   );

  useLayoutEffect(() => {
    const unsubscribe = () => {
      if (params?.chatId) {
        setLoading(true);
        const q = query(collection(db, 'messages'), where('chatId', '==', params?.chatId));

        onSnapshot(q, (snapshot) => {
          const newData = snapshot.docs.map(
            (document) =>
              ({
                _id: document.data()._id,
                text: document.data().text,
                user: document.data().user,
                createdAt: document.data().createdAt.toDate(),
              } as unknown as MessageModel)
          );
          setMessages(newData);
          setLoading(false);
        });
      }
    };

    return () => {
      unsubscribe();
    };
  }, [navigation, params, user?.uid]);

  return (
    <Center flex={1}>
      <View flex={1} width="full" justifyContent="flex-start" alignItems="center">
        <SafeAreaView style={styles.chat}>
          <GiftedChat
            messages={messages}
            showAvatarForEveryMessage
            onSend={onSend}
            user={{
              _id: user?.uid || '',
              name: user?.fullName,
              avatar: user?.photoURL || '',
            }}
          />
        </SafeAreaView>
        <Loading loading={loading} />
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
