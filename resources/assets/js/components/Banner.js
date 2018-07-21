import React, { Component } from 'react';
import HomeBanner from './Banner/homeBanner';

class Banner extends Component {
    render() {
        return (
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="row">
                        <HomeBanner />    
                        <HomeBanner />    
                        <HomeBanner />    
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;