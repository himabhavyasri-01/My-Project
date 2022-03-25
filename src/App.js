import './App.css';
import { Component } from 'react';
import Input from './components/Input'
import Button from './components/Button'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {result: ""};
  }

  clear = () => {
      this.setState({result: ""});
  }

  addText = (value) => {
    const {result} = this.state;
    if(result === "Invalid Expression" || result === "Divide by Zero Error" || result === "Infinity") {
      this.setState({result: value});
    }
    else {
      this.setState((prevState) => ({result: prevState.result + value}));
    }
  }

  pop = () => {
    this.setState((prevState) => ({result: String(prevState.result).slice(0, -1)}))
  }


  calculate = () => {
    var answer = "";
    try {
      answer = eval(this.state.result);
    }
    catch (error) {
      answer = "Invalid Expression"
    } 

    answer = String(answer);
    
    if(answer === "NaN") {
      answer = "Divide by Zero Error"
    }
    this.setState({result: answer});
  }

  render () {
    const {result} = this.state;
    return (
      <div className='bg-container'>
        <div className='calculator'>
          <Input value={result}/>
            <Button value="AC" handleClick={this.clear} />
            <Button value="x" handleClick={this.pop} />
            <Button value="%" handleClick={this.addText} />
            <Button value="/" handleClick={this.addText} /> <br />
            <Button value="7" handleClick={this.addText} />
            <Button value="8" handleClick={this.addText} />
            <Button value="9" handleClick={this.addText} />
            <Button value="*" handleClick={this.addText} /> <br />
            <Button value="4" handleClick={this.addText} />
            <Button value="5" handleClick={this.addText} />
            <Button value="6" handleClick={this.addText} />
            <Button value="-" handleClick={this.addText} /> <br />
            <Button value="1" handleClick={this.addText} />
            <Button value="2" handleClick={this.addText} />
            <Button value="3" handleClick={this.addText} />
            <Button value="+" handleClick={this.addText} /> <br />
            <Button value="0" handleClick={this.addText} />
            <Button value="." handleClick={this.addText} />
            <Button value="=" handleClick={this.calculate} />
          </div>
        </div>
      )
  }
  
}

export default App;
