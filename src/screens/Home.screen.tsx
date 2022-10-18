import React from 'react';
import {
  Button,
  Center,
  CheckIcon,
  Divider,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  SectionList,
  Select,
  Text,
  VStack,
} from 'native-base';
import { PostProfile } from '@molecules';
import { AntDesign, EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const data = [
  {
    title: 'Cyan',
    data: [
      {
        id: '3ac68a1c-c605-48d3-a4f8-fbd91aa97f63',
        createdAt: new Date(),
        likes: 2,
        comments: 1,
        user: {
          uid: 'ItXjagQXQhVyoNA2Nov7Gzxobh02',
          fullName: 'Sujitha Mathur',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
        },
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      },
    ],
  },
  {
    title: 'Yellow',
    data: [
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',
        createdAt: new Date(),
        likes: 9,
        comments: 4,
        user: {
          uid: '9wnv5HzCCBeG6sHo8itXHpSTzO63',
          fullName: 'Anci Barroco',
          avatar: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
        },
      },
    ],
  },
  {
    title: 'Violet',
    data: [
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d72',
        description:
          'All the Lorem \nIpsum generators on the Internet tend to repeat predefined chunks as necessary? \n\n\nmaking this the first true generator on the Internet.',
        createdAt: new Date(),
        likes: 4,
        comments: 1,
        user: {
          uid: '9wnv5HzCCBeG6sHo8itXHpSTzO63',
          fullName: 'Aniket Kumar',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
        },
      },
    ],
  },
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSetModal = () => setModalVisible(!modalVisible);

  return (
    <Center flex={1}>
      <HStack
        width="full"
        space={2}
        p={2}
        m={2}
        bg="white"
        alignSelf="center"
        justifyContent="space-between"
      >
        <Input
          placeholder="Search here"
          variant="filled"
          py="1"
          px="2"
          width="5/6"
          InputLeftElement={
            <IconButton
              icon={<Icon size="4" color="light.600" as={<Ionicons name="ios-search" />} />}
            />
          }
        />
        <IconButton
          onPress={handleSetModal}
          icon={<Icon size="5" color="primary.600" as={<FontAwesome name="filter" />} />}
        />
      </HStack>
      <Modal
        isOpen={modalVisible}
        onClose={handleSetModal}
        avoidKeyboard
        justifyContent="center"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Filter the list of posts</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid>
              <FormControl.Label>Choose group</FormControl.Label>
              <Select
                accessibilityLabel="Choose group"
                placeholder="Choose group"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mb="4"
              >
                <Select.Item label="Sports" value="Sports" />
                <Select.Item label="Developers" value="Developers" />
                <Select.Item label="Roommate" value="roommate" />
                <Select.Item label="Students" value="Students" />
              </Select>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={handleSetModal}>
              Filter
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <SectionList
        w="100%"
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, user, description, comments, createdAt, likes } }) => (
          <Center key={id} my={2} bg="white" w="full">
            <VStack space={2} m={2} p={2} justifyContent="flex-start" alignItems="center" w="full">
              <PostProfile user={user} createdAt={createdAt} />
              <Text px={2} w="full">
                {description}
              </Text>
              <HStack space={2} px={2} justifyContent="space-between" alignItems="center" w="full">
                <HStack space={1} alignItems="center">
                  <Icon as={AntDesign} name="like1" size="xs" color="blue.500" />
                  <Text fontSize="xs">{likes}</Text>
                </HStack>
                <Text fontSize="xs">{comments} comments</Text>
              </HStack>
              <Divider w="full" />
              <HStack space={2} px={2} justifyContent="space-evenly" alignItems="center" w="full">
                <TouchableOpacity>
                  <HStack space={1} alignItems="center">
                    <Icon as={AntDesign} name="like2" size="sm" color="coolGray.800" />
                    <Text fontSize="sm">Like</Text>
                  </HStack>
                </TouchableOpacity>
                <TouchableOpacity>
                  <HStack space={1} alignItems="center">
                    <Icon as={EvilIcons} name="comment" size="md" color="coolGray.800" />
                    <Text fontSize="sm">Comment</Text>
                  </HStack>
                </TouchableOpacity>
                <TouchableOpacity>
                  <HStack space={1} alignItems="center">
                    <Icon as={Ionicons} name="md-share-outline" size="sm" color="coolGray.800" />

                    <Text fontSize="sm">Share</Text>
                  </HStack>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </Center>
        )}
      />
    </Center>
  );
};

export default HomeScreen;
