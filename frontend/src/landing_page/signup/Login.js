import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Login({ handleForm }) {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
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
        .post("http://localhost:2000/auth/login", formData)
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            window.location.href = "http://localhost:3005/?msg=login-success";
            localStorage.setItem("token", res.data.token); // optional // or wherever
          } else {
            toast.error(res.data.message || "Invalid Email or Password");
          }
        })
        .catch((err) => console.error(err));

      
      console.log("Server Response:", response.data);
      setFormData({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("Error Occurred:", err);
    }
  };


  return (
    <div className="hero-signupForm" style={{ height: "17rem" }}>
      <h1 className="forh1">Login on MyStockly</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="signup-form-inputs">
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleOnChange}
            value={formData.email}
          />
          <TextField
            id="outlined-basic"
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleOnChange}
            value={formData.password}
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
          marginTop: "-0.6rem",
        }}
      >
        <p className="smalltext">
          Create an Account?{" "}
          <a href="#"
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleForm}
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
}
