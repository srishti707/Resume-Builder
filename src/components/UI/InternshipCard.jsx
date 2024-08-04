import { MdDelete, MdEdit } from "react-icons/md";

const InternshipCard = ({ internship, index, onDelete, onEdit, ...props }) => {
  return (
    <div className="grid grid-cols-12 rounded-lg px-5 py-5 w-[90%] lg:w-[80%] ">
      <div className="flex flex-col col-span-9 gap-3">
        <h1 className="text-xl lg:text-2xl font-extrabold text-violet-600">
          {internship.company}
        </h1>
        <h2 className="text-base lg:text-xl font-semibold ">
          {internship.role}
        </h2>
        <h2 className="text-sm font-semibold text-blue-500">
          <a href={internship.certificate} target="_blank">
            Certificate
          </a>
        </h2>
        {/* date section for mobile screen */}
        <div className="block lg:hidden text-sm place-items-center"> 
          {`${internship.from} to ${internship.to}`}
        </div>

      </div>
      <div className="grid col-span-3 gap-5 ">
      
        {/* date section for bigger screens */}
        <div className="hidden lg:block text-sm place-items-center"> 
          {`${internship.from} to ${internship.to}`}
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <button className="text-xl h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 text-violet-500"><MdEdit/></button>
            <button className="text-xl h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 text-red-500"><MdDelete/></button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
