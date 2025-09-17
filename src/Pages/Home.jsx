import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const goLogIn = () => {
    navigate("/login");
  };
  const goRegister = () => {
    navigate("/register");
  };

  return (
    <div className="align-text-bottom text-left mt-140">
      <h3 className="font-medium text-2xl text-[#1D2226]">Welcome to PopX</h3>
      <p className="mt-[10px] text-[#1D2226]/40">
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>
      <button
        onClick={goRegister}
        className="btn text-white bg-[#6C25FF] mt-[29px] w-full rounded-[6px]"
      >
        Create Account
      </button>
      <button
        onClick={goLogIn}
        className="btn bg-[#6C25FF4B] mt-[10px] text-[#1D2226] w-full"
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;
