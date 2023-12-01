import PropTypes from "prop-types";
import Rating from "react-rating";
import { IoShareSocialSharp } from "react-icons/io5";

import { CiStar } from "react-icons/ci";
import { FaBookmark, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const DragonNews = ({ news }) => {
  const { _id, title, rating, total_view, details, author, image_url } = news;

  const { number } = rating;

  const { name, img, published_date } = author;
  return (
    <div className="border rounded-t mb-8">
      <div className="flex justify-between items-center  bg-Dark01">
        <div className="flex gap-3 items-center p-4">
          <div className="w-10 h-10">
            <img className=" rounded-full" src={img} alt="" />
          </div>
          <div>
            <h3 className="font-semibold ">{name} </h3>
            <p className="text-[14px] text-Dark">{published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xl px-3 ">
          <FaBookmark />
          <IoShareSocialSharp className="text-2xl" />
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-5">{title}</h2>
        <img className="" src={image_url} alt="" />
        <p className="text-Dark text-[14px] leading-6 ">
          {details.slice(0, 270)}...
          <Link
            to={`/newsDetails/${_id}`}
            className="text-red-600 font-semibold block hover:underline hover:cursor-pointer"
          >
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center pt-4 mt-6 border-t">
          <div className="flex gap-3">
            <Rating
              fullSymbol={<FaStar className="text-[#ff8c47]" />}
              emptySymbol={<CiStar />}
              initialRating={number}
            />
            <p>{number}</p>
          </div>
          <p className="flex items-center  gap-2">
            <FaEye className="text-xl" />
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

DragonNews.propTypes = {
  news: PropTypes.object,
};

export default DragonNews;
