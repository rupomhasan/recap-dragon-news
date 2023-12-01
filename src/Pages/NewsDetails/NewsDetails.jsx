import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import RightSideNav from "../../Components/Nav/RightSideNav";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { IoIosArrowBack } from "react-icons/io";
import CategoryNewsCard from "../../Components/Nav/CategoryNewsCard";

const NewsDetails = () => {
  const { news, categories } = useContext(AuthContext);
  // const [category, setCategory] = useState({});
  const [newsDetails, setNewsDetails] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);

  // const { name } = category;
  console.log(name);
  const { image_url, details, title, category_id } = newsDetails;

  const { id } = useParams();

  useEffect(() => {
    console.log(categories.find((category) => category.id === category_id));
    setNewsDetails(news.find((singleNews) => singleNews._id === id));
    setRelatedNews(
      news.filter((singleNews) => singleNews.category_id === category_id)
    );
  }, [id, news, categories, category_id]);

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-5 mt-11">
        <div className="col-span-3 ">
          <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
          <div className="px-6 border">
            <img src={image_url} />
            <h3 className="mt-5 mb-2 text-2xl font-bold">{title}</h3>
            <p className="text-Dark text-justify">{details}</p>
            <Link
              to="/"
              className=" btn btn-sm text-white bg-unique hover:bg-unique1 px-6 my-9"
            >
              <IoIosArrowBack className="text-xl" />
              All news in this category
            </Link>

            <div className="grid grid-cols-3 gap-2">
              {relatedNews.map((singleNews, idx) => (
                <CategoryNewsCard
                  key={idx}
                  categoryName={""}
                  categoryNews={singleNews}
                ></CategoryNewsCard>
              ))}
            </div>
          </div>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default NewsDetails;
