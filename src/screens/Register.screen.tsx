import { FontAwesome } from '@expo/vector-icons';
import { RegisterForm } from '@organisms';
import { Button, Center, Heading, Text, View } from 'native-base';
import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Center flex={1} p="8">
          <View my="4">
            <FontAwesome name="user-plus" size={60} />
          </View>

          <Heading size="xl" mb="8" color="primary.600">
            Create new account
          </Heading>
          <RegisterForm />
          <Text my="3">Or</Text>

          <Button width="full" variant="outline" rounded="full">
            Sign up with Google
          </Button>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
