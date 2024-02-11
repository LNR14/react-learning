import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Text,Flex,Image } from "@chakra-ui/react"
import { getDoc, doc, setDoc} from "firebase/firestore"; 
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore"

const GoogleAuth = ({prefix}) => {

  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast()
  const loginUser = useAuthStore((state) => state.login)

  const handleGoogleAuth = async () => {
    try{
      const newUser = await signInWithGoogle()
      if(!newUser && error){
        showToast("Error",error,"error")
        return
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
			const userSnap = await getDoc(userRef);

      if(userSnap.exists()){
        const userDoc = userSnap.data();
        localStorage.setItem("user-info",JSON.stringify(userDoc))
        loginUser(userDoc)
      }else{
        const userDoc ={
          uid:newUser.user.uid,
          email:newUser.user.email,  //johnDoe@gmail.com
          username:newUser.user.email?.split("@")[0], //JohnDoe is the username
          fullname:newUser.user.displayName,
          bio:"",
          profilePicURL:newUser.user.photoURL,
          followers:[],
          following:[],
          posts:[],
          createdAt:Date.now()
      }
      
      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem("user-info",JSON.stringify(userDoc))
      loginUser(userDoc);
      }
    }catch(error){
      showToast("Error",error,"error")
    }
  }

  return (
    <>
     <Flex>
            <Image src="/google.png" width={5} alt="google logo" onClick={handleGoogleAuth}/>
            <Text mx="2" color={"blue.500q"}>
              {prefix} with Google
            </Text>
          </Flex></>
  )
}

export default GoogleAuth