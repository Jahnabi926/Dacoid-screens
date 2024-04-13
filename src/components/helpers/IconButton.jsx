/* eslint-disable react/prop-types */

const IconButton = ({ onClick, imageUrl, applyPositionStyles = false }) => {
  const dynamicPositionStyles = applyPositionStyles
    ? {
        position: "absolute",
        bottom: 0,
        right: 4,
        border: "none",
      }
    : {};

  return (
    <div className="pt-10">
      <button
        className="focus:outline-none border-[#7F7F7F] bg-transparent"
        style={dynamicPositionStyles}
        onClick={onClick}
      >
        <img src={imageUrl} alt="Button" />
      </button>
    </div>
  );
};

export default IconButton;
