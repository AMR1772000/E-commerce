import React from "react";
import MainImage from "../assets/images/Main.jpg";
const Main = () => {
  return (
    <>
      <div className=" flex justify-center items-center mx-4 my-2 rounded-lg">
        <img className="h-[500px] w-full rounded-lg" src={MainImage} alt="wallpaper" />
      </div>
    </>
  );
};

export default Main;
