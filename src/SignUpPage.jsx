import React from "react";
import SignUp from "./views/SignUp";
import Header from "./components/Header";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Header />
      <SignUp footerNavigator={<a href="/login" className="text-blue-700 font-bold">Sign In</a>} />
    </div>
  );
};

export default SignUpPage;
