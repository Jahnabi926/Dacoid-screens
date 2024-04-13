const HorizontalDivider = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <hr className="w-1/4 border-gray-300" />
      <span className="text-gray-500 font-medium">Or</span>
      <hr className="w-1/4 border-gray-300" />
    </div>
  );
};

export default HorizontalDivider;
