import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assests/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createNewUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log("New User", user);
        toast.success("User Registration Successful", {
          position: "top-right",
        });
        updateUserProfile(name);
      })
      .catch((error) => console.error(error));
  };

  const updateUserProfile = (name) => {
    const profile = { displayName: name };
    updateUser(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
    navigate("/");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
              />
            </div>
            <p className="text-center">
              Have an account{" "}
              <Link className="font-bold" to="/login">
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
