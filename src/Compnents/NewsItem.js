import React from 'react'

const NewsItem=(props)=>{
    let {title,description, ImageUrl, newsUrl,author,date,source}=props
    return (
        <div>
            <div className="card">
            <a href={newsUrl} target="_blank" rel="noreferrer">
            <img src={ImageUrl} className="card-img-top" alt="Error: 404"/></a>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,45)}...</h5>
                <span className="badge rounded-pill bg-warning text-dark">{source.name}</span>

                <p className="card-text">{description}</p>
                <p className="card-text">By: {author==null?"Unknown":author}<small className="text-muted"> on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-danger">Read More</a>
            </div>
            </div>
        </div>
    )
};

export default NewsItem
