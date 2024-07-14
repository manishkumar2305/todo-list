import React, { useId } from "react";

const Input = ({ label, type = "text", name, className = "", ...props }) => {
  let id = useId();
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={`${className} w-[60%] py-[11px] px-5 rounded-l-md outline-none mt-10 border-blue-800 border-2 border-r-0`}
        {...props}
      />
    </>
  );
};

export default Input;
