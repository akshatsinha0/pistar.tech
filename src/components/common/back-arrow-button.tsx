"use client";
import React from "react";
type Props=React.ButtonHTMLAttributes<HTMLButtonElement>;
const BackArrowButton:React.FC<Props>=({className,style,...rest})=>{
  const cls=['btn-back-arrow',className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} style={{position:'absolute',left:6,top:2,zIndex:5,...(style||{})}} {...rest}>
      <i className="bi bi-arrow-left"></i>
    </button>
  );
};
export default BackArrowButton;
