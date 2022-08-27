import logo from './logo.svg';
import './App.css';
import ApiFetch from './components/ApiFetch';
// import TimerContainer from './components/TimerContainer';
// import Basic2 from './components/Basic2';
// import BasicUseEfect from './components/BasicUseEfect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2/> */}
        {/* <BasicUseEfect /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
