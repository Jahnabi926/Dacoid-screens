/* eslint-disable react/prop-types */

const Link = ({
  onClick,
  text,
  targetId,
  url,
  applyPositionStyles = false,
}) => {
  const dynamicPositionStyles = applyPositionStyles
    ? {
        position: "absolute",
        top: 4,
        right: 4,
      }
    : {};

  const textColor =
    text === "Forgot your password ?" ? "text-[#7F7F7F]" : " text-[#9FB2FF]";

  const handleClick = (event) => {
    if (targetId) {
      // Internal navigation to targetId using smooth scrolling
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (targetId) {
    return (
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        className={`${textColor} underline text-sm`}
        style={dynamicPositionStyles}
      >
        {text}
      </a>
    );
  } else if (url) {
    return (
      <a
        href={url}
        className={`${textColor} underline text-sm`}
        style={dynamicPositionStyles}
      >
        {text}
      </a>
    );
  }

  return (
    <a
      href="#"
      className={`${textColor} underline text-sm`}
      style={dynamicPositionStyles}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default Link;
