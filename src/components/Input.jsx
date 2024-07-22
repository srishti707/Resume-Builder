import  { forwardRef } from 'react'

function Input({label,error,col,isRequired,...props},ref) {
  return (
    <div className={`mb-8 text-sm ${col}`}>
    <label>{label} 
    {isRequired && <span className='text-red-500'>*</span>}</label>
      <input {...props}
        className='w-full py-4 px-4 outline-none focus:border-slate-400 border-2 border-gray-200 rounded-md'
            ref={ref}
      />
      
        {error &&
        <p className='text-xs text-red-500 '>
            {error.message}
      </p>
        }
    </div>
  )
}

export default forwardRef(Input)
