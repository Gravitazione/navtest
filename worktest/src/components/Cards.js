import React from 'react';
import CardItem from '../CardItem';
import './Card.css';
import img1 from './img/course_thumbnail_elegant_3.jpg'
import img2 from './img/course_thumbnail_elegant_5.jpg'

function Cards() {
    return (
        <div className="cards">
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items"> 
                        <CardItem 
                            src= {img1}
                            text="พัฒนา IoT ด้วย ESP32"
                            label="Basic ESP32"
                            path="/BasicESP32"
                        />
                        <CardItem 
                            src= {img2}
                            text="Basic LoRaWAN"
                            label="eWorkshop LPWAN"
                            path="/LPWAN"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;