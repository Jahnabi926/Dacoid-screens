/* eslint-disable react/prop-types */

const ImageComponent = ({ imageUrl, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={imageUrl} alt="image13" />
    </div>
  );
};

export default ImageComponent;
