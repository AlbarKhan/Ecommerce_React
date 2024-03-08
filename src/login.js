import { useState } from "react";
import { userData } from "./UserData";
import { SignIn } from "./Sign";
export function Login({ setLogin, setCurrentUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassowrd] = useState(null);
  const [signIn, setSignIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    userData.forEach((user, index) => {
      if (user.username === userName && user.pin === password) {
        setLogin(true);
        setCurrentUser(user);
      } else {
        return;
      }
    });
  }
  return (
    <div>
      {
        signIn ? (
          <SignIn setSignIn={setSignIn} />
        ) : (
          <div className="loginPage">
            {" "}
            <form
              className="login-main_wrapper"
              onSubmit={(e) => handleLogin(e)}
            >
              {" "}
              <p>Login</p>{" "}
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
              <button className="">Login</button>
              <p>
                Don't have account click here to{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setSignIn(true)}
                >
                  sign in
                </span>
              </p>
            </form>
          </div>
        )
        // </div>
      }
    </div>
  );
}
