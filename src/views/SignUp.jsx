import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { IoLogInOutline } from "react-icons/io5";
import AuthContext from "../context/AuthContext";
import Button from "../components/Button";
import Header from "../components/Header";

const SignUp = ({ footerNavigator, onSignUpSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await signUp(email, password);
      if (success) {
        if(onSignUpSuccess) {
          onSignUpSuccess();
        }
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-2 rounded-3xl bg-gray-200">
      <div className="flex flex-col items-center justify-center w-[600px] bg-white rounded-2xl p-4">
        <div className="rounded-full bg-gray-100 p-4 text-black mt-6">
          <IoLogInOutline size={24} />
        </div>
        <h1 className="text-black font-bold text-2xl pt-4">Create an account to continue</h1>
        <h2 className="text-gray-400 font-thin text-md mt-2">Create an account to access all features on this app</h2>
        <form className="w-3/4 pt-20 text-black" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-black font-bold text-md self-start">Email or username</label>
            <input id="email" className="bg-gray-100 rounded-lg p-2" type="email" placeholder="Enter your email or username" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password" className="text-black font-bold text-md self-start">Password</label>
            <input id="password" className="bg-gray-100 rounded-lg p-2" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="repeat-password" className="text-black font-bold text-md self-start">Repeat password</label>
            <input id="repeat-password" className="bg-gray-100 rounded-lg p-2" type="password" placeholder="Enter your password again" value={passwordRepeat} onChange={(e) => {
                setPasswordRepeat(e.target.value);
                if (e.target.value !== password) {
                    setError("Passwords do not match");
                } else {
                    setError("");
                }
            }} />
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full mt-4 mb-8 p-4 rounded-2xl bg-blue-700 text-white font-bold" onClick={() => {}}>Sign in</Button>
          </div>
        </form>
      </div>
      <p className="text-gray-600 font-bold text-sm mt-4 mb-2">Already have an account? {footerNavigator}</p>
    </div>
  )
}

export default SignUp;