import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({children,isOpen,onClose}) {
    const dialogRef=useRef()
useEffect(()=>{
if(isOpen){
dialogRef.current.showModal()
}else{
    dialogRef.current.close()
}
},[isOpen])
  return createPortal(
  
      <dialog ref={dialogRef}
      className='relative backdrop:bg-[rgba(0,0,0,0.4)] rounded-md '>
        {children}
        <form method='dialog'
         onSubmit={onClose}
         className='absolute top-0 right-0 '>
        <button className='px-4 py-2 rounded-full m-2 flex justify-center items-center bg-red-500' >X</button>
        </form>
      </dialog>,
      document.getElementById("modal-div")
  
  )
}

export default Modal
