const Profilepage = () => {
  console.log(" I am in the user page");

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  return (
    <>
      <div>This is the profile page</div>
    </>
  );
};

export { Profilepage };
