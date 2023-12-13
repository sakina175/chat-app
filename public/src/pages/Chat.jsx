import React,{useState,useEffect} from 'react'
import "../App.css";
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import { allUsersRoute } from "../utils/APIconn.jsx";
import Contact from "../component/Contact.jsx";

export default function Chat() {
  const [contacts,setContacts]=useState([])
  const [currentUser,setCurrentUser]=useState()

  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("chat-app-user")){
      navigate('/');
    }
    else{
      setCurrentUser(JSON.parse(localStorage.getItem("chat-app-user")))
    }
  },[])

  useEffect(()=>{
    const fetchData=async()=>{
      if(currentUser){
        if(currentUser.isAvatarImageSet){
          const data=await axios.get(`${allUsersRoute}/${currentUser._id}`)
          console.log("contacts are ",data.data);
          setContacts(data.data)
        }
        else{
          navigate('/setAvatar')
        }
      }
    }
    fetchData();
  },[])

  return (
    <div className="container01">
      <div className="container-chat">
        <Contact contacts={contacts} currentUser={currentUser}/>
      </div>
    </div>
  )
}
