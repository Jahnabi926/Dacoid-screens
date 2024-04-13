/* eslint-disable react/prop-types */

const Card = ({ children }) => {
  return (
    <div className="max-w-sm lg:w-1/2 xl:w-1/3 m-5 p-6 bg-white border border-gray-200 rounded-lg shadow relative h-fit">
      {children}
    </div>
  );
};

export default Card;
