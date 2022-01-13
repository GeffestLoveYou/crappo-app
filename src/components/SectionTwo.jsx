import React, { Component } from 'react'

export default class SectionTwo extends Component {
    render() {
        return (
        <div className="section2" id='section2'>
            <div className="container">
                <div className="section2_content">
                    <h2 className="black">Trade securely and market the high <br/> growth cryptocurrencies.</h2>
                    <div className="card-block">
                        <div className="card">
                            <div className="card_content">
                                <img src="img/Icon8.png" alt="Bitcoin"/>
                                <div className="h-block">
                                    <h3>Bitcoin</h3>
                                    <p className="standart-medium-body">BTC</p>
                                </div>
                                <p className="small-regular-body">Digital currency in which a record of <br/> transactions is
                                    maintained.</p>
                                <a href="#"><img src="img/Arrow Right2.svg" alt="arrow" className="arrow-right"/></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_content">
                                <img src="img/Icon5.png" alt="Ethereum"/>
                                <div className="h-block">
                                    <h3>Ethereum</h3>
                                    <p className="standart-medium-body">ETH</p>
                                </div>
                                <p className="small-regular-body">Blockchain technology to create and run <br/> decentralized
                                    digital applications.</p>
                                <a href="#"><img src="img/Arrow Right2.svg" alt="arrow" className="arrow-right"/></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_content">
                                <img src="img/Icon6.png" alt="Litecoin"/>
                                <div className="h-block">
                                    <h3>Litecoin</h3>
                                    <p className="standart-medium-body">LTC</p>
                                </div>
                                <p className="small-regular-body">Cryptocurrency that enables instant <br/> payments to anyone in
                                    the world.</p>
                                <a href="#"><img src="img/Arrow Right2.svg" alt="arrow" className="arrow-right"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}