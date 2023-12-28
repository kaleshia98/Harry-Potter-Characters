import logo from './logo.svg';
import './css/App.css';
import Nav from './pages/Nav.jsx';

function App() {
  return (
    <div className="App">
      <header >
        <Nav/>
      </header>
      <main className="App-header">
        <h1 className='intro'>Harry Potter Characters</h1>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
