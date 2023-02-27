import React, { Component } from 'react';
import './RegisterMenu.css';
import '../../custom.css';

export class RegisterMenu extends Component {
    static displayName = RegisterMenu.name;

    render() {
        return (
            <div>
                <form id="registerForm">
                    <h2 id="register-txt">Register</h2>
                        <hr id="line"></hr>
                        <div className="inputs">
                            <label>Email:
                                <input type="text" id="email" />
                            </label>
                        </div>
                        <div className="inputs">
                            <label>Password:
                                <input type="password" id="pwd" />
                            </label>
                        </div>
                    <div>
                        <button id="btn-registerForm" type="submit">Register</button>
                    </div>
                    <div>
                        <button id="btn-cancel">
                            <a href={`https://localhost:44494/`} id="cancel-text">Cancel</a>
                        </button>
                    </div>
                </form>
            </div>
      );
    }
}

