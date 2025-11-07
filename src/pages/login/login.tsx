import "./login.css";
import loginImage from "../../assets/login.png"; // your image path
import logo from "../../assets/logo.png"; // optional logo

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-right">
        <div className="login-box">
          <img src={logo} alt="Logo" className="login-logo" />
          <h1>Welcome to Inflyx</h1>
          <h2>Login to your account</h2>
          <form>
            <div className="login-form">
              <h1>Email Address</h1>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <h1>Password</h1>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
