import baixados from './assets/images/baixados.png'; /* import é usado para importar imagens também. por padrão as imagens vão em assets */
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={baixados} className="App-logo" alt="baixados" />
        <h1>LAB DEV WEB</h1>
        <p>
          Exercício em React - aula 01        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
