const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto md:px-5 p-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
