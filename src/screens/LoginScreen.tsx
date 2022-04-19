import { AppLayout } from "templates";
import { NonAuthTabScreenProps } from "interfaces/types";
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  WarningOutlineIcon,
  Container,
  Heading,
} from "native-base";

import * as React from "react";

const LoginScreen = ({ navigation }: NonAuthTabScreenProps<"login">) => {
  return (
    <AppLayout>
      <Heading>Login page</Heading>
      <Container alignItems="center" bg="green.300">
        <Box w="xs" maxW="300px">
          <FormControl>
            <Stack mx="1" my="3">
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
              <Input type="password" placeholder="********" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
        <Button onPress={() => navigation.navigate("register")}>login</Button>
      </Container>
    </AppLayout>
  );
};

export default LoginScreen;
