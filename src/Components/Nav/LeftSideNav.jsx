import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import CategoryNewsCard from "./CategoryNewsCard";
const LeftSideNav = () => {
  const [newsCategory, setNewsCategory] = useState([]);
  const [id, setId] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [newCategoryNews, setNewCategoryNews] = useState([]);


  const news = useLoaderData();

  const handleCategoryClick = (id, categoryName) => {
    setCategoryName(categoryName);
    setId(id);
  };

  useEffect(() => {
    const newNews = news.filter((singleNews) => singleNews.category_id === id);
    setNewCategoryNews(newNews);
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setNewsCategory(data))
      .catch((error) => console.log(error));
  }, [news, id]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">All Category</h2>
      <ul className="space-y-4 ">
        {newsCategory.map((newsList, id) => (
          <li
            onClick={() => handleCategoryClick(newsList.id, newsList.name)}
            key={id}
            className="px-7 hover:bg-Dark01 py-2 rounded  w-full "
          >
            {newsList.name}
          </li>
        ))}
      </ul>
      <div className="space-y-10 mt-7">
        {newCategoryNews.map((singleNews, idx) => (
          <CategoryNewsCard
            key={idx}
            categoryNews={singleNews}
            categoryName={categoryName}
          ></CategoryNewsCard>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
