import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import './Loader.css';
import './Spinner.css';
import './NewsItem';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      pageSize: 6,
      loading: false,
      totalArticles: 0,
    };
  }

  getApiUrl() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=`;
    if (this.props.selectedCountry === 'default') {
        apiUrl += 'in';
    }
    else if(this.props.selectedCountry !== 'default')
    {
            apiUrl += `${this.props.selectedCountry}`;
    }
    if (this.props.selectedCategory !== 'default') {
      apiUrl += `&category=${this.props.selectedCategory}`;
    }
    apiUrl += `&apiKey=57f137d9b0fa4a1e99c7b521faf25a65&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    return apiUrl;
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    let apiUrl = this.getApiUrl();
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  };

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.selectedCategory !== this.props.selectedCategory || prevProps.selectedCountry !== this.props.selectedCountry || prevState.page !== this.state.page) {
      this.fetchNews();
    }
  }

  handelPreviousClick = () => {
    this.setState((state) => ({
      page: state.page - 1,
    }));
  };

  handelNextClick = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
  };

  render() {
    return (
      <div>
        {this.state.loading && (
          <div className="loader-overlay">
            <div className="loader-container">
              <Loader />
            </div>
          </div>
        )}
        <div className={this.state.loading ? 'blur-background' : ''}></div>
        <div className="container">
        <h1 className="text-center animated-text" style={{margin: '40px', fontWeight: 'bold', fontFamily: 'serif' }}>{this.props.selectedCategory === 'default' ? 'Top Headlines' : `${this.props.selectedCategory.charAt(0).toUpperCase() + this.props.selectedCategory.slice(1)} - Top Headlines`}</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    imageUrl={element.urlToImage}
                    title={element.title}
                    description={element.description}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              style={{margin: '20px' }}
              onClick={this.handelPreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalArticles / this.state.pageSize)
              }
              type="button"
              className="btn btn-dark"
              style={{margin: '20px' }}
              onClick={this.handelNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
