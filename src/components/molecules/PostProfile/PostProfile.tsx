import React from 'react';
import dayjs from 'dayjs';
import { TouchableOpacity } from 'react-native';
import { HStack, Avatar, VStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { getInitials } from '@utils';
import { PostProfileProps } from './PostProfile.types';

export const PostProfile = ({ user, createdAt }: PostProfileProps) => {
  // hooks
  const navigation = useNavigation();

  // handlers
  const hanldeNavigation = () => navigation.navigate('chat', { user });

  return (
    <HStack space={3} justifyContent="flex-start" alignItems="center" w="full">
      <TouchableOpacity onPress={hanldeNavigation}>
        <Avatar size="md" {...(user.avatar && { source: { uri: user.avatar } })}>
          {getInitials(user.fullName)}
        </Avatar>
      </TouchableOpacity>
      <VStack>
        <TouchableOpacity onPress={hanldeNavigation}>
          <Text color="coolGray.800" fontSize="sm" fontWeight="semibold">
            {user.fullName}
          </Text>
        </TouchableOpacity>
        <Text color="coolGray.800" fontSize={11}>
          {dayjs(createdAt).format('H:mm')}
        </Text>
      </VStack>
    </HStack>
  );
};
