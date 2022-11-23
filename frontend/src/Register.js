import "./Register.css";
import logo from "./images/logo.svg";
import pic from "./images/pic.webp";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Register() {
  const [dob, setDob] = useState("");
  const [rel, setRel] = useState("");
  const [cas, setCas] = useState("");
  const [mot, setMot] = useState("");
  const [eml, setEml] = useState("");
  const [pas, setPas] = useState("");

  const [Array1, setMothertoungue] = useState([]);
  const [Array2, setReligion] = useState([]);
  const [Array3, setArray3] = useState([]);

  const continueHandleClick = () => {
    var id=localStorage.getItem("passing")
    console.log("id",id)
    let url4 = "http://localhost:8000/update";
    let req4 = { 
      date:dob,
      religion :rel,
      caste:cas,
      mother:mot,
      email:eml,
      password:pas,
      id:id
     };
console.log(req4)
    let header4 = {};
    axios.post(url4, req4, header4)
      .then((res) => {
        console.log("Continue", res.data);
      })
      .catch();
  }

  const Caste = (id) => {
    let url3 = "http://localhost:8000/fetchcaste";
    let req3 = { idx: id };
    let header3 = {};
    axios.post(url3, req3, header3)
      .then((res) => {
        setArray3(res.data);
        console.log("caste", res.data);
      })
      .catch();
  }

  useEffect(() => {
    let url = "http://localhost:8000/fetchmother";
    let req = {};
    let header = {};
    axios.post(url, req, header)
      .then((res) => {
        setMothertoungue(res.data);
        console.log(res.data);
      })
      .catch();
    let url1 = "http://localhost:8000/fetchreligion";
    let req1 = {};
    let header1 = {};
    axios.post(url1, req1, header1)
      .then((res) => {
        setReligion(res.data);
        console.log(res.data);
      })
      .catch();
  }, []);
  return (
    <div className="Register_Container">
      <div className="Reg_up">
        <div className="Reg_up_pic">
          <img src={logo} />
        </div>
        <div className="Reg_up_wrtn">
          <label className="Christian">Christian.Matrimony.com</label>
          <label className="Matrimony">From Matrimony.com Group</label>
        </div>
      </div>
      <div className="Reg_Right">
        <label>
          Great! You have completed <b>20%</b>
        </label>
      </div>
      <div className="Reg_Box">
        <div className="Reg_Box_Left">
          <img src={pic} />
          <label>Trusted by Christians across the world</label>
        </div>
        <div className="Reg_Box_Right">
          <div className="Reg_Box_Right_1">
            <label>Please provide us with your basic details</label>
          </div>
          <div className="Reg_Box_Right_2">
            <label>Date of birth</label>
            <input type={"text"} onChange={(e) => { setDob(e.target.value) }} />
          </div>
          <div className="Reg_Box_Right_2">
            <label>Denomination</label>
            <select
              onClick={(e) => {
                Caste(e.target.value);
              }}
              onChange={(e) => { setRel(e.target.value) }}
            >
              <option>select</option>
              {Array2.map((itm, index) => {
                return (
                  <>
                    <option value={itm.id}>{itm.txtReligion}</option>
                  </>
                );
              })};
            </select>
          </div>
          <div className="Reg_Box_Right_2">
            <label>Division</label>
            {/* <input type={"text"} onChange={(e) => { setDivision(e.target.value) }} /> */}
          </div>
          <div className="Reg_Box_Right_2">
            <label>Subcaste (optional) </label>
            <select onClick={(e) => {
              Caste(e);
            }} onChange={(e) => { setCas(e.target.value) }}>
              <option>select</option>
              {Array3.map((itm, index) => {
                return (
                  <>
                    <option value={itm.id} >{itm.txtCaste}</option>
                  </>
                );
              })};
            </select>
          </div>
          <div className="Reg_Box_Right_2">
            <label>Mother Tongue</label>
            <select onChange={(e) => { setMot(e.target.value) }}><option>select</option>
              {Array1.map((itm, index) => {
                return (
                  <>
                    <option value={itm.id}>{itm.txtMothertounge}</option>
                  </>
                );
              })};
            </select>
          </div>
          <div className="Reg_Box_Right_2">
            <label>Email Id</label>
            <input type={"text"} onChange={(e) => { setEml(e.target.value) }} />
          </div>
          <div className="Reg_Box_Right_2">
            <label>Password</label>
            <input type={"text"} onChange={(e) => { setPas(e.target.value) }} />
          </div>
          <div className="Reg_Box_Right_2_button">
            <button onClick={(e) => {
              continueHandleClick(e);
            }}>CONTINUE</button>
          </div>
        </div>
      </div>
      <div className="Reg_Row3">
        <label>Copyright © 2022. All rights reserved.</label>
      </div>
    </div>
  );
}
