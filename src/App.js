import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    result : ' ',
  }

  updateText = event => {
    const value = event.target.value;
    if(value === "=") {
      try {
        this.setState((prevState) => ({result: prevState.result + "=" + eval(prevState.result)
      }))
      }
      catch (error) {
        console.log(error);
      }
    }
    else if(value === "clear") {
      this.setState({result : ""})
    }
    else if(value === "cancel") {
      this.setState((prevState) => ({result: prevState.result.slice(0, -1)}))
    }
    else {
      this.setState((prevState) => ({ result: prevState.result + value }));
    }
  }

  render () {
      const {result} = this.state;
      console.log({result});
      return (
        <div className='bg-container'>
          <div className='calculator'>
            <div>
              <input type="text" className="input" value={result} onChange=""></input>
            </div>
            <div>
              <button className="button" onClick={this.updateText} value="clear">AC</button>
              <button className="button" onClick={this.updateText} value="cancel">x</button>
              <button className='button' onClick={this.updateText} value="%">%</button>
              <button className='button' onClick={this.updateText} value="/">/</button>
            </div> 
            
            <div>
              <button className='button' onClick={this.updateText} value="7">7</button>
              <button className='button' onClick={this.updateText} value="8">8</button>
              <button className='button' onClick={this.updateText} value="9">9</button>
              <button className='button' onClick={this.updateText} value="*">*</button>
            </div>
            
            <div>
              <button className='button' onClick={this.updateText} value="4">4</button>
              <button className='button' onClick={this.updateText} value="5">5</button>
              <button className='button' onClick={this.updateText} value="6">6</button>
              <button className='button' onClick={this.updateText} value="-">-</button>
            </div>
            
            <div>
              <button className='button' onClick={this.updateText} value="1">1</button>
              <button className='button' onClick={this.updateText} value="2">2</button> 
              <button className='button' onClick={this.updateText} value="3">3</button>
              <button className='button' onClick={this.updateText} value="+">+</button>
            </div>
            
            <div>
              <button className='button' onClick={this.updateText} value="0">0</button>
              <button className='button' onClick={this.updateText} value=".">.</button>
              <button className="enter" onClick={this.updateText}  value="=">=</button>
            </div>  
          </div>
        </div>
      )
  }
  
}

export default App;
