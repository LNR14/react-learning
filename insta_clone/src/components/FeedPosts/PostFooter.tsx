import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState,useRef } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore"
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ username, isProfilePage, post }) => {

  const [comment,setComment] = useState("")
  const authUser = useAuthStore((state) => state.user)
  const {isCommenting,handlePostComment} = usePostComment()
  const commentRef = useRef(null)
  const {handleLikePost,isLiked,likes} = useLikePost(post)

  const handleSubmitComment = async () =>{
    await handlePostComment(post.id,comment)
    setComment("")
  }
 
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {username}
            <Text fontSize={"sm"} fontWeight={400}>
              Feeling good
            </Text>
          </Text>
          <Text fontSize={"sm"} fontWeight={200}>
            View all 1,000 comments
          </Text>
        </>
      )}

      {authUser && (<Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup size="sm">
          <Input
            variant={"flushed"}
            placeholder={"Add a comment ...."}
            fontSize={14}
            onChange={(e) => setComment(e.target.value)}
            value = {comment}
            ref={commentRef}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              onClick={handleSubmitComment}
              isLoading={isCommenting}
            >
              {" "}
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
