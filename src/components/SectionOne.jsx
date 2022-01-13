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
                        <a href="#" className="btn_link">
                            <div className="second_btn">
                                <div className="standart-medium-body white">
                                    Learn More
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="section1_add">
                    <div className="text_block">
                        <h2 className="white">Check how much you can earn</h2>
                        <p className="standart-regular-body grey5">Let’s check your hash rate to see how much you will earn
                            today, <br/> Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="calc">
                    <div className="calc_inner">
                        <form action="" className="calc_form">
                            <div className="calc_wrapper">
                                <input id='hash' type="phone" maxLength={12} className='form_input large-medium-body' placeholder='Enter your hash rate'/>
                                <select name="" className='form_dropdown large-medium-body' id="test">
                                    <option value="1" selected='selected'>MH/s</option>
                                    <option value="2">KH/s</option>
                                    <option value="3">H/s</option>
                                </select>
                                <button className='calc_btn'>Calculate</button>
                            </div>
                            <div className="calc_result">
                                <div className="calc_result_revenue">ESTIMATED 24 HOUR REVENUE:</div>
                                <h3 className="calc_result_title">0.000 ETH (0$) </h3>
                                <div className="calc_result_description">Revenue will change based on mining difficulty and Ethereum price.</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}