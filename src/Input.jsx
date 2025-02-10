import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    onLogin=({ username, password, rememberMe });
  };


  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRememberMe(false);
  }

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />

      <br />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br />
      <label>
        <input 
          type="checkbox" 
          checked={rememberMe} 
          onChange={(e) => setRememberMe(e.target.checked)} 
        />
        Remember Me
      </label>
      <br />
      <button onClick={handleLogin} disabled={!username || !password}>
        Login
      </button>
      <button type="button" onClick= {handleReset} >Reset</button>
    </div>
  );
}

export default Login;
