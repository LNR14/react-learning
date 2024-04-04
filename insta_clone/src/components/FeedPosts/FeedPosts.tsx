import {
  Container,
  VStack,
  SkeletonCircle,
  Flex,
  Skeleton,
  Box,
  Text
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const {isLoading,posts} = useGetFeedPosts()

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <>
            <VStack key={idx} gap={4} alignItems={"flex-Start"} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height="10px" w={"200px"} />
                  <Skeleton height="10px" w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"500px"}>contents wrapped</Box>
              </Skeleton>
            </VStack>
          </>
        ))}

      {!isLoading && posts.length > 0 && posts.map((post) => 
        <FeedPost key= {post.id} post={post}/>
      )}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayum. Looks like you don't follow anyone. Please go ahead and follow someone.
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
