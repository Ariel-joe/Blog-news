const Button = (props) => {
  console.log(props);

  return (
    <button
      style={{
        backgroundColor: `${props.bgColor ? props.bgColor : "blue"}`,
        color: "white",
        padding: "10px 15px",
      }}
    >
      {props.children}
    </button>
  );
};

export { Button };
