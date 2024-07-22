

import workspace from '../assets/workspace.png'
import form from '../assets/form.jpg'
import Pdf from '../assets/pdfimg.jpg'
import resume from '../assets/resumeimg.jpg'
import { useState } from "react"


const images={
  form,
  resume,
  Pdf
}
function Homepage() {
  const [image,setImg]=useState("form");
  function handleClick(event){
    setImg(event.target.id)
  }
  return (
    <div>
      <div className="bg-violet-400 h-screen flex items-center justify-center w-screen">
        <div className="flex justify-center items-center w-1/2 h-1/2 ">
          <img src={workspace} className="w-3/4" />
        </div>

        <div className="w-1/2 ">
          <h2 className="text-5xl font-semibold text-white">
            Easy to buid your resume now
          </h2>
          <p className="text-white mt-3 text-xl ">
            Create a profressional resume for free
          </p>
          <button className="bg-white text-black font-bold rounded-lg p-2 mt-3">
            Build Now
          </button>
        </div>
      </div>
      <div className="h-screen w-screen">
        <h1 className=" text-5xl font-mono font-semibold">
          Build a perfect resume for your dream job
        </h1>
        <div className=" flex   justify-between items-center">
          <div className="h-3/4 w-1/2">
            <ul className="text-2xl mt-8 mx-4">
              <li className="mt-4">
                <button id="form" onClick={handleClick}>
                  Fill up the information
                </button>
              </li>
              <li className="mt-4">
                <button id="resume" onClick={handleClick}>
                  Generate Resume
                </button>
              </li>
              <li className="mt-4">
                <button id="Pdf" onClick={handleClick}>
                  {" "}
                  DownLoad as PDF
                </button>
              </li>
            </ul>
            <button className="bg-violet-600 px-2 py-2 text-white rounded-lg text-semibold text-sm mx-4 mt-3">
              Generate Resume
            </button>
          </div>
          <div className=" w-1/2">
            <img src={images[image]} className="h-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
