import React, { Component } from 'react';
import Slider from './../../components/Slider';
import Banner from './../../components/Banner';
import Products from './../../components/Products';
class HomePage extends Component {
    render() {
        return (
            <div>
             {/* Slider */}
                <Slider />
                {/* Banner */}
                <Banner />
                {/* Product */}
                <section className="bg0 p-t-23 p-b-140">
                    <div className="container">
                        <div className="p-b-10">
                            <h3 className="ltext-103 cl5">
                                Product Overview
                            </h3>
                        </div>
                       <Products />
                    </div>
                </section>
            </div>
        )
    }
}
export default HomePage;