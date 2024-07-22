import { Outlet, useNavigate, useParams } from "react-router-dom"

import { ResumeDetails } from "../utils/Helper"
function BuildPage() {
 const {templateid,resumeid,name}= useParams();
  const navigate=useNavigate()
  return (
    <main className="relative  grid grid-cols-12 w-full h-screen">
    <aside className="md:flex hidden flex-col gap-2 rounded-md col-span-2 sticky top-[15vh]  left-0 self-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
    {ResumeDetails.map((resumedetails,index)=>
    {
      return(
        <button
        onClick={()=>navigate(`/templates/${templateid}/${resumeid}/${name}/build/${resumedetails.path}`)}
         key={index}
         className="w-full px-4 py-4 rounded-r-md  ">{resumedetails.info}</button>
      )
    })
    }
    </aside>
        <Outlet/>
    </main>
  
  
  
  )
}

export default BuildPage
