import { useState } from "react";
import Modal from "../UI/Modal";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { db } from "../../firebase/Firebase";
import { useUser } from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import useResume from "../../hooks/useResume";
import EducationCard from "../UI/EducationCard";
function Education() {
  const { data: user } = useUser();
  const { data: allresumes, isLoading } = useResume();
  const { resumeid, templateid, name } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [modal, setModal] = useState(false);
console.log(allresumes)
  const currentResume = allresumes?.find((resume) => {
    return resume.id === resumeid;
  });
  console.log(currentResume);
  async function submitHandler(data) {
    setModal(false);
    const docRef = doc(db, `users/${user?.uid}/resumeCollection/${resumeid}`);
    const docsSnapshot = await getDoc(docRef);
    const existingData = docsSnapshot.data() || [];
    // const updatedData = existingData.educationDetails
    //   ? [...existingData.educationDetails, data]
    //   : [data];
    if (docsSnapshot.exists()) {
      await updateDoc(docRef, {
        educationDetails:[...existingData.educationDetails,data],
      });
    } else {
      await setDoc(docRef, {
        templateid,
        name,
        educationDetails:[data],
      });
    }
  }
 
  return (
    <section className="flex flex-col gap-4 overflow-x-hidden py-10  ">
      <div className="flex justify-center items-center flex-col gap-3 mb-3">
        <button
          onClick={() => setModal(true)}
          className="bg-violet-500 text-2xl font-bold text-white h-20 w-20 rounded-full p-4 flex justify-center items-center "
        >
          +
        </button>
        <h1 className="text-xl font-semibold ">Add Education</h1>
        <button className="bg-violet-500 text-white px-4 py-2 rounded-md ">
          Save & Next
        </button>

      </div>
      {
        currentResume.resumedata?.educationDetails?.map((education,index)=>{
          return <EducationCard education={education} key={index}/>
        })
      }
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-12 gap-2 px-10 py-10 lg:w-[800px]"
        >
          <Input
            label="Qualifications"
            error={errors.qualification}
            placeholder="eg:Graduation"
            col="col-span-12"
            {...register("qualification", {
              required: {
                value: true,
                message: "qualification is required",
              },
            })}
          />
          <Input
            label="Course"
            error={errors.course}
            placeholder="eg.BTech"
            col="col-span-12 lg:col-span-6"
            {...register("course", {
              required: {
                value: true,
                message: "course is required",
              },
            })}
          />

          <Input
            label="Branch"
            error={errors.branch}
            placeholder="eg. Ece "
            col="col-span-12 lg:col-span-6"
            {...register("branch", {
              required: {
                value: true,
                message: "branch is required",
              },
            })}
          />
          <Input
            label="Institute"
            error={errors.institute}
            placeholder="eg. institute"
            col="col-span-12 lg:col-span-6"
            {...register("institute", {
              required: {
                value: true,
                message: "institute is required",
              },
            })}
          />
          <Input
            label="CGPA/%"
            type="number"
            error={errors.grades}
            placeholder="eg. 9.5 "
            col="col-span-12 lg:col-span-6"
            {...register("grades", {
              required: {
                value: true,
                message: "grades is required",
              },
            })}
          />
          <Input
            label="Passing Year"
            type="number"
            error={errors.pass}
            placeholder="eg. 2025 "
            col="col-span-12 lg:col-span-6"
            {...register("pass", {
              required: {
                value: true,
                message: "Year is required",
              },
            })}
          />
          <button className="bg-violet-500 px-4 py-2 rounded-md lg:col-start-10 lg:col-span-3 col-span-12 lg:row-start-5">
            Submit
          </button>
        </form>
      </Modal>
    </section>
  );
}

export default Education;
