import React, {Component} from 'react';
import HighScore from './HighScore';

class Application extends Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overFive: false
        }

    }

    //writing our own methods for states

    handleClick = () => {  //this is just a button equal to a function
        console.log("Clicked");
        this.setState({count: this.state.count + 1})
    }

    //everytime a state is changed, this function is called
    componentDidUpdate(props, state){
        console.log("Updated from", state, "to", this.state);
         //doing something weird, NOT RECOMMENDED --> add this.setState({count: this.state.count + 1})  --> Error: Maximun dept exceeded
         if(this.state.count > 5 && this.state.count != state.count && !this.state.overFive){
             console.log("UPdating over 5")
             this.setState({overFive: true}) //gets stuck be cause when overFive gets updated, this function gets called again
         }
    }

   



    render(){ //method returns html or text or variables or etc....
        let {count} = this.state  //basically gets the count variable for the state
    
        return (
            <div>
                <h1>You clicked the button {count}</h1>
                {(this.state.overFive) ? 
                    <h3>Beat the highest score of 5!</h3>
                    : null
                }
              
                    <button onClick ={(e) => this.handleClick()}>Click Me</button>
                    {/* <button onClick ={this.handleClick()}>Click Me</button>  will not work, when it mounts, it calls function once, button does not work after*/}
                    
            </div>
        );
    }

}

export default Application;