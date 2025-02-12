import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/users`,
        {
          credentials: "include",
        }
      );

      console.log({ response });

      if (response.ok) {
        const { data } = await response.json();

        setUsers(data);
      }
    };

    getUsers();
  }, []);

  return (
    <>
      {users.length > 0
        ? users.map((user) => (
            <li>
              {user.name} - {user.phone} - {user.role}
            </li>
          ))
        : "No Users Found"}
    </>
  );
};

export { UsersPage };
