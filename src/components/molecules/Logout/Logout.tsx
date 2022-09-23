import React from 'react';
import { auth } from '@config/firebaseApp';
import { useAuthStore } from '@store';
import { Center, Button } from 'native-base';

export const Logout = () => {
  const { removeAuth } = useAuthStore();

  const handleLogout = () => {
    auth.signOut().then(() => removeAuth());
  };

  return (
    <Center w="full" mt={5}>
      <Button width="full" variant="outline" onPress={handleLogout}>
        Logout
      </Button>
    </Center>
  );
};
