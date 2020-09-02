import React from 'react';
import Slideshow from './Slideshow';
import '../Homepage.css';
import Cards from '../Cards';
import { Link } from 'react-router-dom';
import img1 from '../img/LPWAN.jpg';
import img2 from '../img/IOT.jpg';

export default function Homepage() {

    return (
        <div>
            <Slideshow />
            <div className="features clearfix">
                <div className="container">
                    <ul>
                        <li className="fucking-list">
                            <i className="fas fa-graduation-cap"></i>
                            <h4>2 คอร์สออนไลน์</h4>
                            <span>เปิดรับความรู้ใหม่ๆ</span>
                        </li>
                        <li className="fucking-list">
                            <i class="fas fa-trophy"></i>
                            <h4>เรียนรู้จากผู้เชี่ยวชาญตัวจริง</h4>
                            <span>ค้นหาคอร์สที่สนใจ</span>
                        </li>
                        <li className="fucking-list">
                            <i class="fas fa-bullseye"></i>
                            <h4>ไม่จำกัดเวลาเรียนรู้</h4>
                            <span>กำหนดเวลาเรียนได้เอง</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid margin-120-0"> 
                <div className="main-title-2">
                    <span>
                        <em></em>
                    </span>
                    <h2>คอร์สที่ได้รับความนิยม</h2>
                    <p>เลือกคอร์สที่ใช้สำหรับคุณ</p>
                </div>
                <Cards />
            </div>
            <div className="container margin-30-95">
                <div className="main-title-2">
                    <span>
                        <em></em>
                    </span>
                    <h2>หมวดหมู่</h2>
                    <p>เลือกคอร์สเรียนรู้ที่คุณสนใจ</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 wow animated" data-wow-offset="150" style={{visibility: "visible;"}}>
                        <Link to='/LPWAN' className="grid-item">
                            <figure className="block-reveal">
                                <div className="block-horizzontal"></div>
                                <img src={img1} alt=""></img>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animated" data-wow-offset="150" style={{visibility: "visible;"}}>
                        <Link to='/IoT' className="grid-item">
                            <figure className="block-reveal">
                                <div className="block-horizzontal"></div>
                                <img src={img2} alt=""></img>
                            </figure>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
