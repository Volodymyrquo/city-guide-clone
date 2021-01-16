import React, { Component } from 'react';
import { placeInfo, reviews, news, detailInfo } from '../assets/data';

const InfoContext = React.createContext();

class ContextProvider extends Component {
  state = {
    placeInfo,
    reviews,
    detailInfo,
    news,
  };
  render() {
    return (
      <InfoContext.Provider
        value={{
          placeInfo: this.state.placeInfo,
          reviews: this.state.reviews,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
        }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}
const ContextConsumer = InfoContext.Consumer;

export { ContextProvider, ContextConsumer };
