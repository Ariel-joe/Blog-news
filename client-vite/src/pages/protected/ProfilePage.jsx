const ProfilePage = () => {
  console.log("In the profile page");

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  return <div>ProfilePage</div>;
};

export { ProfilePage };
