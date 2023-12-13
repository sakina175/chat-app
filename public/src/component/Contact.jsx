import React,{useState,useEffect} from 'react'
import Logo from "../assets/images.png";
import './Contact.css'
export default function Contact({contacts,currentUser}) {
    const [currentUserName,setCurrentUserName]=useState(undefined)
    const [currentUserImage,setCurrentUserImage]=useState(undefined)
    const [currentSelected,setCurrentSelected]=useState(undefined)

    // run whenever current user is changes
    useEffect(()=>{
      if(currentUser){
        setCurrentUserImage(currentUser.avatarImage)
        setCurrentUserName(currentUser.userName)
      }
    },[currentUser]) 

    const changeCurrentChat=(index,contact)=>{}

  return <>
  {
    currentUserImage && currentUserName && (
      <div className="container">
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <h3>Snappy</h3>
        </div>

        <div className="contacts">
          {
            contacts.map((contact,index)=>{
              return(
                <div className={`contact ${index===currentSelected?"selected":""
                }`} 
                key={index}>
                  <div className="avatar">
                    <img src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                     alt="" />
                  </div>
                  <div className="username">
                    <h3>contact.username</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="current-user">
          <div className="avatar">
            <img 
            src={`data:image/svg+xml;base64,${currentUserImage}`}
            alt="" />
          </div>
          <div className="username">
            <h3>currentUserName</h3>
          </div>
      </div>
      </div>
    )
  }
  </>
}
