const Title = ({ children }) => {
  return (
    <div className="flex justify-center items-centers">
      <h1 className="text-[#6DB9EF] text-4xl font-semibold  border-b-2 border-b-black">
        {children}
      </h1>
    </div>
  );
};

export default Title;
