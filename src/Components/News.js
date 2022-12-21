import React, { useState , useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types"


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [Loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState([0])
  const [page, setPage] = useState(1);
  
  const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  document.title = `${props.category==="general"? document.title: capitalizeFirstLetter(props.category)} - NewsMonkey`





 const  updateNews= async ()=>  {
    props.setProgress(10);
  
    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=beafb73eb1904ed58d749c377509dcc7&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    props.setProgress(70);

    setTotalResults(parsedData.totalResults);
    props.setProgress(85);

    setLoading(false)
    props.setProgress(100);
    console.log(parsedData);
    
  }

  useEffect(() => {
    updateNews();
  }, [])

  // async componentDidMount() {
  //   console.log("cdm");
  //   this.setState({ loading: true });

  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=beafb73eb1904ed58d749c377509dcc7&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  //   // this.updateNews()
  // }

  const defaultImage =
    "https://images.hindustantimes.com/img/2022/10/29/550x309/WhatsApp_Image_2021-09-18_at_094218_1667002445567_1667002445727_1667002445727.jpeg";

  // handlePreClick = async () => {
    
  //   await this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
    
  

  //   await this.setState({page: this.state.page + 1})
  //   this.updateNews()

  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=beafb73eb1904ed58d749c377509dcc7&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false)

}

  
    return (
      <>
          
        <div className="container bg-[#0F162B] text-white max-w-full pt-[6.5rem] lg:pt-0">
          <div className=" pb-0  flex justify-center">
            <h1 className="text-3xl md:text-5xl  lg:mt-[6.5rem] text-center animate-pulse text-[#38BDF9]">
              
              {props.category==="general"? "Top": capitalizeFirstLetter(props.category)} Headlines 
            </h1>
          </div>
          {Loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="lg:grid lg:grid-cols-3 gap-4  sm:grid sm:grid-cols-2 px-6">

            {!Loading &&
              articles.map((element) => {
                return (
                  <div key={element.url}>
                    <div className="sm:flex-col -mb-5 pt-10 lg:pt-0 md:w-full sm:mt-20">
                      <NewsItem
                        source={element.source.name}
                        title={element.title.slice(0, 80)}
                        description={
                          element.description == null
                          ? element.description
                          : element.description.slice(0, 122)
                        }
                        imageUrl={
                          element.urlToImage
                          ? element.urlToImage
                          : defaultImage
                        }
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        />
                    </div>
                  </div>
                );
              })}
          </div>
      </InfiniteScroll>

          {/* <div className="container flex justify-evenly py-10">
            <button
              disabled={this.state.page <= 1}
              className="bg-transparent disabled:opacity-25 disabled:cursor-not-allowed hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={this.handlePreClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / props.pageSize)
              }
              className="bg-transparent disabled:opacity-25 disabled:cursor-not-allowed hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={this.handleNextClick}
            >
              &rarr; Next
            </button>
          </div> */}
        </div>
      </>
    );
  
}

News.defaultProps={
  country: "in",
  pageSize: 6,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:  PropTypes.string,
}

export default News