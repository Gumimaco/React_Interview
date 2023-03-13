import { useState, useMemo } from "react";
import UserInformation from "./UserInformation";

export default ({ setUsers }) => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  const submitUser = (e) => {
    e.preventDefault();
    if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      setUsers((previous) => [...previous, { name }]);
    }
  };

  const userData = useMemo(() => {
    return { age };
  }, [age]);

  return (
    <div style={{ background: "#2ab92a", padding: 20 }}>
      <form onSubmit={submitUser}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Type your age"
        />
        <button type="submit">Submit form</button>
      </form>
      <UserInformation data={userData} />
    </div>
  );
};
