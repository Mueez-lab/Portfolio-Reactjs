import './App.css';
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Service from './Components/Sevice'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <div className='content'>
        <Content/>
      </div>
      <div className='service'>
        <Service/>
      </div>
    </div>
  );
}

export default App;
