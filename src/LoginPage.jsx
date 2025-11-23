import React from "react";
import Login from "./views/Login";
import Header from "./components/Header";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Header />
      <Login footerNavigator={<a href="/signup" className="text-blue-700 font-bold">Sign Up</a>} />
    </div>
  );
};

export default LoginPage;
