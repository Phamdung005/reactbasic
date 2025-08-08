import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent.js'
import ListTodo from './Todos/ListTodo.js';
// 2 component class / function
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //const app = () => {}, arrowfunction 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple to do app
        </p>

        {/* <MyComponent></MyComponent> */}
        <ListTodo />
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
