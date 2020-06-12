import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

export default class RollDice extends Component {
    constructor(props){
        super(props)
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }
        this.rollDiceHandler = this.rollDiceHandler.bind(this)
    }

    static defaultProps = {
        faces: ["one","two","three","four","five","six" ]
    }

    rollDiceHandler(){
        let newDie1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]
        let newDie2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]
        this.setState({
            die1: newDie1,
            die2: newDie2,
            rolling: true
        })

        //WAIT ON SECOND, THEN SET ROLLING BACK TO FALSE
        setTimeout(()=>{
            this.setState({rolling: false})
        }, 1000)
    }


    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} shaking={this.state.rolling}/>
                    <Die face={this.state.die2} shaking={this.state.rolling}/>
                </div>
                <button 
                    onClick={this.rollDiceHandler}
                    disabled={this.state.rolling}
                    >
                {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}
