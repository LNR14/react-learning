import { useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import { firestore } from "../firebase/firebase"
import { arrayRemove, arrayUnion, doc,updateDoc } from "firebase/firestore"

const useLikePost = (post) => {
  const [isUpdating,setIsUpdating] = useState(false)
  const authUser = useAuthStore((state)=> state.user)
  const [isLiked, setIsLiked] = useState(post.likes.length);
  const [likes, setLikes] = useState(post.likes.includes(authUser?.uid));
  const showToast = useShowToast()

  const handleLikePost = async () =>{
    if(isUpdating) return
    if(!authUser) return showToast("Error","You must be logged in to like", "error")
    setIsUpdating(true)

    try {
        const postRef = doc(firestore,"posts",post.id)
        await updateDoc(postRef,{
            likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion (authUser.uid)
        })

        setIsLiked(!isLiked)
        isLiked? setLikes(likes-1):setLikes(likes + 1)

    } catch (error) {
        showToast("Error",error.message,"error")
    }finally{
        setIsUpdating(false)
    }
  }
  return {isUpdating, isLiked, likes, handleLikePost}
  
}

export default useLikePost
