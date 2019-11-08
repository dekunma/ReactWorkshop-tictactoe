import React from 'react'
import '../style.css'
import Square from './Square'
class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:"O"
        }
    }

    render(){
        const changeValue = () => {
            if(this.state.value === "O"){
                this.setState({value: "X"})
            }
            else{
                this.setState({value:"O"})
            }
        }
        return(<div className="board">
                <div>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                </div>

                <div>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                </div>

                <div>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                    <Square changeValue={changeValue} value={this.state.value}></Square>
                </div>
                </div>)
    }
}

export default Board