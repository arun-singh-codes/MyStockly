import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

export default function Signup({ handleForm }) {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  let handleOnChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  let handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:2000/auth/signup", formData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (res.data.success == true) {
            window.location.href = "http://localhost:3005/?msg=signup-success";
            localStorage.setItem("token", res.data.token); // optional
            ; // or wherever
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => console.error(err));

        

      // console.log("Server Response:", response.data.message);

      setFormData({
        email: "",
        password: "",
        username: "",
      });
    } catch (err) {
      console.log("Error Occurred:", err);
    }
  };

  return (
    <div className="hero-signupForm ">
      <h1 className="forh1">SignUp on MyStockly</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="signup-form-inputs">
          <TextField
            id="outlined-basic"
            name="username"
            label="Username"
            variant="outlined"
            onChange={handleOnChange}
            value={formData.username}
          />
          <TextField
            id="outlined-basic"
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleOnChange}
            value={formData.password}
          />
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleOnChange}
            value={formData.email}
          />
          <Button variant="contained" type="submit">
            SubmitForm
          </Button>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.4rem",
        }}
      >
        <p className="smalltext">
          Already Have an Account?{" "}
          <a
            
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleForm}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
