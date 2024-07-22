
import { GoogleAuthProvider } from 'firebase/auth'
import {FcGoogle} from "react-icons/fc"
import { auth } from '../firebase/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
const provider=new GoogleAuthProvider();

function Login() {
  const queryClient=useQueryClient();
  const navigate=useNavigate();
  const {data,isLoading}=useUser();

useEffect(()=>{
  if(!isLoading && data){
  navigate("/");
}
  },[data,isLoading,navigate])
 async function handleLogin(){
   await signInWithPopup(auth,provider);
queryClient.invalidateQueries({queryKey:["users"]})

 }
  return (
    <div className='flex items-center justify-center h-screen'>
      <button
       onClick={handleLogin}
      className='flex justify-center items-center text-xl gap-5  hover:bg-violet-400 hover:text-white bg-transparent border border-violet-500 rounded-md px-5 py-2 '>SignIn with google  <FcGoogle/></button>
    </div>
  )
}

export default Login
