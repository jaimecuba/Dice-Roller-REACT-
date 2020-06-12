import React, { Component } from 'react'
import './Die.css'

export default class Dice extends Component {
    render() {
        return (
            <div>
                <i className={`Die fa fa-dice-${this.props.face} ${this.props.shaking ? 'shaking' : ''}`}></i>
            </div>
            
        )
    }
}
