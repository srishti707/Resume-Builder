
import { useState } from 'react'
import { format } from '../utils/Helper'
import Modal from '../components/UI/Modal';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Templates() {
const {register,handleSubmit,formState:{errors}}=useForm()
const navigate=useNavigate();
  const [showPreview,setShowPreview]=useState(false)
  const [createOpen,setCreateOpen]=useState(false)

  const[hovered,setHovered]=useState({
    activeIndex:0,
    hoveredArray:new Array(format.length).fill(false),
  });
  console.log(hovered.activeIndex)
  function handleEnter(index){
    setHovered((prev)=>{
      const updatedArray=[...prev.hoveredArray];
      updatedArray[index]=true;
      return{
        ...prev,
        hoveredArray:updatedArray,
      }
    })
  }
  function handlePreview(index){
  
      setHovered(prev=>{
       return {...prev,activeIndex: index}

      })
         setShowPreview(true)
       
       
  }
  function handleLeave(index){
setHovered((prev)=>{
  const updatedArray=[...prev.hoveredArray];
  updatedArray[index]=false;
  return{
    ...prev,
    hoveredArray:updatedArray,
  }
})
  }
  function submitHandler(data){
    setCreateOpen(false)
  const resumeTitle={
    ...data,
    id:crypto.randomUUID()
  }
   navigate(`/templates/${format[hovered.activeIndex].id}/${resumeTitle.id}/${resumeTitle.resumeName}/build/basicDetails`)



  }
  return (
   <section className='min-h-screen grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 p-8 py-4'>
  {format.map((type,index)=>{
        return <section key={type.id} onMouseEnter={()=>handleEnter(index)} onMouseLeave={()=>handleLeave(index)}
        className="w-[75%] relative flex flex-col justify-center rounded-md items-center gap-4">
        <img className="h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]" src={type.img}/>

        <h2>{type.formatName}</h2>
        {
          hovered.hoveredArray[index] &&  (<div className="flex flex-col gap-3 items-center justify-center
        absolute z-10 inset-0 bg-[rgba(0,0,0,0.5)]">
         <button
        onClick={()=>{
          setCreateOpen(true)
          setHovered(prev=>{
            return {
              ...prev ,
              activeIndex:index
            }
          })
        }}
          className="bg-white px-4 py-2 text-sm rounded-md hover:bg-violet-500 hover:text-white">Create</button>
        <button 
        onClick={()=>handlePreview(index)}
        className="bg-white px-4 py-2 text-sm rounded-md hover:bg-violet-500 hover:text-white">
        Preview</button>

        </div>
      
   ) }
   {showPreview && (
          <Modal isOpen={showPreview} onClose={()=>setShowPreview(false)}>

            <div className='bg-white h-screen '>
            <img src={format[hovered.activeIndex]?.img}
              className='h-full w-full'
            />
            </div>
          </Modal>
        )}
        {createOpen && (
          <Modal isOpen={createOpen} onClose={()=>setCreateOpen(false)}>

<div className='bg-white  w-[500px] p-10 flex flex-col gap-4'>
<form onSubmit={handleSubmit(submitHandler)}
className='flex flex-col gap-5'>
 <label className='text-gray-500 font-semibold'>Enter a title for your resume </label>
 <input
 className='rounded-md outline-none border-gray-200 border-2 px-5 py-2'
  placeholder="Resume title" {
...register("resumeName",{
required:{
  value:true,
  message:'Title is required'
}
})
 }/>
 <p className="text-red-500 text-xs ">{errors.resumeName?.message}</p>
 <button 
 className='px-4 py-2 bg-violet-500 text-white rounded-md w-1/2 self-end'>Create</button>
</form>

</div>
</Modal>
        )}
       
        </section>
        
    })}
   </section>
  )
}

export default Templates
