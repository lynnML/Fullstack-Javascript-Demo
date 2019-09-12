import React, {Component} from 'react';

class HighScore extends Component {

    render(){
        if(this.props.overFive){
            
            return (
                <h3>Beat high score of 5!
                    {/* <button onClick={(e) => this.props.onReset(e)}>Reset</button> */}
                    <button onClick={this.props.onReset}>Reset</button>
                </h3>
            )
        } else {
            return null;
        }
    }
}

export default HighScore;