import React from 'react'

function EducationCard({education}) {
  return (
    <div className='grid grid-cols-12 rounded-lg px-5 py-5 w-[90%] lg:w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2) ]'>
      <div className='flex flex-col col-span-7 lg:col-span-10 gap-3'>
       <h1 className='text-2xl font-bold text-violet=600'>{education.qualification}</h1>
       <h2 className='text-base font-semibold '>{`${education.course},${education.branch}`}</h2>
       <p>{education.institute}</p>
      </div>
      <div className="grid grid-rows-8 col-span-5 lg:col-span-2">
        <div className='row-span-2 text-sm grid place-items-center'>{education.pass}</div>
        <div className='grid row-span-4 text-2xl font-bold place-items-center'>{education.grades}</div>
        <div className='row-span-2 flex justify-center items-centergap-5'>
            <button className='text-xl text-violet-500 h-10 w0'></button>
            <button></button>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
