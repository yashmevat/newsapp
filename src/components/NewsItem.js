import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, id } = this.props;
        return (
            <div><div className="card">
                <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"} className="card-img-top" alt="..." />
                <div className={`card-body ${id}`}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="__blank" className="btn btn-primary">Read More...</a>
                </div>
            </div>
            </div>
        )
    }
}

export default NewsItem
