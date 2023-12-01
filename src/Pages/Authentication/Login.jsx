// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import MainNav from "../../Components/Nav/MainNav";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password);
  };

  return (
    <div className="max-w-screen-xl mx-auto ">
      <MainNav></MainNav>
      <div className="grid justify-center">
        <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <h3 className="text-3xl font-semibold text-center mt-20">
            Login your account
          </h3>
          <div className=" h-[1px] bg-gray-100  my-10 w-3/4 mx-auto"></div>

          <form onSubmit={handleLogin} className="px-16">
            <div className="mb-6">
              <h4 className="text-xl font my-4">Your Email</h4>
              <input
                type="email"
                name="email"
                placeholder="name@gmail.com"
                className="w-full px-5 bg-Dark01 rounded py-3"
              />
            </div>
            <div className="mb-6">
              <h4 className="text-xl font my-4">Your Password</h4>
              <div className="flex">
                <input
                  type="password"
                  name="password"
                  placeholder="* * * * * * * "
                  className="w-full px-5 bg-Dark01 rounded py-2 pt-4"
                />
                {/* <FaEyeSlash /> : <FaRegEye /> */}
              </div>
              <label className="label">
                <Link to="#" className="mt-1 link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control">
              <button
                className="btn btn-sm h-10 w-full mt-6  text-white bg-unique hover:bg-unique1"
                type="button"
              >
                Register Now
              </button>
              <p className="block mt-4 font-sans text-base mb-7 antialiased font-normal leading-relaxed text-center text-gray-700">
                Don't Have An Account?
                <Link
                  to="/register"
                  className=" text-red-500 font-bold hover:underline  "
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
