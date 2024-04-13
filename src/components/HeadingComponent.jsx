/* eslint-disable react/prop-types */

const HeadingComponent = ({ text, position }) => {
  let alignmentClass = "";

  switch (position) {
    case "center":
      alignmentClass = "text-center";
      break;
    case "left":
      alignmentClass = "text-left";
      break;
    case "right":
      alignmentClass = "text-right";
      break;
    default:
      alignmentClass = "text-left";
      break;
  }

  return <h1 className={`text-xl font-bold my-4 ${alignmentClass}`}>{text}</h1>;
};

export default HeadingComponent;
