import React, { Component } from 'react'

export default class SectionThree extends Component {
    render() {
        return (
        <div className="section3">
            <div className="container">
                <div className="section3_content">
                    <h2 className="white">Market sentiments, portfolio, and run <br/> the infrastructure of your choice</h2>
                    <div className="blocks">
                        <div className="block1">
                            <div className="text_block">
                                <h3 className="white">
                                    Invest Smart
                                </h3>
                                <p className="small-regular-body grey5">
                                    Get full statistic information about the behaviour of <br/> buyers and sellers will help you to
                                    make the decision.
                                </p>
                                <a href="#" className="btn_link">
                                    <div className="second_btn">
                                        <div className="standart-medium-body white">
                                            Learn More
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <img src="img/Chart.png" alt="Chart"/>
                        </div>
                        <div className="block2">
                            <img src="img/Statistic.png" alt="Statistic"/>
                            <div className="text_block">
                                <h3 className="white">
                                    Detailed Statistics
                                </h3>
                                <p className="small-regular-body grey5">
                                    View all mining related information in realtime, at any point at any <br/> location and decide
                                    which polls you want <br/> to mine in.
                                </p>
                                <a href="#" className="btn_link">
                                    <div className="second_btn">
                                        <div className="standart-medium-body white">
                                            Learn More
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="block3">
                            <div className="text_block">
                                <h3 className="white">
                                    Grow your profit and track <br/> your investments
                                </h3>
                                <p className="small-regular-body grey5">
                                    Use advanced analytical tools. Clear TradingView <br/> charts let you track current and
                                    historical profit <br/> investments.
                                </p>
                                <a href="#" className="btn_link">
                                    <div className="second_btn">
                                        <div className="standart-medium-body white">
                                            Learn More
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <img src="img/Table.png" alt="Table"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}