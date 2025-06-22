const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex border rounded-lg border-[#F75550]  p-2  items-center  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
