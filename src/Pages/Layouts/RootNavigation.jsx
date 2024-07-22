import { NavLink, Outlet } from "react-router-dom"
import logo from '../../assets/resume_icon.png'
import workspace from '../../assets/workspace.png'
import form from '../../assets/form.jpg'
import Pdf from '../../assets/pdfimg.jpg'
import resume from '../../assets/resumeimg.jpg'
import { useState } from "react"
import { useUser } from "../../hooks/useUser"
import { MdAccountCircle } from "react-icons/md"
import { FaSignOutAlt } from "react-icons/fa"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/Firebase"
import { useQueryClient } from "@tanstack/react-query"


function RootNavigation() {
 const CLIENT= useQueryClient();
  const [dropdown,setDropDown]=useState(false);
  const {data,isLoading}=useUser();
  
  console.log(data);
function handleSetDropDown(){

  setDropDown(prev=>{
 return !prev
  })
}
async function handleSignOut(){
await signOut(auth);
CLIENT.setQueryData(["users"],null)
}
  return (
    <div>
    
      <nav className="px-8 bg-white bg-opacity-35 backdrop-blur-sm z-10  py-3 sticky top-0 left-0 h-[10vh] flex items-center justify-center">
        <div className="flex justify-between items-center w-3/4 ">
            <NavLink to="/">
                <button className="">
                <img src={logo} className="h-[40px] w-[40px]"/>
                </button>
            </NavLink>
            <div className="">
                <ul className="flex gap-8 text-sm font-semibold items-center">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Templates">BuildResume</NavLink></li>
                    <li><NavLink to="/UserResume">My Resumes</NavLink></li>
                    <li>
                    {(!isLoading && data) ?(
                      <div className="h-12 w-12 relative z-10"
                      onClick={handleSetDropDown}><img 
                      className="h-full w-full rounded-full"
                       src={data.photoURL}

                       />
                        {dropdown && (
                       <div className="bg-white absolute w-80 right-0 top-[120%] py-10">
                       <div className="flex h-full w-full justify-center items-center gap-8 flex-col">
                        <img src={data.photoURL}
                          className="w-28 h-28 rounded-full"
                        />
                        {data.displayName ?<p className="text-xl font-bold ">{data.displayName} </p>:<p  className="text-xl font-bold ">{data.email}</p> }
                        <div className="flex flex-col h-full w-full p-2">
                          <button className="px-5 py-3 flex gap-2 justify-between items-center text-grey-500 hover:text-black border-b-2 border-gray-400">
                          My Account<MdAccountCircle className="text-xl text-violet-700"/></button>
                          <button
                          onClick={handleSignOut}
                           className="px-5 py-3 flex gap-2 justify-between items-center text-grey-500 hover:text-black border-b-2 border-gray-400">
                           Logout
                           <FaSignOutAlt className="text-xl text-red-500"/>
                           </button>
                          </div>
                        </div>
                       </div>

                        )
                       }
                       </div>
                    ): 
                    <NavLink to="/Login">Login</NavLink>}
                    </li>
                    
                    
                </ul>
            </div>
        </div>
      </nav>
      
      <Outlet/>
      </div>
     
  
  )
}

export default RootNavigation
