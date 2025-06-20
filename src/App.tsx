/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import logo_black from "./assets/logo_pz_black.png";
import Logo from "./assets/logo.svg?react";

import avatar from "./assets/avatar.png";

function App() {
  return (
    <div className="">
      <div className="flex justify-center py-8 ">
        <Logo className="w-10 h-10 text-secondary" />
      </div>
      <div className="flex justify-center border gap-[1vw]">
        <div className="border">
          <h1 className=" text-6xl text-secondary font-schabo">
            Hello, I'm Pascal, a Web Developper.
          </h1>
          <p className="font-outfit text-fourth">from Paris, France</p>
        </div>
        {/* <div className="border rounded-4xl rounded-tl-none bg-orange-400 h-[60vh] w-[40vw]">
          <img className="w-xl" src={avatar} alt="avatar" />
        </div> */}
        {/* <div className="bg-blue-600 h-"></div> */}
        <div
          className="w-[400px] h-[300px] bg-blue-500 "
          style={{
            clipPath: "path('M 0 L 10 50 L 100 Z')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
