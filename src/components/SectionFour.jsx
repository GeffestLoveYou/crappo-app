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
                    <form className="form">
                        <input type="email" className="form__input standart-medium-body white" placeholder='Enter your email' />
                        <button className="mining_wrapper_btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
