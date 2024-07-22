import {useQuery } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/Firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

 function getData(){
    const promise=new Promise((resolve,reject)=>{
        onAuthStateChanged(auth,(userdata)=>{
            if(userdata){
                const user=userdata.providerData[0];
                const docRef=doc(db,`users/${user?.uid}`)
                onSnapshot(docRef,(docSnapshot)=>{
                        if(!docSnapshot.exists()){
                            setDoc(docRef,user).then(()=>{
                                resolve(user);
                            })
                        }
                        else{
                            resolve(docSnapshot.data());
                        }
                })
            }
            else{
                reject(new Error("user is signed out!!"))
            }
        })
    }
)
return promise;
}
export function useUser(){
    
    const {data,isLoading}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
           const userDetails= await getData()
           return userDetails;
        },
        refetchOnWindowFocus:false
    })
return {data,isLoading}
}