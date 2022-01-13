import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
        <div class="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="logo">
                        <img src="img/Logo.svg" alt="Logo"/>
                        <p className="main-logo white">CRAPPO</p>
                    </div>
                    <div className="quick-links">
                        <p className="large-medium-body white">Quick Link</p>
                        <div className="link_block small-regular-body grey6">
                            <a href="#">
                                <p>Home</p>
                            </a>
                            <a href="#">
                                <p>Products</p>
                            </a>
                            <a href="#">
                                <p>About</p>
                            </a>
                            <a href="#">
                                <p>Features</p>
                            </a>
                            <a href="#">
                                <p>Contact</p>
                            </a>
                        </div>
                    </div>
                    <div className="resources">
                        <p className="large-medium-body white ">Resources</p>
                        <div className="link_block small-regular-body grey6">
                            <a href="#">
                                <p>Download Whitepapper</p>
                            </a>
                            <a href="#">
                                <p>Smart Token</p>
                            </a>
                            <a href="#">
                                <p>Blockchain Explorer</p>
                            </a>
                            <a href="#">
                                <p>Crypto API</p>
                            </a>
                            <a href="#">
                                <p>Interest</p>
                            </a>
                        </div>
                    </div>
                    <div className="payment-systems">
                        <p className="large-medium-title white">
                            We accept following <br/> payment systems
                        </p>
                        <div className="icon_block">
                            <img src="img/Visa.svg" alt="Visa"/>
                            <img src="img/Mastercard.svg" alt="Mastercard"/>
                            <img src="img/Bitcoin.svg" alt="Bitcoin"/>
                        </div>
                    </div>
                </div>
                <div className="footer_content-add">
                    <p className="small-regular-body white ">©2021 CRAPPO. All rights reserved</p>
                    <div className="icon_block">
                        <a href="#"><img src="img/facebook-f1.svg" alt="fb"/></a>
                        <a href="#"><img src="img/instagram1.svg" alt="inst"/></a>
                        <a href="#"><img src="img/youtube1.svg" alt="yt"/></a>
                        <a href="#"><img src="img/twitter1.svg" alt="tw"/></a>
                        <a href="#"><img src="img/linkedin1.svg" alt="ln"/></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}