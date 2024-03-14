import { Avatar, Flex, Text, VStack, Box, Button } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore"

const SuggestedUser = ({ user,setUser }) => {
  const {isFollowing,isUpdating,handleFollowUser} = useFollowUser(user.uid)
  const authUser = useAuthStore(state => state.user)
  const  onFollowUser = async() =>{
    await handleFollowUser();
    setUser({...user,
    followers:isFollowing ? user.followers.filter((follower) => follower.uid !== authUser.uid) : [user.followers,authUser],
    })
  }
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex align-items={"center"} gap={2}>
        <Avatar src={user.profilePicURL} size={"md"}></Avatar>
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {user.fullname}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid &&(
            <Button
              fontSize={13}
              bg={"transparent"}
              p={0}
              h={"max-content"}
              fontWeight={"medium"}
              cursor={"pointer"}
              color={"blue.400"}
              _hover={{ color: "white" }}
              onClick={onFollowUser}
              isLoading={isUpdating}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
