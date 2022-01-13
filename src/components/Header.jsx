import React, { Component } from 'react'

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
                        </nav>
                        <div className="navigation_login-group">
                            <a href="#" className="small-medium-body white">Login</a>
                            <div className="vl"></div>
                            <div className="btn white small-medium-body">
                                <a href="#">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_content">
                    <div className="content_block">
                        <img src="img/75save.svg" alt="75save"/>
                        <div className="block_text">
                            <h1 className="white">Fastest & secure <br/> platform to invest <br/> in crypto</h1>
                            <p className="small-regular-body grey5 ">Buy and sell cryptocurrencies, trusted by 10M wallets <br/>
                                with over $30 billion in transactions.</p>
                        </div>
                        <div className="btn">
                            <p className="standart-medium-body white">Try for FREE</p>
                            <div className="arrow-right">
                                <a href="#"><img src="img/Arrow Right.svg" alt="arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                    <img src="img/Illustration.png" alt="Illu1"/>
                </div>
            </div>
        </div>
        )
    }
}