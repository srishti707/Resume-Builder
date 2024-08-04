import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { useUser } from "./useUser";
export default function useResume(){
    const {data:user}=useUser()
    const {data,isLoading}=useQuery({
        queryKey:["users","resumes"],
        queryFn:async ()=>{
            try{
                const collectionRef=collection(
                    db,
                    `users/${user?.uid}/resumeCollection`
                )
                const docSnap=await getDocs(collectionRef)
                console.log(docSnap)
                const allresumes=docSnap.docs.map((doc)=>{
                    const docData={...doc.data()}
                    return{
                        id:doc.id,
                        resumedata:docData
                    }
                })
                console.log(allresumes)
                return allresumes
            }
            catch(e){
               //..

            }
            
        }
    })
    console.log(data)
    return {data,isLoading}
}