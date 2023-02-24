import React, { Component } from 'react';
import '../../custom.css';
import './FooterStyles.css';
import { FaYoutube, FaInstagram } from "react-icons/fa";

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer id='footer'>
                <div className="row" id="dev">
                    <h5 id="credits">Created by: Martin Marinov</h5>
                </div>
                <div id="main-content" className="row">
                    <div>
                        <a href="https://www.youtube.com/channel/UCdOH10Te0taKiNJA8GJHhvw" className="fa fa-footer" >
                            <FaYoutube /></a>
                        <a href="https://www.instagram.com/mansorwebsite/" className="fa fa-footer">
                            <FaInstagram /></a>     
                    </div>
                </div>
            </footer>
        );
    }
}
