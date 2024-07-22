import { useForm } from "react-hook-form";
import Input from "../Input";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { getDoc } from "firebase/firestore";
import { useUser } from "../../hooks/useUser";
import { useParams } from "react-router-dom";

function BasicDetails() {
  const { data: user, isLoading } = useUser();
  const { resumeid, templateid, name } = useParams();
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors, isSubmitting, },
  } = useForm();
  console.log(user);
  async function submitHandler(data) {
    console.log(data);

    const docRef = doc(db, `users/${user.uid}/resumeCollection/${resumeid}`);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      await updateDoc(docRef, {
        basicDetails: data,
      });
    } else {
      await setDoc(docRef, {
        templateid,
        name,  
        basicDetails: data,
      });
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="grid grid-cols-12 p-8 gap-4 mb-8 ">
          <div className="col-span-12 text-2xl font-semibold text-violet-500 sticky top-0 left-0 bg-white mb-5">
            Basic Details
          </div>
          <Input
            error={errors.firstName}
            label="First Name"
            col="col-span-12 md:col-span-6 "
            isRequired={true}
            type="text"
            {...register("firstName", {
              required: {
                value: true,
                message: "firstname is required",
              },
            })}
          />
          <Input
            error={errors.lastName}
            label="Last Name"
            col="col-span-12 md:col-span-6"
            isRequired={true}
            type="text"
            {...register("lastName", {
              required: {
                value: true,
                message: "lastname is required",
              },
            })}
          />

          <Input
            error={errors.course}
            label="course"
            col="col-span-12 md:col-span-4"
            isRequired={true}
            type="text"
            {...register("course", {
              required: {
                value: true,
                message: "course is required",
              },
            })}
          />
          <Input
            error={errors.branch}
            label="Branch"
            col="col-span-12 md:col-span-4"
            isRequired={true}
            type="text"
            {...register("branch", {
              required: {
                value: true,
                message: "branch is required",
              },
            })}
          />
          <Input
            error={errors.collegeName}
            label="college"
            col="col-span-12 md:col-span-4"
            isRequired={true}
            type="text"
            {...register("collegeName", {
              required: {
                value: true,
                message: "college name is required",
              },
            })}
          />
          <Input
            error={errors.specialization}
            label="Specialization"
            col="col-span-12 md:col-span-4"
            isRequired={false}
            type="text"
            {...register("specialization")}
          />
          <Input
            error={errors.age}
            label="Age"
            col="col-span-12 md:col-span-4"
            isRequired={true}
            type="number"
            {...register("age", {
              required: {
                value: true,
                message: "age is required",
              },
            })}
          />

          <p className="text-3xl col-span-12 mb-8 ">Contact information:</p>

          <Input
            error={errors.linkedIn}
            label="LinkedIn"
            col="col-span-12 md:col-span-4"
            isRequired={true}
            type="text"
            {...register("LinkedIn", {
              required: {
                value: true,
                message: "LinkedIn is required",
              },
            })}
          />
          <Input
            error={errors.Github}
            label="Github"
            col="col-span-12 md:col-span-4"
            isRequired={false}
            type="text"
            {...register("Github")}
          />
          <Input
            error={errors.phonenumber}
            label="Phone Number"
            col="col-span-12 md:col-span-4"
            isRequired={true}
            type="number"
            {...register("phonenumber", {
              required: {
                value: true,
                message: "PhoneNumber is required",
              },
            })}
          />
          <Input
            error={errors.email}
            label="email"
            col="col-span-12 md:col-span-6"
            isRequired={true}
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
            })}
          />
          <Input
            error={errors.portfolio}
            label="portfolio"
            col="col-span-12 md:col-span-6"
            isRequired={false}
            type="text"
            {...register("portfolio")}
          />
          <button
            disabled={isSubmitting}
            className="bg-violet-500 text-white col-start-10 col-span-2  px-4 rounded-md py-2 disabled:bg-gray-500"
          >
            Save & Next
          </button>
        </div>
      </form>
    </section>
  );
}

export default BasicDetails;
