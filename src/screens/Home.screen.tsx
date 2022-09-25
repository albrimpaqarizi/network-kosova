import React from 'react';
import { Center, Divider, HStack, Icon, SectionList, Text, VStack } from 'native-base';
import { PostProfile } from '@molecules';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const data = [
  {
    title: 'Cyan',
    data: [
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        createdAt: new Date(),
        likes: 12,
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
        likes: 12,
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
        likes: 12,
        user: {
          uid: '9wnv5HzCCBeG6sHo8itXHpSTzO63',
          fullName: 'Aniket Kumar',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
        },
      },
    ],
  },
  {
    title: 'Cyan',
    data: [
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        createdAt: new Date(),
        likes: 12,
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
        likes: 12,
        user: {
          uid: '9wnv5HzCCBeG6sHo8itXHpSTzO63',
          fullName: 'Anci Barroco',
          avatar: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
        },
      },
    ],
  },
];

const HomeScreen = () => (
  <Center flex={1}>
    <SectionList
      w="100%"
      mt={2}
      sections={data}
      keyExtractor={({ id }) => id}
      // renderSectionHeader={({ section: { title } }) => (
      //     <Text fontSize="xl">{title}</Text>
      // )}
      renderItem={({ item: { user, description, createdAt, likes } }) => (
        <Center my={2} bg="white" w="full">
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
              <Text fontSize="xs">{likes} comments</Text>
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

export default HomeScreen;
