import * as React from "react";

export default function Button({
  children = null,
  className,
  onClick,
  icon = null,
  disabled = undefined
}) {
  return (
    <button
      className={`${className} bg-indigo-500 hover:bg-indigo-800 rounded h-10 font-bold px-5 flex justify-center items-center`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{icon && icon}</span>
      {children && children}
    </button>
  );
}
