import React, {Component} from 'react'

class Application extends Component{

    constructor(props){
        super(props);


    }

    componentWillMount(pros, state){ //deprectated in 2018 - UNSAFE_componentWillMount()

    }

    componentDidMount(props, state){  //Best Practice to make calls to fetch data
        console.log("mounted with", props, state);
    }

    componentWillReceiveProps(props){

    }

    componentWillUpdate(props, state){ 

    }

    componentDidUpdate(props, state){ //Safer way to update components

    }

    render(){ //method returns html or text or variables or etc....
        let  name = "Lynn";
        var test = "is this used outside of render function"
        return (
            <div>
                <h1>Hello World</h1>
                <span>This is {name}</span> 
            </div>
        );
    }

}

export default Application;