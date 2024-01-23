import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    email: "",
    password: ""
  });
  const [showPassword,setShowPassword] =useState(false)
  return (
    <>
      <Input
    placeholder="Full Name"
    fontSize={14}
    size={"sm"}
    type="text"
    value={inputs.fullName}
    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
  />
      <Input
    placeholder="Username"
    fontSize={14}
    size={"sm"}
    type="text"
    value={inputs.username}
    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
  />
    <Input
    placeholder="Email"
    fontSize={14}
    size={"sm"}
    type="email"
    value={inputs.email}
    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
  />
  <InputGroup>
  <Input
    placeholder="Password"
    fontSize={14}
    size={"sm"}
    type={showPassword ? "text":"password"}
    value={inputs.password}
    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
  />
  <InputRightElement h="full">
    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)} >
      {showPassword ?<ViewIcon />: <ViewOffIcon />}

    </Button>
  </InputRightElement>
            <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
          >
            Sign up
          </Button>
          </InputGroup>
    </>
  )
}

export default SignUp