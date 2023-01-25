import React, { Component } from 'react'
import './RegisterContainerComponent.css'
import '../RegisterMenu/RegisterMenu.js'

export default class RegisterContainerComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <button type="button" id="registerBtn" className="btn">
                    <a href={`https://localhost:44494/register`} id="text">Register</a>
                </button>
            </div>
        )
    }
}