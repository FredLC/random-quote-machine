import React from 'react';
import './App.css';

const URL = 'https://api.quotable.io/random';

class App extends React.Component {
  state = {
    quote: '',
    author: ''
  }

  getQuote = () => {
    fetch(URL)
      .then(res => {
        if (res.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          res.status);
        return;
      }
        res.json()
          .then(data => {
            this.setState({
              quote: data.content,
              author: data.author
            })
        })
      })
    .catch(err => console.log('Fetch Error :-S', err))
  }

  componentDidMount() {
    this.getQuote()
  }

  render() {
    return (
    <div className="wrapper" id="quote-box">
      <p className="quote" id="text">
        <i className="fas fa-quote-left"></i>
          {this.state.quote}
        <i className="fas fa-quote-right"></i>
      </p>
        <p id="author"><em>- {this.state.author}</em></p>
      <div className="buttons-wrapper">
        <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote">Tweet Quote <i className="fab fa-twitter"></i></a>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
      </div>
    </div>
  );
  }
}

export default App;
