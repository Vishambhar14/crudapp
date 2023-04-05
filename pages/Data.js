 import {  useEffect, useState } from "react"
 import axios from "axios"
import style from "../styles/Data.module.css"
import Link from "next/link";
import { useRouter } from "next/router";



export default function Data(){
    const[user,setuser]=useState([])
    
    const history=useRouter();
    function getData(){
     axios.get(`https://63b3f04b9f50390584a1fcc1.mockapi.io/crud`)
      .then((res)=>{
       setuser(res.data)
       console.log(res.data)
      });
    }
    function handledelete(id){
     axios.delete(`https://63b3f04b9f50390584a1fcc1.mockapi.io/crud/${id}`
        ).then(()=>{
          getData()
        })
    }
    useEffect(()=>{
      getData();
    },[])
   
  
      
    
    return(
       <>
       <div className="container">
   
   

    {
      user.map((v)=>{
        return(
          
            <div key={v.id} className={style.box}>
        <ul >
          <li>{v.id} </li>
          <li>{v.name}</li>
          <li>{v.email}</li>
         <li><Link href={`./user/${v.id}`}><button className={style.btn} >Edit</button></Link></li>
       <li> <button className={style.btn} onClick={()=>
          handledelete(v.id)}>Delete</button></li>

           </ul>
    </div>
          
        )
      })
    }

  </div>
  </>   
    )
}


