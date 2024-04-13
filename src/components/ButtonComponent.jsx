/* eslint-disable react/prop-types */

const ButtonComponent = ({ label, onClick }) => {
  return (
    <button
      className="w-full bg-blue-500 text-white px-4 py-2 mt-20 rounded-md hover:bg-blue-600 focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
