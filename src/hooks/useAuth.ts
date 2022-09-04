import { useCallback, useEffect, useState } from 'react';

import { getStorageData, removeStorageData } from '@utils';
import { useAuthStore } from '@store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@firebase/config';

export const useAuth = (): { loading: boolean } => {
  // local state
  const [loading, setLoading] = useState<boolean>(true);

  // hooks

  const { removeAuth } = useAuthStore();

  // consts
  const token = getStorageData('token') || '';

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('🚀 ~ file: App.tsx ~ line 25 ~ onAuthStateChanged ~ uid', uid);
      // ...
    } else {
      // User is signed out
      console.log('🚀 ~ file: App.tsx ~ line 32 ~ onAuthStateChanged ~  // User is signed out');
    }
  });

  // handlers
  //   const handleGetUserById = useCallback(() => {
  //     refetch();
  //     setLoading(false);
  //   }, [refetch]);

  //   // effect
  //   useEffect(() => {
  //     if (validateAuthToken(token)) {
  //       handleGetUserById();
  //     } else {
  //       removeStorageData('token');
  //       removeAuth();
  //       setLoading(false);
  //     }
  //   }, [handleGetUserById, removeAuth, token]);

  return { loading };
};
