// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import Button from "@mui/material/Button";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";

// export default function Signup({ handleForm }) {
//   let [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });

//   let handleOnChange = (event) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   let handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios
//         .post("http://localhost:2000/auth/signup", formData, {
//           withCredentials: true,
//         })
//         .then((res) => {
//           console.log(res);
//           if (res.data.success == true) {
//             window.location.href = "http://localhost:3005/?msg=signup-success";
//             localStorage.setItem("token", res.data.token); // optional
//             ; // or wherever
//           } else {
//             toast.error(res.data.message);
//           }
//         })
//         .catch((err) => console.error(err));

        

//       // console.log("Server Response:", response.data.message);

//       setFormData({
//         email: "",
//         password: "",
//         username: "",
//       });
//     } catch (err) {
//       console.log("Error Occurred:", err);
//     }
//   };

//   return (
//     <div className="hero-signupForm ">
//       <h1 className="forh1">SignUp on MyStockly</h1>

//       <form onSubmit={handleFormSubmit}>
//         <div className="signup-form-inputs">
//           <TextField
//             id="outlined-basic"
//             name="username"
//             label="Username"
//             variant="outlined"
//             onChange={handleOnChange}
//             value={formData.username}
//           />
//           <TextField
//             id="outlined-basic"
//             name="password"
//             label="Password"
//             variant="outlined"
//             onChange={handleOnChange}
//             value={formData.password}
//           />
//           <TextField
//             id="outlined-basic"
//             name="email"
//             label="Email"
//             variant="outlined"
//             onChange={handleOnChange}
//             value={formData.email}
//           />
//           <Button variant="contained" type="submit">
//             SubmitForm
//           </Button>
//           <ToastContainer position="top-right" autoClose={3000} />
//         </div>
//       </form>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "0.4rem",
//         }}
//       >
//         <p className="smalltext">
//           Already Have an Account?{" "}
//           <a
            
//             style={{
//               color: "blue",
//               textDecoration: "underline",
//               cursor: "pointer",
//             }}
//             onClick={handleForm}
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Signup({ handleForm }) {
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
        "http://localhost:2000/auth/signup",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        toast.success("Signup successful!");

        setTimeout(() => {
          window.location.href =
            "http://localhost:3005/?msg=signup-success";
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