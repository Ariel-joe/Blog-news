const Button = ({ children, className = "bg-black text-white px-5 py-2" }) => {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
};

export { Button };
