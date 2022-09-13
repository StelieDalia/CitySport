import React, { Component } from "react";
import Slider from "react-slick";
import Nike from "../images/Nike.png";
import Adidas from "../images/Adidas.png";
import Reebok from "../images/Reebok.png";
import Puma from "../images/Puma.png";
import Asics from "../images/Asics.png";
import Converse from "../images/Converse.png";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
        <div className="marques">
            <h2>Nos Marques</h2> <br /><br />
            <Slider {...settings}>
                <div>
                    <div className="Marques">
                        <img src={Nike} alt="Nike" className="images" style={{width: 130}}/>
                    </div>
                    <h3>Nike</h3>
                </div>
                <div>
                    <div className="Marques">
                    <img src={Adidas} alt="Adidas" className="images" style={{width: 120}}/>
                    </div>
                    <h3>Adidas</h3>
                </div>
                <div>
                    <div className="Marques">
                        <img src={Reebok} alt="Reebok" className="images" style={{width: 180}}/>
                    </div>
                    <h3>Reebok</h3>
                </div>
                <div>
                    <div className="Marques">
                        <img src={Puma} alt="Puma" className="images" style={{width: 150}}/>
                    </div>
                    <h3>Puma</h3>
                </div>
                <div>
                    <div className="Marques">
                        <img src={Asics} alt="Asics" className="images" style={{width: 180}}/>
                    </div>
                    <h3>Asics</h3>
                </div>
                <div>
                    <div className="Marques">
                        <img src={Converse} alt="Converse" className="images" style={{width: 160}}/>
                    </div>
                    <h3>Converse</h3>
                </div>
            </Slider>
        </div>
    );
  }
}