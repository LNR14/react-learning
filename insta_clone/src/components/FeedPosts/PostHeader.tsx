import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img1.png" alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          as a programmer
          <Box color={"gray.500"}>. 1w</Box>
        </Flex>
      </Flex>
      <Box>
        <Text></Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
