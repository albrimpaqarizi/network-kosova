import React from 'react';
import { auth } from '@config/firebaseApp';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuthStore } from '@store';
import { IconButton } from 'native-base';

export const Logout = () => {
  const { removeAuth } = useAuthStore();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => removeAuth())
      .catch((error) => {
        console.log('error', error);
      });
  };

  return <IconButton icon={<MaterialIcons name="logout" size={24} />} onPress={handleLogout} />;
};
