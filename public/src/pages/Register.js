import React,{useState} from 'react';
import Logo from "../assets/images.png";
import {Link} from "react-router-dom";
// import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { registerRoute } from "../utils/APIconn.js";

const Register = () => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('Before Axios: ', username, userEmail, password);

  try {
    const { data } = await axios.post(registerRoute, {
      username,
      userEmail,
      password,
    });
    if (data.status===true) {
      localStorage.setItem("userName",data.user.username);

    }
    if (data.status===false) {
      alert(data.msg);    }
    console.log('After Axios - Data:', data);
  } catch (error) {
    console.error('Error during registration:', error);
  }

};
// const handleValidation=(event)=>{
  //   const {password,confirmPassword}=values;
  //   if(password!==confirmPassword){
  //     toast.error("not match",{
  //       position:'bottom-right',
  //       autoClose:8000,
  //       pauseOnHover:true,
  //       draggable:true,
  //       theme:"dark",
  //     });
    // }
  // }
  return (
  <>
  <div class="d-flex justify-content-center">
  <form onSubmit={(event)=>handleSubmit(event)}>
    <div className="brand">
      <img src={Logo} alt="logo"/>
      <h1 class="d-flex justify-content-center">snappy</h1>
    </div>
    
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" value={userEmail} class="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event)=>setUserEmail(event.target.value)}/>
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div class="form-group">
      {/* <label for="username">User Name</label> */}
      <input type="text" value={username} name="username" class="form-control" id="username" placeholder="Enter Name" onChange={(event)=>setUsername(event.target.value)}/>
    </div>
    <div class="form-group">
      {/* <label for="password">Password</label> */}
      <input type="password" value={password} name="password" class="form-control" id="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
    </div>
    <div class="form-group">
      {/* <label for="password">Confirm Password</label> */}
      <input type="password" value={confirmPassword} name="confirmPassword" class="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={(event)=>setConfirmPassword(event.target.value)}/>
    </div>
    <span>Already have account?<Link to="/login">login</Link></span><br/>
    <button type="submit" class="btn btn-primary d-flex justify-content-center">Register</button>
  </form>

  </div>
  {/* <ToastContainer/> */}
  {/* <ReactToastify/> */}
     </>
  )
}
export default Register
