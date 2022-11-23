import "./App.css";
import bg from "./images/bg.webp";
import five from "./images/five.webp";
import four from "./images/four.webp";
import three from "./images/three.webp";
import two from "./images/two.webp";
import one from "./images/one.webp";
import logo from "./images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function App() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Select, setSelect] = useState("");
  const req = { Name: Name, Number: Number, Select: Select };
  const header = {};
  const handleclick = () => {
    navigate("/Signup");
  };
  const handleregister = () => {
    console.log("insertreq",req)
    axios
      .post("http://localhost:8000/register", req, header)
      
      .then((res)=> {
        console.log("Success", res.data.insertId);
       localStorage.setItem("passing",res.data.insertId);
      
      })
      .catch();
      navigate("/Register");
     };

  return (
    <>
      <div className="Header">
        <div className="Header_left">
          <img className="Header_left_img" src={logo} />
          <div className="Header_left_txt">
            <label className="Header_left_txt_l1">ChristianMatrimony.com</label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="Header_right">
          <label className="Header_right_txt">Already a member?</label>
          <button
            onClick={() => {
              handleclick();
            }}
          >
            Log In
          </button>
        </div>
      </div>
      <div className="Middle" style={{ backgroundImage: `url(${bg})` }}>
        <div className="Middle_box">
          <div className="Middle_box_r1">
            <label>
              No. 1 and official matrimony service exclusively for Christians
            </label>
            <div className="Middle_box_r2">
              <label>Meet your Christian soulmate here!</label>
            </div>
          </div>
          <div className="Middle_box_r3">
            <div className="Middle_box_col1">
              <label>Matrimony Profile For</label>
              <select
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
              >
                <option>SELECT</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Friend</option>
              </select>
            </div>
            <div className="Middle_box_col2">
              <label>Name</label>
              <input
                placeholder="Name"
                type={"text"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="Middle_box_col3">
              <label>Mobile Number</label>

              <input
                placeholder="Mobile Number"
                type={"text"}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                handleregister();
              }}
            >
              Register Free
            </button>
          </div>
          <label className="Middle_box_r4">
            By clicking on Register Free, you agree to
            <span> Terms & Conditions </span> and <span> Privacy Policy</span>
          </label>
        </div>
      </div>
      <div className="Footer">
        <div className="Footer_r1">
          <ul>
            <li>
              <div>
                <img src={one} />
              </div>
              <label>
                10+ years of service in helping Christians cherish the meaning
                of Happy marriage
              </label>
            </li>
            <li>
              <div>
                <img src={two} />
              </div>
              <label>
                2 Lakh+ people have found their life partner using our services
              </label>
            </li>
            <li>
              <div>
                <img src={three} />
              </div>
              <label>
                2020's winner of 'India's Growth Champions Award' by The
                Economic Times
              </label>
            </li>
            <li>
              <div>
                <img src={four} />
              </div>
              <label>
                1 Lakh+ genuine profiles with 100% verified phone numbers
              </label>
            </li>
            <li>
              <div>
                <img src={five} />
              </div>
              <label>130+ branches across India to serve you better</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
