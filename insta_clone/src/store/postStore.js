import {create} from "zustand"

const usePostStore = create((set) => ({
    posts:[],
    createPost:(post) => set(state => ({ posts :[post, ...state.posts]})),
    addPost:(post) => set(state => ({
        userProfileState:{...state.userProfile, posts:[post.id,...state.userProfile.posts]}
    }))
    //deletePost
    //addComment
    //setPosts
}))

export default usePostStore