import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { client } from "../config/sanityConfig";

export default function NewsDetail() {
  const [singleNews, setSingleNews] = useState({});
  const { id } = useParams();

  const getSingleNews = async (id) => {
    const query = `*[_type == "news"][_id == "${id}"]{newsTitle,desc,"photo": thumbnail.asset->url,_id, "category":category->categoryName}`;
    const oneNews = await client.fetch(query);
    setSingleNews(oneNews[0]);
  };
  useEffect(() => {
    getSingleNews(id);
  }, []);
  console.log(singleNews);

  return (
    <>
      <Helmet>
        <title>{singleNews.newsTitle}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="w-full flex justify-center">
        <div className="flex max-w-2xl  items-center rounded-md border flex-col">
          <div className="h-full w-full ">
            <img
              src={singleNews.photo}
              alt="Laptop"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div>
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
              {singleNews.newsTitle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <line x1={7} y1={17} x2={17} y2={7} />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </h1>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #{singleNews.category}
                </span>
              
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius tempora ad voluptatum incidunt error
                vitae at veritatis libero blanditiis eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
