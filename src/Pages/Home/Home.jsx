import BreakingNews from "../../Components/Header/BreakingNews";
import Header from "../../Components/Header/Header";
import LeftSideNav from "../../Components/Nav/LeftSideNav";
import MainNav from "../../Components/Nav/MainNav";
import RightSideNav from "../../Components/Nav/RightSideNav";
import News from "../../Components/News/News";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <MainNav></MainNav>
      <div className=" md:grid  md: grid-cols-4 gap-5 mt-20">
        <LeftSideNav></LeftSideNav>
        <div className="md:col-span-2">
          <News></News>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default Home;
