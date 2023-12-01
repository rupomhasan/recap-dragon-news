import { Link } from "react-router-dom";
import MainNav from "../../Components/Nav/MainNav";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
// import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const { userRegister } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);

    userRegister(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto ">
        <MainNav></MainNav>
        <div className=" max-w-xl mx-auto grid justify-center my-10 bg-base-100 shadow-2xl shrink-0">
          <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h3 className="text-3xl font-semibold text-center mt-10">
              Register your account
            </h3>
            <div className=" h-[1px] bg-gray-100 my-10  w-full"></div>
            <form
              onSubmit={handleSubmit}
              className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
            >
              <div className="mb-6">
                <h4 className="text-xl font mb-4">Your Name</h4>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="w-full px-5 bg-Dark01 rounded py-3"
                />
              </div>
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
                <h4 className="text-xl font my-4">Photo URL</h4>
                <input
                  type="file"
                  name="photo"
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
              </div>
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="w-4 h-4"
                  id="terms"
                />
                <label className="text-xl">
                  Accept
                  <Link className="font-bold hover:underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>
              <input
                value="Register"
                className="btn btn-sm h-10 w-full mt-6  text-white bg-unique hover:bg-unique1"
                type="submit"
              />
              <p className="block mt-4 font-sans text-base mb-7 antialiased font-normal leading-relaxed text-center text-gray-700">
                Already have an account?
                <Link
                  to="/login"
                  className=" text-red-500 font-bold hover:underline  "
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
