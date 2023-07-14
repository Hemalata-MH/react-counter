import { useState } from "react";
import "./styles.css";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitFormData = () => {
    //console.log("username : " + userName + " password : " + password);

    if (userName === "" || password === "") {
      alert("Please enter the username & password");
    } else if (userName !== "" && password !== "") {
      alert("Please proceed further");
    }
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <form
        id="loginForm"
        style={{
          border: "1px solid #800080"
        }}
      >
        <div
          style={{
            padding: "20px"
          }}
        >
          <label>Enter Username : </label>
          <input
            type="textbox"
            id="userName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <label>Enter Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <input
            value="Login"
            type="button"
            style={{
              backgroundColor: "#dda0dd",
              border: "1px solid gray",
              color: "black",
              fontWeight: "bold",
              marginLeft: "45px"
            }}
            onClick={onSubmitFormData}
          ></input>
        </div>
      </form>
    </div>
  );
}
