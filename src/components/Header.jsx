import React, { useState } from "react"
import Button from "./Button"
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState(
    () => sessionStorage.getItem("currentlyLoggedInUser") || null
  );

  const handleLogOut = () => {
    sessionStorage.removeItem("currentlyLoggedInUser");
    setCurrentlyLoggedInUser(null);
  }

  const handleLogIn = () => {
    navigate("/login"); // TODO: Change to modal show
  }

  const onButtonClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else if (currentlyLoggedInUser) {
      handleLogOut();
    } else {
      handleLogIn();
    }
  }

  const getButtonLabel = () => {
    if (location.pathname !== "/") {
      return "Back to home";
    } else if (currentlyLoggedInUser) {
      return `Logout ${currentlyLoggedInUser}`;
    } else {
      return (
        <span className="flex items-end gap-2">
          Login
          <IoLogInOutline size={24} />
        </span>
      );
    }
  }

  return (
    <header className="flex fixed top-0 left-0 right-0 justify-between items-center h-[100px] z-50 bg-white text-black px-8">
      <h1 className="text-4xl font-extrabold">atlys</h1>
      <Button className="bg-transparent border-0 font-bold" onClick={onButtonClick}>{getButtonLabel()}</Button>
    </header>
  )
}

export default Header;
