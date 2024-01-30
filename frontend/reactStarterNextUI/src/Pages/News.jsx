import { Input, Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import NewsCard from "../components/NewsCard";
import { client } from "../config/sanityConfig";

export default function News() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Getting NEws
  const getNews = async () => {
    setLoading(true);
    let queries = `*[_type == "news"]{newsTitle,desc,"photo": thumbnail.asset->url,_id, "category":category->categoryName}`;
    const newsData = await client.fetch(queries);
    setNews(newsData);
    setLoading(false);
  };

  // Getting Category
  const getCatgeory = async () => {
    let queries = `*[_type == "category"]{categoryName,_id}`;
    const catgeoryData = await client.fetch(queries);
    setCategory(catgeoryData);
  };

  const searchHandeler = (evt) => {
    const userSearchValue = evt.target.value;

    newsSearch(userSearchValue);
  };

  const newsSearch = async (searchValue) => {
    if (!searchValue) {
      getNews();
    } else {
      setLoading(true);
      const queries = `*[_type == "news" && (newsTitle match "${searchValue}*") ]{newsTitle,"photo": thumbnail.asset->url,_id, "category":category->categoryName}`;
      const newsData = await client.fetch(queries);
      setNews(newsData);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
    getCatgeory();
    newsSearch();
  }, []);

  // console.log(category);

  return (
    <>
      <Helmet>
        <title>News</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container mx-auto">
        <form className="flex justify-center items-center gap-2 ">
          <Input
            name="userSearchValue"
            color="success"
            className="w-72 my-3"
            type="search"
            label="Search now"
            onChange={searchHandeler}
          />
          <Select
            label="News category"
            placeholder="Select an Category"
            className="max-w-xs"
          >
            {category.map((category) => (
              <SelectItem key={category._id}>
                {category.categoryName}
              </SelectItem>
            ))}
          </Select>
        </form>

        <div className="flex flex-wrap gap-2 justify-center">
          {loading ? (
            "Loading..."
          ) : (
            <>
              {news.map((news) => (
                <NewsCard key={news._id} newsInfo={news} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
