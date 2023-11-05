import {useState} from 'react';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = function(event) {
    event.preventDefault();
    email && props.login(email, password);
  };

  return ( 
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="username"
            placeholder="Enter Username or email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </p>
        <p>
          <input type="password" name="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </p>
        <p className="submit">
          <button type="submit" name="commit">Login</button>
        </p>
      </form>

    </div>
  );
}
 
export default Login;