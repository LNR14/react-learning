import { Flex, Box, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import {auth} from "../../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSideBar = pathname !== "/auth" && user;
  const canRenderNavBar = !user && !loading && pathname !=="/auth"
  const checkingUserIsAuth = !user && loading

  if(checkingUserIsAuth) return <PageLayoutSpinner />
  
  return (
    <Flex flexDir ={canRenderNavBar ? "column":"row"}>
      {/* side bar on the left */}
      {canRenderSideBar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar */}
      {canRenderNavBar ? <Navbar /> : null}
      {/* Page content on the right side  */}
      <Box flex={1} w={{ base: "calc(100% -70px", md: "calc(100%-240px" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner  = () => {
  return (
    <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
      <Spinner size='xl' />
    </Flex>
  )
}