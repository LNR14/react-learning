import { Link as RouterLink, useParams} from "react-router-dom";
import { Container, Flex, Text, Link, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";

const ProfilePage = () => {
  const {username}= useParams()
  const {isLoading, userProfile} = useGetUserProfileByUsername(username)
  const userNotFound = !isLoading && !userProfile

  if(userNotFound) return <UserNotFound />

  return (
    <Container maxW="container.lg" py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        mx={"auto"}
        flexDirection={"column"}
      >
      {!isLoading && userProfile &&  <ProfileHeader />}
      {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px Solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

//skeleton header for the profile 
const ProfileHeaderSkeleton = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
};



// User not found
const UserNotFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"}>
			<Text fontSize={"2xl"}>User Not Found</Text>
			<Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
				Go home
			</Link>
		</Flex>
	);
};