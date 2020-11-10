import React, { Component } from 'react';
import bitsize from './bitsize.png';

// function Main(props) {

//   const [msg, setMsgs] = useState(["Bob", "Sally", "Jack"]);

//   return <div>
//       {/* <p>You clicked {msg.sentences[0]} times</p>
//       <p>{msg.length}</p> */}
//       <button onClick={() => updateState(0)}>Click to del</button>
//      </div>;
// }
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { sentences: [
                            "Pff, might as well learn Cornish if you're looking to waste your time",
                            "Nope. And real answers only please",
                            // "Absolutely not. I wouldn't iterate my way out of this for loop with that garbage",
                            // "Wrong. Terrible guess",
                            // "Garbage. Just garbage",
                            // "Famously broken. An antipattern compiled failure of nonsense",
                            // "My word. Do people still use that?"
                            ,"Yeah!!! You got it...... No of course you didn't"],
                        line: "" ,
                        language: ""};
        this.handleClick=this.handleClick.bind(this);
        
      }

    handleClick() {
        

        var array = [...this.state.sentences]; // make a separate copy of the array
        var index = Math.floor(Math.random() * this.state.sentences.length)
        console.log(this.state.language);
        if (this.state.language == "") {
            this.setState({line: "No. I can not read your mind."});     
            return
        }
        if (index !== -1) {
            this.setState({line: array[index]});
            array.splice(index, 1);
            this.setState({sentences: array});
        }
    }

    Display(){
        
    }
    render() {
        const renderImg = ()=>{
            if(typeof this.state.line == "undefined"){
                console.log(this.state.line);
              return <div>
                  <h1 className = "bingo">Bingo</h1>
                  <img className = "img" src={bitsize} alt="Logo" /> 
                  </div>
            } else{
                return (
                    <div>
                    <h2>Since Jen and Beardo got married. One questions remains unanswered.</h2>
                    <h2>What is the best programming language???</h2>
                    <h4>Well I've figured it out but can you. Why not take a guess</h4>
                    <label>
                        <input type="text" name="name" onChange={event => this.setState({language: event.target.value})}/>
                    </label>
                    {/* <h1>{this.state.sentences[0]}</h1> */}
                    <button className="myButton" onClick={this.handleClick}>Click to ascertain your brilliance</button>
                    <img></img>
                    <br/>
                    <h3>{this.state.line}</h3>
                    </div>
                )
            }
          }
        return (
            <div>

                {renderImg()}
                

                
            </div>

        );
    }
}

export default Main;
