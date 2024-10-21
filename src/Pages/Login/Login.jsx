import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assests/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { logIn, googleLogIn, githubLogIn } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("User Login Successful", {
          position: "top-right",
        });
        //console.log(user);
        //navigate("/");
        navigate(from ? from : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        console.error(errorCode);
      });
  };

  const handleGoogleSign = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("User Login Successful", {
          position: "top-right",
        });
        navigate(from ? from : "/");
        //console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleGitHubSignIn = () => {
    githubLogIn(githubProvider)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        navigate(from, { replace: true });
        //console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            {error}
            <p className="text-center">
              <button onClick={handleGoogleSign} className="btn btn-error">
                Google Sign in{" "}
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="btn btn-accent ml-9"
              >
                GitHub Sign in{" "}
              </button>
            </p>
            <p className="text-center">
              New User{" "}
              <Link className="font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
