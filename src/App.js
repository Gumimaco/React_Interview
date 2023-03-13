import { useState, useEffect } from "react";
import AddNewUser from "./components/AddNewUser";
import Header from "./components/Header";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((raw_json) => {
        raw_json.json().then((data) => {
          setUsers(data);
        });
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div className="App">
      {users.length !== 0 ? (
        <>
          <div>
            <Header users={users} />
          </div>
          <div>
            <AddNewUser setUsers={setUsers} />
          </div>
          <div>
            <UserList users={users} />
          </div>
        </>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
}
