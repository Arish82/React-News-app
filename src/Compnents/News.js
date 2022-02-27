import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=>{
   
    const captalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1,);
    };
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResult, settotalResult] = useState(0)
    document.title=`News Wale Bhaya - ${ captalize( props.category)}`;
    


    const newsupdate= async (pages)=> {
         props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apiKey}&page=${pages}&pageSize=15`;
         props.setProgress(30);
         setloading(true);
        let data= await fetch(url);
         props.setProgress(60);
        let datas= await data.json();
         props.setProgress(80);
         setarticles(datas.articles);
         settotalResult(datas.totalResults);
         console.log(datas);
         setloading(false);
         props.setProgress(100);
        }
    useEffect(() => {
        newsupdate(1);
        // eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {
         setpage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=bbd905525ebb46308ad8022d6b27b8e2&page=${page+1}&pageSize=15`;
        let data= await fetch(url);
        let datas= await data.json();
            setarticles( articles.concat(datas.articles));
            settotalResult(datas.totalResults);
    }
        return (
            <div className="my-5 py-4">
                <h1 className="heading text-center my-4">News wale Bhaya - Top-Headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={ articles.length}
                    next={ fetchMoreData}
                    hasMore={ articles.length< totalResult}
                    loader={<Spinner/>}
                    >
                        <div className="container">
                        {<div className="row">
                            { articles.map((element)=>{
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source}/>
                                </div>
                            })}
                        </div>}
                        </div>
                </InfiniteScroll>
            </div>
        )
}

News.defaultProps ={
    pageSize: 15,
    category: 'general',
    country: 'in'
}
News.propTypes={
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string
}

export default News;
