import { useState } from "react";
import { userData } from "./UserData";
export function Login({ setLogin, setCurrentUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassowrd] = useState(null);

  function handleLogin() {
    userData.forEach((user, index) => {
      if (user.username === userName && user.pin === password) {
        setLogin(true);
        setCurrentUser(user);
      }
    });
  }
  return (
    <div className="loginPage">
      {/* <div className="login-main_wrapper"> */}
      <form className="login-main_wrapper" onSubmit={handleLogin}>
        <p>Login</p>
        <input
          placeholder="username"
          value={userName}
          autoComplete="username"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassowrd(Number(e.target.value))}
        ></input>
        <button>Login</button>
        <p>
          Don't have account click here to{" "}
          <span style={{ color: "blue" }}>sign in</span>
        </p>
      </form>
    </div>
    // </div>
  );
}
