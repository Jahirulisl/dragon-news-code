
import { AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      {/* Card Header */}
      <div className="card-body">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={news.author.img}
              alt="author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-sm font-semibold">{news.author.name}</h3>
              <p className="text-xs text-gray-500">
                {new Date(news.author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex space-x-4 text-gray-500">
            <BsBookmark className="cursor-pointer" />
            <AiOutlineShareAlt className="cursor-pointer" />
          </div>
        </div>

        {/* Card Title */}
        <h2 className="text-lg font-bold mb-2">{news.title}</h2>

        {/* Thumbnail */}
        <img
          src={news.thumbnail_url}
          alt="thumbnail"
          className="rounded-xl mb-4"
        />

        {/* Details */}
        <p className="text-sm text-gray-700 mb-4">
          {news.details.slice(0, 150)}...
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>

        {/* Card Footer */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: Math.floor(news.rating.number) }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-sm text-gray-700">
              {news.rating.number}
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <AiOutlineEye className="mr-1" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


