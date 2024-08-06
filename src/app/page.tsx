"use client";
import { useState,FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [name, setName] = useState("");
  const {push} = useRouter();
  const hundleSublit = (e:FormEvent) => {
    e.preventDefault();
    // console.log(name);
    push(`/info/${name}`);
  };
  return (
    
      <div className=" flex item-center justify-center bg-gray-200">
        <div className="p-4 shadow-md bg-white rounded-md">
      <h1 className="mb-4 text-semibold text-black text-2xl">Enter Your Name</h1>
      <form onSubmit={hundleSublit}>
      <input
       type="text" 
      //  value={name}
       placeholder="Enter Your Name....  "
       onChange={(e)=>setName(e.target.value)}
       className="w-full border border-gray-200 rounded text-black p-2"
       />     
       <button className="text-center text-blue-500 hover: bg-black hover:bg-orange-500   hover:text-black font-bold rounded-full block mt-4 p-2 w-full">Predict </button>
      </form>
      </div>
      </div>
    
  );
}
