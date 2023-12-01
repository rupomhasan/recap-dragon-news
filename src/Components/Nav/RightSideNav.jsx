import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Swimming from "../../assets/qZone1.png";
import Class from "../../assets/qZone2.png";
import Ground from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Login with  */}
      <div className="mb-7">
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
        <div className="space-y-3 ml-1">
          <button className="flex items-center gap-1 font-bold badge rounded-none py-4 w-full ">
            <FcGoogle className="text-xl" />
            Login with Google
          </button>
          <button className="flex items-center gap-1 font-bold badge rounded-none py-4 w-full ">
            <FaGithub className="text-xl" />
            Login with GitHub
          </button>
        </div>
      </div>
      {/* Find Us on */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
        <div className=" ml-1">
          <button className="flex justify-start items-center gap-1 font-medium badge  rounded-none py-4 w-full ">
            <FaFacebook className="text-xl" />
            Facebook
          </button>
          <button className="flex justify-start items-center gap-1 border-x font-medium badge rounded-none py-4 w-full ">
            <FaTwitter className="text-xl" />
            Twitch
          </button>
          <button className="flex justify-start items-center gap-1 font-medium badge rounded-none py-4 w-full ">
            <FaInstagram className="text-xl" />
            Instagram
          </button>
        </div>
      </div>
      {/* Q-Zone */}
      <div className="bg-Dark01 py-3 px-2">
        <h2 className="text-xl font-semibold mb-5">Q Zone</h2>
        <div className="space-y-3">
          <img src={Swimming} alt="qzone1" />
          <img src={Class} alt="qzone2" />
          <img src={Ground} alt="qzone3" />
        </div>
      </div>
      <div className="bg-[url('/src/assets/bg.png')] mt-6 text-white">
        <div className="px-8 py-10 space-y-4">
          <h3 className="text-2xl font-bold leading-10 text-center">
            Create an Amazing Newspaper
          </h3>
          <p className="text-center">
            Discover thouseands of options, easy to cutomize layouts , one-click
            to import demo and much more.
          </p>
          <div className="text-center">
            <button className="btn text-white px-4   bg-unique hover:bg-unique1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
