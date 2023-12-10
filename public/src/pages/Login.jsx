import React,{useState} from 'react';
import Logo from "../assets/images.png";
import {useNavigate} from "react-router-dom";
// import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { loginRoute } from "../utils/APIconn.jsx";

const Register = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('Before Axios: ', username, password);
  try {
    const { data } = await axios.post(loginRoute, {
      username,
      password,
    });
    if (data.status===true) {
      localStorage.setItem("chat-app-user", JSON.stringify(data.user)); // Convert to JSON string
      navigate('/chat');
    }
    if (data.status===false) {
      alert(data.msg);    
    }
  } catch (error) {
    console.error('Error during login:', error);
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
      <input type="text" value={username} name="username" class="form-control" id="username" placeholder="Enter Name" onChange={(event)=>setUsername(event.target.value)}/>
    </div>
    <div class="form-group">
      <input type="password" value={password} name="password" class="form-control" id="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
    </div>
    <button type="submit" class="btn btn-primary d-flex justify-content-center">Login</button>
  </form>

  </div>
     </>
  )
}
export default Register
