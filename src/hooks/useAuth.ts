import { useCallback, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@config/firebaseApp';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@store';
import { UserRoleEnum } from '@enums/UserRole.enum';

export const useAuth = (): boolean => {
  // local state
  const [loading, setLoading] = useState<boolean>(true);

  // hooks
  const navigation = useNavigation();
  const { addAuthUser } = useAuthStore();

  useFocusEffect(
    useCallback(() => {
      onAuthStateChanged(auth, (user) => {
        setLoading(true);
        if (user) {
          addAuthUser(
            {
              uid: user.uid || '',
              email: user.email || '',
              emailVerified: user.emailVerified,
              fullName: user.displayName || '',
              isAnonymous: false,
              role: UserRoleEnum.GUEST,
              photoURL: user.photoURL || '',
            },
            true,
            false
          );

          navigation.navigate('home');

          // ...
        } else {
          // User is signed out
          console.log('🚀 ~  onAuthStateChanged ~  // User is signed out');
          navigation.navigate('welcome');
        }
        setLoading(false);
      });
    }, [addAuthUser, navigation])
  );

  return loading;
};
