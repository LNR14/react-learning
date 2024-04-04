import { Flex, Text, Box, Avatar, Skeleton, SkeletonCircle, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";

const PostHeader = ({ post,creatorProfile }) => {
  const {handleFollowUser, isFollowing, isUpdating} =useFollowUser(post.createdBy)
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to = {`${creatorProfile.username}`}>
          <Avatar src={creatorProfile.profilePicURL} alt="user profile pic" size={"sm"} /> 
        </Link>
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile.username}
          <Box color={"gray.500"}>. 1w</Box>
        </Flex>
      </Flex>
      <Box>
        <Button
          size={"xs"}
          fontSize={12}
          color={"blue.500"}
          bg={"transparent"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow":"follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
