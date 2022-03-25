import './App.css';
import { Component } from 'react';
import Input from './components/Input'
import Button from './components/Button'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {result: ""};
  }

  clear = (text) => {
      this.setState({result: ""});
      const {result} = this.state;
      console.log({result});
  }

  addText = (text) => {
    this.setState((prevState) => ({result: prevState.result + text}));
    const {result} = this.state;
    console.log({result});
  }

  pop = (text) => {
    this.setState((prevState) => ({result: String(prevState.result).slice(0, -1)}))
  }

  calculate = (text) => {
    var answer = "";
    try {
      answer = eval(this.state.result);
    }
    catch (error) {
      answer = "Invalid Expression"
    }
    if(isNaN(answer)) {
      this.setState({result: "Divide by Zero error"})
    }
    else {
      this.setState({result: answer});
    }
  
  }

  render () {
    const {result} = this.state;
    return (
      <div className='bg-container'>
        <div className='calculator'>
          <Input text={result}/>
            <Button text="AC" handleClick={this.clear} />
            <Button text="x" handleClick={this.pop} />
            <Button text="%" handleClick={this.addText} />
            <Button text="/" handleClick={this.addText} /> <br />
            <Button text="7" handleClick={this.addText} />
            <Button text="8" handleClick={this.addText} />
            <Button text="9" handleClick={this.addText} />
            <Button text="*" handleClick={this.addText} /> <br />
            <Button text="4" handleClick={this.addText} />
            <Button text="5" handleClick={this.addText} />
            <Button text="6" handleClick={this.addText} />
            <Button text="-" handleClick={this.addText} /> <br />
            <Button text="1" handleClick={this.addText} />
            <Button text="2" handleClick={this.addText} />
            <Button text="3" handleClick={this.addText} />
            <Button text="+" handleClick={this.addText} /> <br />
            <Button text="0" handleClick={this.addText} />
            <Button text="." handleClick={this.addText} />
            <Button text="=" handleClick={this.calculate} />
          </div>
        </div>
      )
  }
  
}

export default App;
