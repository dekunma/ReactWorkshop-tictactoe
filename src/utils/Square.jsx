import React from 'react'
import '../style.css'
class Square extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:" "
        }
    }

    render(){
    return(<button className="button" onClick={() => {
            this.setState({value: this.props.value});
            this.props.changeValue();
    }}>{this.state.value}</button>)
    }
}

export default Square