import {
  AvatarGroup,
  Flex,
  Avatar,
  Text,
  VStack,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import EditProfile from "./EditProfile";
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore"

const ProfileHeader = () => {
  const {userProfile} = useUserProfileStore()
  const authUser = useAuthStore((state) => state.user)
  const visitingOwnProfileAndAuthenticated = authUser && authUser.username === userProfile.username
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          size="2xl"
          name="Segun Adebayo"
          src={userProfile.profilePicURL}
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username} </Text>
          {visitingOwnProfileAndAuthenticated &&           
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "white.Alpha.800" }}
              size={{ base: "xs", md: "sm" }}
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          </Flex>}

          {visitingAnotherProfileAndAuth &&           
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{ bg: "blue.600" }}
              size={{ base: "xs", md: "sm" }}
            >
              Follow
            </Button>
          </Flex>}


        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text
              as="span"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={"bold"}
              mr={1}
            >
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>
          <Text>
            <Text
              as="span"
              fontWeight={"bold"}
              fontSize={{ base: "xs", md: "sm" }}
              mr={1}
            >
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>
          <Text>
            <Text
              as="span"
              fontWeight={"bold"}
              fontSize={{ base: "xs", md: "sm" }}
              mr={1}
            >
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4} direction={"column"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullname}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          {userProfile.bio}
        </Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  );
};

export default ProfileHeader;
