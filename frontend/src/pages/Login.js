const Login = (props) => {
  return ( 
    <div className="login">
      <form>
        <p>
          <input type="text" name="username"
            placeholder="Enter Username or email"
          />
        </p>
        <p>
          <input type="password" name="password"
            placeholder="Password"
          />
        </p>
        <p className="submit">
          <button type="submit" name="commit" onClick={props.login}>Login</button>
        </p>
      </form>

    </div>
  );
}
 
export default Login;