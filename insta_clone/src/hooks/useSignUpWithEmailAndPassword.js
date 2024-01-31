import {auth,firestore} from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  doc, setDoc } from "firebase/firestore"; 


const useSignUpWithEmailAndPassword = () => {
  const [
    createUserWithEmailAndPassword,
    ,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const signup =async (inputs) => {
    if(!inputs.fullName  ||! inputs.username  || !inputs.email  || !inputs.password  ){
        console.log("Fill all the fields")
        return
    }
    try{
        const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
        if(!newUser && error){
            console.log(error)
            return
        }
        if(newUser){
            const userDoc ={
                uid:newUser.user.uid,
                email:inputs.email,
                username:inputs.username,
                fullname:inputs.fullName,
                password:inputs.password,
                bio:"",
                profilePicURL:"",
                followers:[],
                following:[],
                posts:[],
                createdAt:Date.now()
            }
            await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
            localStorage.setItem("user-info",JSON.stringify(userDoc))
        }
    }catch(error){
        console.log(error)

    }
  }
  return (loading,error,signup)
}

export default useSignUpWithEmailAndPassword