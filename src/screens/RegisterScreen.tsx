import { NonAuthTabScreenProps } from "interfaces/types";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Container,
  FormControl,
  Stack,
  Button,
  Input,
  WarningOutlineIcon,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }: NonAuthTabScreenProps<"login">) => {
  return (
    <NativeBaseProvider>
      <Box p="2" justifyContent="center" alignItems="center" flex={1}>
        <Heading>Register page</Heading>
        <Container alignItems="center">
          <Box w="xs" maxW="300px">
            <FormControl>
              <Stack mx="1" my="3">
                <FormControl.Label>First name</FormControl.Label>
                <Input type="text" placeholder="Albrim" />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <FormControl>
              <Stack mx="1" my="3">
                <FormControl.Label>Email address</FormControl.Label>
                <Input type="email" placeholder="albrim.paqarizi@gmail.com" />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <FormControl>
              <Stack mx="1" my="3">
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" placeholder="********" />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
          </Box>
          <Button onPress={() => navigation.navigate("login")}>register</Button>
        </Container>
      </Box>
    </NativeBaseProvider>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
