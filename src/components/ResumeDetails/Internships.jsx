import  { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../UI/Modal'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import { useUser } from '../../hooks/useUser'
import useResume from '../../hooks/useResume'
import { db } from '../../firebase/Firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

function Internships() {
  const {data:user }=useUser()
  const {resumeid}=useParams()
  const {data:allResume}=useResume()
  const [isOpen,setIsOpen]=useState(false)
const {register,handleSubmit,formState:{errors}}=useForm()
console.log(allResume)
const currentResume=allResume?.find((resume)=>resume.id===resumeid)
async function submitHandler(data){
console.log(data)
setIsOpen(false)
const docRef=doc(db,`users/${user.uid}/resumeCollection/${resumeid}`)
const docData=getDoc(docRef)
if(docData.exists()){
await updateDoc(docData,{internshipDetails:data})
}
else{
  await setDoc()
}
}
  return (

  <section className="h-full flex flex-col gap-4 justify-start items-center py-10 ">
  <div className='flex flex-col gap-3 justify-center items-center mb-3'>
   
    <motion.button
    onClick={()=>setIsOpen(true)}
    initial={{opacity:0,scale:0.8 }}
    animate={{opacity:1,scale:1}}
    transition={{type:"spring",duration:0.5}}
     className='flex items-center justify-center bg-violet-500 text-2xl font-bold text-white h-20 w-20 rounded-full p-4 '>
    +
    </motion.button>
      <h1 className='text-xl font-semibold'>Add Internship</h1>
      <button className='bg-violet-500 disabled:bg-gray-500 text-white px-5 py-2 rounded-lg'>Save & Next</button>

  </div>
  <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
  <motion.form onSubmit={handleSubmit(submitHandler)}
   className='grid grid-cols-12 gap-2 px-10 py-10 lg:w-[800px]'>
    
  <Input 
      label="Company/Organisation"
      error={errors.company}
      placeholder="Company name"
      col="col-span-12"
      isRequired={true}
      {...register("company",{
        required:{
          value:true,
          message:"company name is required"
          }
      })}
    /> <Input 
      label="Role"
      error={errors.role}
      placeholder="eg.Fullstack developer"
      col="col-span-12"
      isRequired={true}
      {...register("role",{
        required:{
          value:true,
          message:"role is required"
          }
      })}
    />
  <div className='col-span-6 lg:col-span-3 flex flex-col ' >
  <label>From</label>
  <input 
  type="date" 
  className='w-full py-4 px-4 outline-none focus:border-slate-400 border-2 border-gray-200 rounded-md '
    {...register("from",{
      required:{
        value:true,
        message:"date is required"
        }
    })}
  />

  </div>
  <div className='col-span-6 lg:col-span-3 flex flex-col ' >
  <label>To</label>
  <input 
  type="date" 
  className='w-full py-4 px-4 outline-none focus:border-slate-400 border-2 border-gray-200 rounded-md '
    {...register("to",{
      required:{
        value:true,
        message:"date is required"
        }
    })}
  />
  </div>
<Input 
      label="Certificate URL"
      error={errors.certificate}
      
      col="col-span-12 lg:col-span-6" 
      isRequired={true}
      {...register("certificate")}
    />
<button 
className='bg-violet-500 disabled:bg-violet-950 px-4 py-2 rounded-md col-start-10 col-span-3 text-white '>Save</button>
  </motion.form>
  </Modal>
  </section>
  )
}

export default Internships
