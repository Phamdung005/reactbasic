import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js'

// 2 component class / function

function App() {
  //const app = () => {}, arrowfunction 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! this is a simple react app
        </p>

        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
