import React, { useState } from 'react';
import '../../assets/Login.css';
import { Link } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"> Login</button>
      </form>
      <div className="link">
        <Link to='/ChessChampion/ForgotPassword'>Forgot Password?</Link>
        <p>New user?<Link to='/ChessChampion/Register'>Register</Link></p>
      </div>
    </div>
  );
}

export default Login;