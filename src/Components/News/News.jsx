import { useEffect, useState } from "react";
import DragonNews from "./DragonNews";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>

      <div>
        {news.map((singleNews, idx) => (
          <DragonNews key={idx} news={singleNews}></DragonNews>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button className="btn btn-sm px-5 text-white bg-unique hover:bg-unique1">
          More News
        </button>
      </div>
    </div>
  );
};

export default News;
