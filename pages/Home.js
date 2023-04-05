import axios, { Axios } from "axios"
import style from "../styles/Home.module.css"
import {useState } from "react"
import Data from "./Data"
import { useRouter } from "next/router";



export default function Crud() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
   
    const header = {"Access-Control-Allow-Origin": "*" }
    const history = useRouter()
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("hello")
        if (name === '' || email === '') {
          alert("Fill all field are Mandatery")    
        }
        else {
       
           axios.post('https://63b3f04b9f50390584a1fcc1.mockapi.io/crud', {  
              name: name,
              email: email,
              header,
            })
              .then(() => {
                history.push('/Data')
              })       
        }
      };
    return (
        <>
        <form className={style.data} >        
       <input type="text" placeholder="Enter your Name" className="name"  onChange={(e) => setName(e.target.value)}/>
       <input type="email" placeholder="Enter your email" className="email"  onChange={(e) => setEmail(e.target.value)}/>
       <button type="submit" class="btn btn-primary" onClick={handlesubmit}>submit</button>
     </form>
      {/* <Data/> */}
        </>
    )
}

