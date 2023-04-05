
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from "./page.module.css"


const pageNo = () => {

  const[editname,setEditname]=useState("")
  const[editemail,setEditemail]=useState("")
 
  const router=useRouter();

  const pagenumber=router.query.pageNo

 useEffect(()=>{
  console.log('page',pagenumber)
  if(pagenumber !==undefined){
    const fatchdata=async()=>{
      const response=await axios.get(`https://63b3f04b9f50390584a1fcc1.mockapi.io/crud/${pagenumber}`)
      const data=await response.data;
    
      setEditname(data.name)
      setEditemail(data.email)
     }
     fatchdata();
  }
 
 },[pagenumber]);



const handlesubmit = (e) => {
  e.preventDefault();
axios.put(`https://63b3f04b9f50390584a1fcc1.mockapi.io/crud/${pagenumber}`, {           
  name: editname,
  email: editemail,     
  
})
  .then(() => { 
     router.push('/Data')
  })       
};

  return (
 <>
 <h1>{pagenumber}</h1>
      
 <form className={style.form}>
 
  <input type='text' placeholder='Enter your name' value={editname} onChange={(e)=>setEditname(e.target.value)}/>
  <input type='email' placeholder='enter your email' value={editemail} onChange={(e)=>setEditemail(e.target.value)}/>
  <button onClick={handlesubmit}>Submit</button>
 </form>
   
 </>
  )
}

export default pageNo;

