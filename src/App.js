import React, { Component } from 'react';
import Navbar from './Navbar';
import News from './News';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'default',
      selectedCountry: 'default',
      selectedLanguage: 'default' // initial default value
    };
  }

  categorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };
  countrySelect = (country) => {
    this.setState({ selectedCountry: country });
  };
  languageSelect = (language) => {
    this.setState({ selectedLanguage: language });
  };

  render() {
    return (
      <div>
        <Navbar categorySelect={this.categorySelect} countrySelect={this.countrySelect} languageSelect={this.languageSelect} />
        <News selectedCategory={this.state.selectedCategory} selectedCountry={this.state.selectedCountry} selectedLanguage={this.state.selectedLanguage} />
      </div>
    );
  }
}
