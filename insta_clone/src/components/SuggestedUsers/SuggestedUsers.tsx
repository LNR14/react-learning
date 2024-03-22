import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const {isLoading,suggestedUsers} = useGetSuggestedUsers();
  //optional spinner
  if(isLoading) return null
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          See all
        </Text>
      </Flex>

      {suggestedUsers.length !== 0 && (
        suggestedUsers.map(user =>(
          <SuggestedUser user ={user} key={user.id} />
        ))
      )}

      
      <Box fontSize={12} color={"gray.500"} mt={5}>
        © 2023 Built By{" "}
        <Link
          href="https://github.com/LNR14"
          target="blank"
          color="blue.500"
          fontSize={14}
        >
          LNR
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
