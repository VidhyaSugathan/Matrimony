import "./Profile.css";
import signin from "./images/signinimg.jpg";
import logo from "./images/logo.svg";
import spimg from "./images/spimg.webp";
import logout from "./images/logout.png";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Profile() {
  const[userdetails,setUserdetails]=useState([]);
  useEffect(()=>{
    let url="http://localhost:8000/Profiles";
    let req={};
    let header={};
    axios.post(url,req,header)
    .then((res)=>{
setUserdetails(res.data);
console.log("user",res.data)
    })
    .catch()
  },[]);
  return (
    <div>
      <div className="Profile_header"style={{ backgroundImage: `url(${signin})` }}>
        
        <div class="centered">
          <div className="Centredlogo">
            <img src={logo} />
          </div>
          <div className="Centeredlabels">
          <label>MYHOME</label>
          <label>SEARCH</label>
          <label>MATCHES</label>
          <label>MAILBOX</label>
          <label>UPGRADE NOW</label>
          </div>
          <div className="Centredimg">
            <img src={logout} />
          </div>
        </div>
        <div className="search"><button>SEARCH</button></div>
      </div>
      <div className="Page">
        {userdetails.map((itm,index)=>{
     return(
<div className="box" >
          <label>{itm.txtUserName}</label>
          <div className="Profile">
            <div className="Profile_pic">
              <img src={spimg} />
            </div>
            <div className="Profiledetails">
              <label>26 Years, </label>
              <label>Mumbai</label>
              <label>{itm.txtReligion},{itm.txtCaste}</label>
              <label>Bhumihar</label>
              <label>{itm.txtMothertounge}-UP/UK</label>
              <label>{itm.txtEducation}</label>
              <label>{itm.txtProfession}</label>
              <label>₹0 - 1 Lakh</label>
              <label>Never Married</label>
            </div>
          </div>
        </div>
     )
     })}
        
      </div>
    </div>
  );
}
