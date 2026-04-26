
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Signup({ handleForm }) {
  const API = process.env.REACT_APP_API_URL;
    const Dashboard_url = process.env.REACT_APP_DASHBOARD_URL;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        // "http://localhost:2000/auth/signup",
        `${API}/auth/signup`,
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        toast.success("Signup successful!");

        setTimeout(() => {
          window.location.href =
            `${Dashboard_url}/?msg=signup-success`
        }, 1000);

        setFormData({
          email: "",
          password: "",
          username: "",
        });
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-signupForm">
      <h1 className="forh1">SignUp on MyStockly</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="signup-form-inputs">

          <TextField
            name="username"
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={handleOnChange}
          />

          <TextField
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleOnChange}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleOnChange}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Submit Form"}
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
          <span
            onClick={handleForm}
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}