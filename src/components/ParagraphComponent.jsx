/* eslint-disable react/prop-types */

const ParagraphComponent = ({ text, position }) => {
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

  return <p className={`text-gray-600 ${alignmentClass}`}>{text}</p>;
};

export default ParagraphComponent;
