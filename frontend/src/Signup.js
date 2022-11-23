import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Signup() {
  const navigate = useNavigate();
  const [Matrimony, setMatrimony] = useState("");
  const [Password, setPassword] = useState("");
  const header = {};
  const req = { Matrimony: Matrimony, 
    password: Password };
  const handleclick = () => {
    axios
      .post("http://localhost:4000/login", req, header)
      .then(function (response) {console.log("response",response.data);
        if (response.data.length > 0) {
          console.log("success",response.data.length)
          navigate("/Profile");
        } else {
          console.log("No User");
          }
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  };

  return (
    <div className="Signup_Container">
      <div className="Signup_box">
        <div className="Signup_box_row1">
          <label>
            <b>Login</b>
          </label>
        </div>
        <div className="Line">
          <div className="Signup_box_row2">
            <label>Matrimony Id/Mobile No./E-mail</label>
            <input
              type={"text"}
              onChange={(e) => {
                setMatrimony(e.target.value);
              }}
            />
          </div>
          <div className="Signup_box_row2">
            <label>Password</label>
            <input
              type={"text"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="Signup_box_row3">
            <input type="checkbox" />
            <label>Keep me logged in</label>
          </div>
          <div className="Buttons">
            <button
              onClick={() => {
                handleclick();
              }}
            >
              LOGIN
            </button>
          </div>
          <div className="Signup_box_row4">
            <label>Forgot Password? | Login Via OTP</label>
          </div>
        </div>
        <div className="Footer"></div>
      </div>
    </div>
  );
}
