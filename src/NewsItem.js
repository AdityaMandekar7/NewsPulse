import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomImage: `https://picsum.photos/300/200?random=${Math.random()}` // Generate a unique random image URL
    };
  }
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
            <div className="card my-3 animated-background" style={{width: "18rem"}}>
                <img src={imageUrl ? imageUrl :  this.state.randomImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
