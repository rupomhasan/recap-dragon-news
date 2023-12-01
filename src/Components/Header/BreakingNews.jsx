import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 p-4 bg-Dark01">
        <button className="btn rounded-none text-xl px-6 text-white bg-unique hover:bg-unique1 ">
          Latest
        </button>
        <Marquee className="text-xl font-semibold">
          Match Highlights : Germany vs Spain as it happend !... Match
          Highlights : Germany vs Spain as it happend !... Match Highlights :
          Germany vs Spain as it happend ! ...
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
