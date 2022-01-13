import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
    render() {
        return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="navbar_logo">
                        <img src="img/Logo.svg" alt="Logo" />
                        <p className="main-logo white">CRAPPO</p>
                    </div>
                    <div className="navbar_navigation">
                        <nav className="small-regular-body white">
                            <Link to='section1' smooth="true">Products</Link>
                            <Link to='section2' smooth="true">Features</Link>
                            <Link to='section3' smooth="true">About</Link>
                            <Link to='section4' smooth="true">Contact</Link>
                        </nav>
                    </div>
                </div>
                <div className="header_content">
                    <div className="content_block">
                        <div className="usp_week">
                            <div className="usp_save">75% SAVE</div>
                            <div className="usp_friday">For the Black Friday weekend</div>
                        </div>
                        <div className="block_text">
                            <h1 className="white">Fastest & secure <br/> platform to invest <br/> in crypto</h1>
                            <p className="small-regular-body grey5 ">Buy and sell cryptocurrencies, trusted by 10M wallets <br/>
                                with over $30 billion in transactions.</p>
                        </div>
                        <a href="#" className='btn_link'>
                            <div className="btn">
                                <div className="btn_wrapper">
                                    <div className="btn_description standart-medium-body white">Try For FREE</div>
                                    <img src="img/Arrow Right.svg" alt="AR"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <img src="img/Illustration.png" alt="Illu1"/>
                </div>
            </div>
        </div>
        )
    }
}