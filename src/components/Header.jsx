import React, { useState } from "react"
import Button from "./Button"
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
      return "Login";
    }
  }

  return (
    <header className="flex fixed top-0 left-0 right-0 justify-between items-center h-[100px] z-50 bg-white text-black px-8">
      <h1 className="text-4xl font-bold">atlys</h1>
      <Button className="bg-transparent border-0" onClick={onButtonClick}>{getButtonLabel()}</Button>
    </header>
  )
}

export default Header;
