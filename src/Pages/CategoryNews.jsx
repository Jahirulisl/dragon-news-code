
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
// import NewsCard from "../components/NewsCard"

const CategoryNews = () => {
    const  {data:news} = useLoaderData();
   console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p  className="text-gray-400 text-sm">{news.length} News Found On This Category</p>
             {/* for map */}
            <div>
              {
                news.map((singleNews) =>(
                  <NewsCard key={singleNews._id}news ={singleNews}></NewsCard>
                ))
              }
            </div>
        </div>

            );
          };
         
        {/* <h2 className="font-semibold mb-3">Dragon News Home</h2>
        <p className="text-gray-400 text-sm">
          {news.length} News Found On This Category
        </p>
        <div>
          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
          ))}
        </div> */}
      


export default CategoryNews;