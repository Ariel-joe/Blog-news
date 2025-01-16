const Button2 = ({ bgColor, children }) => {
  console.log(bgColor);

  return (
    <button
      style={{
        backgroundColor: `${bgColor ? bgColor : "blue"}`,
      }}
      className="btn"
    >
      {children}
    </button>
  );
};

export { Button2 };
