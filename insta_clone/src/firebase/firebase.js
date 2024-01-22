
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAUJeKJVue6n6FXqqeAV-uO9qBi7p_29fE",
  authDomain: "insta-clone-50b65.firebaseapp.com",
  projectId: "insta-clone-50b65",
  storageBucket: "insta-clone-50b65.appspot.com",
  messagingSenderId: "315357145765",
  appId: "1:315357145765:web:6ef979cec3b10ff6857b4c",
  measurementId: "G-FV0QBK4NVC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
