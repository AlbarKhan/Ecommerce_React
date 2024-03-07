import { useState } from "react";
import { userData } from "./UserData";
export function SignIn({ setSignIn, setUserData }) {
  const [username, setUserName] = useState("");
  // const [usersData, setUserData] = useState(userData);
  const [pin, setPin] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  function handleSignIn(e) {
    e.preventDefault();
    if (!username || !pin || !confirmPassword) return;
    if (pin !== confirmPassword) {
      alert("Password Don't Match");
      return;
    }
    const newUser = { username, pin, admin: false };
    userData.push(newUser);
    alert("Account has Been created");
    setSignIn(false);
  }
  return (
    <div className="loginPage">
      {/* <div className="login-main_wrapper"> */}
      <form
        className="login-main_wrapper"
        onSubmit={(e) => {
          handleSignIn(e);
        }}
      >
        <p>Sign in</p>
        <input
          placeholder="Email id"
          value={username}
          autoComplete="username"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          //   value={pin}
          autoComplete="current-password"
          onChange={(e) => setPin(Number(e.target.value))}
        ></input>
        <input
          placeholder="confirm password"
          type="password"
          //   value={confirmPassword}
          autoComplete="current-password"
          onChange={(e) => setConfirmPassword(Number(e.target.value))}
        ></input>
        <button>Login</button>
        <p>
          already have account click here to{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setSignIn(false)}
          >
            login in
          </span>
        </p>
      </form>
    </div>
  );
}
