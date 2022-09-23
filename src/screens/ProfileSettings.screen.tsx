import React, { useState } from 'react';
import { Center, Divider, Heading, HStack, Switch, Text, View } from 'native-base';

const ProfileSettingsScreen = () => {
  const [allowPush, setAllowPush] = useState(false);

  // handlers
  const handleToggle = () => setAllowPush(!allowPush);

  return (
    <Center flex={1}>
      <View flex={1} width="100%" justifyContent="flex-start" alignItems="center">
        <Heading size="sm" p={2} mt={6} w="full" textTransform="uppercase">
          General
        </Heading>

        <Divider bg="light.200" />

        <HStack
          alignItems="center"
          px={4}
          justifyContent="space-between"
          w="full"
          bgColor="white"
          space={4}
        >
          <Text fontSize="md">Allow push Notifications</Text>
          <Switch isChecked={allowPush} size="md" onToggle={handleToggle} />
        </HStack>
        <Divider bg="light.200" />
      </View>
    </Center>
  );
};

export default ProfileSettingsScreen;
