import calender from "../../assets/calender.png";
import moment from "moment";
import PropTypes from "prop-types";

const CategoryNewsCard = ({ categoryName, categoryNews }) => {
  const { image_url, title } = categoryNews;
  return (
    <div className="bg-Dark01  px-1 py-4 rounded-lg">
      <div>
        <img className="w-full" src={image_url} />
      </div>
      <h3 className="my-5 text-xl font-semibold ">{title}</h3>
      <div className="flex  justify-between">
        <h4>{categoryName}</h4>
        <div className="flex gap-1">
          <img src={calender} />
          <p>{moment().format("MMM M, YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

CategoryNewsCard.propTypes = {
  categoryName: PropTypes.string,
  categoryNews: PropTypes.object,
};

export default CategoryNewsCard;
