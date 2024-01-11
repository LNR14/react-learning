import { Box, Flex, Avatar, Tooltip } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
  CreatePostLogo,
} from "../../assets/constants";
import { CiSettings } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
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
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Burak Orkmez" src="./profilepic.png" />,
      text: "Profile",
      link: "/asaprgrammer",
    },
    {
      icon: <CiSettings />,
      text: "testing",
      link: "/test",
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
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sideBarItems.map((item, index) => (
            <div key={index} display={{ base: "block", md: "none" }}>
              <Link
                display={"flex"}
                to={item.link || null}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                {item.text}
              </Link>
            </div>
            // <Tooltip
            //   key={index}
            //   hasArrow
            //   label={item.text}
            //   placement="right"
            //   marginLeft={1}
            //   openDelay={500}
            // ></Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
