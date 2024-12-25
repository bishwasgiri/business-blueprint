import React from "react";
import Header from "./Header";
import Button from "../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="mt-1 md:mt-32 mx-auto w-[70%] grow">
        <form
          action=""
          className=" flex items-center justify-center "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start space-y-4 shadow-md p-20">
            <h1 className="text-3xl">Login</h1>
            <div className="flex flex-col items-start space-y-2">
              <label htmlFor="username" className="text-xl">
                Username:
              </label>
              <input
                type="text"
                className="border-2 border-primary p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label htmlFor="password" className="text-xl">
                Password:
              </label>
              <input
                type="password"
                className="border-2 border-primary p-3 rounded-md"
              />
            </div>
            <div>
              <Button classes="bg-action">Login</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
