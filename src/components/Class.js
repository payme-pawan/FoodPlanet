import { Component } from "react";


class Parent extends Component {
    
    constructor() {
        super();
        
        console.log()

        this.state = {
            count: 1,
        }
    }
    
    
    render() {
        return (
           <>
            <h1> Class Component </h1>
            <h3> count {this.state.count} </h3>
            <h2>{this.props.print}</h2>
            {this.setState({count: 2,})}
           </>
        )
    }
}


export default Parent;