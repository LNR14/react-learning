import {auth} from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const useSignupWithEmailAndPass = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  return ()
}

export default useSignupWithEmailAndPass