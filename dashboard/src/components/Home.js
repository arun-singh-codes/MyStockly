import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
   const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryp = new URLSearchParams(location.search);
    const loginmsg = queryParams.get("msg");
    const signupmsg = queryParams.get("msg");

    if (signupmsg === "signup-success") {
      toast.success("Signup successful! Logged in automatically!");
    }
     if (loginmsg === "login-success") {
      toast.success("Login successful!");
    }
  }, [location]);
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
