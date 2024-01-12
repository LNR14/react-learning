import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="as a programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          as a programmer_
        </Text>
      </Flex>
      <Link
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        {" "}
        Logout
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
