import React, { useEffect, useRef } from "react";
import "./loader.css";
const Loader = () => {
  const left = useRef();
  const right = useRef();
  const line = useRef();
  useEffect(() => {
    line.current.style.height = "80vh";
    setTimeout(() => {
      left.current.style.transform = "translateX(-100%)";
      right.current.style.transform = "translateX(100%)";
      line.current.style.opacity = "0";
    }, 1000);
    console.log(line);
  });

  return (
    <>
      <div ref={line} className="line"></div>
      <div ref={left} className="left"></div>
      <div ref={right} className="right"></div>
    </>
  );
};

export default Loader;
