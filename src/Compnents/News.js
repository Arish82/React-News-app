import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    // static defaultProps ={
    //     pageSize: 15,
    //     category: 'general',
    //     country: 'in'
    // }
    static propTypes={
        pageSize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string
    }
    constructor(){
        super();
        // console.log("constructor");
        this.state={
            articles: [],
            loading: true,
            page: 1,
            totalResult: 0
        };
    }

    // runs after render
    a=document.getElementById("next");
    async componentDidMount(){
        console.log(this.props.category);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbd905525ebb46308ad8022d6b27b8e2&page=1&pageSize=15`;
        let data= await fetch(url);
        let datas= await data.json();
        // console.log(datas);
        this.setState({articles: datas.articles, totalResult: datas.totalResults, loading: false});
    }
    
    handleNext= async ()=>{
            // console.log("next");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbd905525ebb46308ad8022d6b27b8e2&page=${this.state.page+1}&pageSize=15`;
            this.setState(
                {loading: true}
            )
            let data= await fetch(url);
            let datas= await data.json();
            this.setState({
                articles: datas.articles,
                page: this.state.page+1,
                loading: false
            })
    }
    handlePre= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbd905525ebb46308ad8022d6b27b8e2&page=${this.state.page-1}&pageSize=15`;
        this.setState(
            {loading: true}
        )
        let data= await fetch(url);
        let datas= await data.json();
        this.setState({
            articles: datas.articles,
            page: this.state.page-1,
            loading: false
        })
    }
    render() {
        // console.log("render");
        return (
            <div>
                <div className="container">
                    <h1 className="heading text-center my-4">News wale Bhaya - Top-Headlines</h1>
                    {this.state.loading && <Spinner/>}
                    {!this.state.loading && <div className="row">
                        {this.state.articles.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} newsUrl={element.url}/>
                            </div>
                        })}
                    </div>}
                </div>
                <div className="container d-flex justify-content-around my-3">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePre}> &larr; Previous</button>
                <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResult/15)} type="button" className="btn btn-dark" id="next" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
