import React from 'react';
import '../Slideshow.css';
import img1 from '../img/course_slider_banner_elegant_3.jpg';
import img2 from '../img/course_slider_banner_elegant_5.jpg';

export default function Slideshow() {
    return (
        <div className="slidershow">
            <div className="slides">
                <input type="radio" name="r" id="r1" checked></input>
                <input type="radio" name="r" id="r2"></input>
                <div className="slide s1">
                    <img className="cover-image" src={ img1 } alt="" />
                </div>
                <div className="slide">
                    <img className="cover-image" src={ img2 } alt="" />
                </div>
            </div>
            <div className="navigation">
                <label for="r1" className="bar"></label>
                <label for="r2" className="bar"></label>
            </div>
        </div>
    );
}