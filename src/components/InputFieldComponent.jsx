/* eslint-disable react/prop-types */
import { useState } from "react";
import eyeIcon from "../assets/eyeOff.png";
import ImageComponent from "./ImageComponent";

const InputFieldComponent = ({ type, placeholder, showPasswordToggle }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-full px-4 py-2 m-2 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      {showPasswordToggle && (
        <ImageComponent
          imageUrl={eyeIcon}
          onClick={togglePasswordVisibility}
          className="absolute right-0 bottom-5 cursor-pointer"
        />
      )}
    </div>
  );
};

export default InputFieldComponent;
