import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {


    const [inputs, setInputs] = useState({
      email: "",
      password: ""
    });
    const [showPassword,setShowPassword] =useState(false)
  return (
    <>
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
            Login
          </Button>
          </InputGroup>
  </>
  )
}

export default Login