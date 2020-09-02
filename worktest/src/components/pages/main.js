import React from 'react';
import '../main.css'

export default function Main() {
    return (
        <div id="slider">
            <input type="radio" name="slider" id="slide1" checked />
            <input type="radio" name="slider" id="slide2" />
            <div id="slides">
                <div id="overflow">
                    <div className="inner">
                        <div className="slide slide-1">
                            <div className="slide-content">
                                <h2>Basic LoRaWAN</h2>
                                <p>52 บทเรียน</p>
                            </div>
                        </div>
                        <div className="slide slide-2">
                            <div className="slide-content">
                                <h2>Basic ESP32</h2>
                                <p>6 บทเรียน</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="controls">
                <label for="slide1"></label>
                <label for="slide2"></label>
            </div>
            <div id="bullets">
                <label for="slide1"></label>
                <label for="slide2"></label>
            </div>
        </div>
    );
}