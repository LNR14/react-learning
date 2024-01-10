import { Box, Flex, Avatar } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      test: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      test: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Burak Orkmez" src="./profilepic.png" />,
      text: "Profile",
      link: "asaprgrammer",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"WhiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"}>
        <Link
          to={"/"}
          p1={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor="pointer"
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
