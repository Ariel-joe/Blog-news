import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getusers = async () => {
      const response = await fetch("http://localhost:8080/api/users", {
        credentials: "include",
      });

      if (response.ok) {
        const { data } = await response.json();

        setUsers(data);
      }

      setUsers(result);
    };

    getusers();
  }, []);
  return (
    <>
      {users.length > 0
        ? users.map((user) => (
            <li>
              {user.name} - {user.phone} - {user.role}
            </li>
          ))
        : "No user found"}
    </>
  );
};

export { UsersPage };
