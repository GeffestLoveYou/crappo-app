import React, { Component } from 'react'

export default class SectionFour extends Component {
    render() {
        return (
            <div className="section4">
            <div className="container">
                <div className="section4_content">
                    <div className="text_block">
                        <h3 className="white">Start mining now</h3>
                        <p className="small-regular-body white">Join now with CRAPPO to get the latest news <br/> and start mining now</p>
                    </div>
                    <div className="form-and-button_block">
                        <div className="search-group">
                            <input type="search"/>
                            <img src="img/Line.png" alt="Line"/>
                        </div>
                        <a href="#"><img src="img/Button3.png" alt="Button"/></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
