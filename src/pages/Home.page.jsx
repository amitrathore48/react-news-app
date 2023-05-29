import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewsUrl } from "../url";
const NEWS_ORG_API_URL =  NewsUrl.NEWS_ORG_URL;

const Home = (props) => {
  const {searchKeyword} = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const initalLoad = async () => {
    props.setProgress(10);
    const url = `${NEWS_ORG_API_URL}?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsHub`;
    initalLoad();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `${NEWS_ORG_API_URL}?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsHub - Top Headlines - {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Loading />}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}>
        <div className="container">
          <div className="row">
            {articles.filter((article)=>{}).map((element, index) => {
               if(element.urlToImage != null) {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
                  </div>
                );
            }
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

Home.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "genereal",
};
Home.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default Home;
