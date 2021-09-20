import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description, ImageUrl, newsUrl}=this.props
        return (
            <div>
                <div className="card">
                <img src={ImageUrl} className="card-img-top" alt="Error: 404"/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,45)}...</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
