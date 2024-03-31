import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
const Comment = ({ comment}) => {
  return (
    <Flex gap={4}>
      {/* <Avatar src={profilepic} name={username} size={"sm"} /> */}
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {/* {username} */}
          </Text>
          <Text fontSize={14}>{comment.comment}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {/* {comment.createdAt} */}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
