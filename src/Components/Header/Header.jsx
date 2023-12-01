import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <p className="leading-8  mt-4  text-[18px] text-Dark">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium mt-2">
        {moment().format("dddd , MMMM DD, YYYY")}
      </p>

    </div>
  );
};

export default Header;
