import React,{useState,useEffect} from 'react'
import Loader from "../assets/loader.png";
import {useNavigate} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { setAvatarRoute } from "../utils/APIconn.jsx";
import { Buffer } from "buffer";
import "../App.css";
export default function SetAvatar() {
  const [avatars,setAvatars]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [selectedAvatar,setselectedAvatar]=useState(undefined)

  const navigate=useNavigate()
  const api='https://api.multiavatar.com/45678945'
  const setProfilePicture=async()=>{
    if(selectedAvatar===undefined){
      alert("select any avatar")
    }
    else{
      const user = JSON.parse(localStorage.getItem("chat-app-user"));
      console.log("user id ",user._id);
      const data=axios.post(`${setAvatarRoute}/${user._id}`,{
        image:avatars[selectedAvatar]
      })
      if(data.isSet){
        user.isAvatarImageSet =true;
        user.avatarImage=data.image;
        localStorage.setItem("chat-app-user",user)
        navigate('/')
      }
    }
  }

  useEffect(()=>{
    if(!localStorage.getItem("chat-app-user")){
      navigate('/');
    }
  },[])

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer=new Buffer(image.data);        
        data.push(buffer.toString("base64"));
      }
      setAvatars(data);
      setIsLoading(false);
    };
  
    fetchData();
  }, []);
  
  return (
    <>
    {
      isLoading? <div>
        <img src={Loader} alt="loading" />
      </div>
      :
      <div className="container">
      <div className="title-container">
        <h1>pick an avatar for profile picture</h1>        
      </div>
      <div className="avatars">
        {avatars.map((avatar,index)=>{
          return(
            <div key={index} className={`avatar ${selectedAvatar===index?"selected":""}`} onClick={()=>setselectedAvatar(index) }>
              <img className="img-avatar" src={`data:image/svg+xml;base64,${avatar}`} alt="avatar"  />
            </div>
          )
        })}
      </div>
        <button className="sub-btn" onClick={setProfilePicture}>Set as profile <picture></picture></button>
    </div>

    }
    </>
     )
  }
