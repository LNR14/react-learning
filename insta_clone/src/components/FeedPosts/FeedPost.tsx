import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const {isLoading, userProfile} = useGetUserProfileById(post.createdBy);
  console.log(userProfile);
  console.log('loading:', isLoading);
  if(!isLoading) {
    return (
      <>
        <PostHeader post= {post} creatorProfile={userProfile} />
        <Box my={2} borderRadius={4} overflow={"hidden"}>
          <Image src={post.imageURL} alt="Feed Post Image"></Image>
        </Box>
        <PostFooter post={post} creatorProfile={userProfile}/>
      </>
    );
  } 
  return <></>;
 
};

export default FeedPost;
