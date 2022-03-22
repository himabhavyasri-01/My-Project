import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='bg-container'>
      <div className='calculator'>
        <div>
          <input type="text" className="input"></input>
        </div>
        <div>
          <button className="button">AC</button>
          <button className="button">x</button>
          <button className='button'>%</button>
          <button className='button'>/</button>
        </div> 
        
        <div>
          <button className='button'>7</button>
          <button className='button'>8</button>
          <button className='button'>9</button>
          <button className='button'>*</button>
        </div>
        
        <div>
          <button className='button'>4</button>
          <button className='button'>5</button>
          <button className='button'>6</button>
          <button className='button'>-</button>
        </div>
        
        <div>
          <button className='button'>1</button>
          <button className='button'>2</button> 
          <button className='button'>3</button>
          <button className='button'>+</button>
        </div>
        
        <div>
          <button className='button'>0</button>
          <button className='button'>.</button>
          <button className="enter">=</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
