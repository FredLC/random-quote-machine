import './App.css';

function App() {
  return (
    <div className="wrapper" id="quote-box">
      <p className="quote" id="text">
        <i class="fas fa-quote-left"></i>
        Lyft taiyaki meditation pug green juice, bushwick la croix poke kinfolk bicycle rights iPhone small batch pinterest listicle fixie.
        <i class="fas fa-quote-right"></i>
      </p>
      <p id="author"><em>- Joe Marambi</em></p>
      <div className="buttons-wrapper">
        <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet Quote <i class="fab fa-twitter"></i></a>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}

export default App;
