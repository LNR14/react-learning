import { useEffect, useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"

const useFollowUser = (userId) => {
    const [isUpdating,setIsUpdating] = useState(false)
    const [isFollowing,setIsFollowing] =useState(false)
    const authUser = useAuthStore((state) => state.user)
    const setAutherUser = useAuthStore((state) => state.user)
    const {userProfile,setUserProfile} = useUserProfileStore();
    const showToast = useShowToast()

    const handleFollowUser = async () = {
        try{
            

        }catch(error){
            showToast("Error",error.message,"error")
        }finally{
            setIsUpdating(false)
        }
    }
    
    useEffect(() =>{
        if(authUser){
            const isFollowing = authUser.following.includes(userId)
            setIsFollowing(isFollowing)
        }
    },[authUser,userId])
  return {isUpdating,isFollowing,handleFollowUser}
}

export default useFollowUser
