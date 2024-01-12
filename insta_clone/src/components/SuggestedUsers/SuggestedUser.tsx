import { Avatar, Flex, Text } from "@chakra-ui/react";

const SuggestedUser = ({ name, followers, avatar }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex align-items={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"}></Avatar>
        <Text>{name}</Text>
      </Flex>
      <Text>{followers}</Text>
    </Flex>
  );
};

export default SuggestedUser;
