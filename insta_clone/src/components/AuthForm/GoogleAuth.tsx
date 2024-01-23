import { Text,Flex,Image } from "@chakra-ui/react"
const GoogleAuth = () => {
  return (
    <>
     <Flex>
            <Image src="/google.png" width={5} alt="google logo" />
            <Text mx="2" color={"blue.500q"}>
              Login with Google
            </Text>
          </Flex></>
  )
}

export default GoogleAuth