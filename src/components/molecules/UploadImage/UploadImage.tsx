import { Ionicons } from '@expo/vector-icons';
import { getInitials } from '@utils';
import { Avatar, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { UploadImageProps } from './UploadImage.types';

export const UploadImage = ({ uri, userName, uploadImage }: UploadImageProps) => (
  <View>
    <Avatar bgColor="teal.600" alignSelf="center" size="2xl" {...(uri && { source: { uri } })}>
      {getInitials(userName || '??')}

      <Avatar.Badge style={styles.badge}>
        <TouchableOpacity onPress={uploadImage}>
          <Ionicons name="camera" size={18} color="white" />
        </TouchableOpacity>
      </Avatar.Badge>
    </Avatar>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
    opacity: 0.9,
    marginLeft: -40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
