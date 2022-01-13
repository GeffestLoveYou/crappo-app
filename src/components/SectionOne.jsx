import React, { Component } from 'react'

export default class SectionOne extends Component {
    render() {
        return (
        <div className="section1">
            <div className="container">
                <div className="numbers-group">
                    <div className="number">
                        <img src="img/Icon.png" alt="Icon"/>
                        <div className="text-group">
                            <h2 className="white">$30B</h2>
                            <p className="small-regular-body grey5">Digital Currency Exchanged</p>
                        </div>
                    </div>
                    <div className="number">
                        <img src="img/Icon2.png" alt="Icon"/>
                        <div className="text-group">
                            <h2 className="white">10M+</h2>
                            <p className="small-regular-body grey5">Trusted Wallets Investor</p>
                        </div>
                    </div>
                    <div className="number">
                        <img src="img/Icon3.png" alt="Icon"/>
                        <div className="text-group">
                            <h2 className="white">195</h2>
                            <p className="small-regular-body grey5">Countries Supported</p>
                        </div>
                    </div>
                </div>
                <div className="section1_content">
                    <img src="img/Illustrations4.png" alt="Illu2"/>
                    <div className="content_block">
                        <div className="text_block">
                            <h2 className="white">Why you should choose <br/> CRAPPO</h2>
                            <p className="small-regular-body grey5">Experience the next generation cryptocurrency <br/> platform.
                                No financial borders, extra fees, and fake <br/> reviews.</p>
                        </div>
                        <div className="btn standart-medium-body white"><a href="#">Learn more</a></div>
                    </div>
                </div>
                <div className="section1_add">
                    <div className="text_block">
                        <h2 className="white">Check how much you can earn</h2>
                        <p className="standart-regular-body grey5">Let’s check your hash rate to see how much you will earn
                            today, <br/> Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}