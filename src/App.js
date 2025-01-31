import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImgComponent from './components/ImgComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent label="cliccami!" />
        <ButtonComponent label="non cliccarmi!" />
        <ImgComponent src="https:/placecats.com/400/400" />
      </header>
    </div>
  )
}

export default App
