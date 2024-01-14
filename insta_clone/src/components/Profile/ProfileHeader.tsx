import {
  AvatarGroup,
  Flex,
  Avatar,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
const ProfileHeader = () => {
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
          src="https://bit.ly/sage-adebayo"
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
          <Text fontSize={{ base: "sm", md: "lg" }}>As a programmer _ </Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "white.Alpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text
              as="span"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={"bold"}
              mr={1}
            >
              4
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
              149
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
              175
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4} direction={"column"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            As a programmer
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Tutrials that are meant to level up your skills as a programmer
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
