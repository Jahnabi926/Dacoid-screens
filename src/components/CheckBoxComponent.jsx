/* eslint-disable react/prop-types */
import { useState } from "react";

const CheckBoxComponent = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2 m-2">
      <input
        type="checkbox"
        className="form-checkbox text-blue-500 focus:ring-blue-400"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label && <span className="text-xs text-gray-700">{label}</span>}
    </label>
  );
};

export default CheckBoxComponent;
