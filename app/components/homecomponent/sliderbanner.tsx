'use client'
import "./sliderbanner.scss"
import Slider from "react-slick";

import { useState } from 'react'


const SliderBanner = () => {

    const [openCate, setOpenCate] = useState(false)
    const [isSelected, setIsSelected] = useState()



    const settings = {
        swipe: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2,
        cssEase: "linear"
    };
    return (
        <section className="slider-banner">

            <div className="slider-carousel">
                <Slider {...settings}>
                    <div>
                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/1.jpg"></img>
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/2.jpg"></img>
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/3.jpg"></img>
                    </div>
                </Slider>
            </div>

            <div className="container">
                <div className="col-md-11 text-center m-auto slider-content">
                    <h2>
                        <span>GIÁO DỤC!</span>
                        THÔNG MINH THẬT TUYỆT VỜI
                    </h2>
                    <div className={'search-form'}>

                        <div className={openCate ? "search-select open" : "search-select"} onClick={() => setOpenCate(!openCate)}>
                            <span>Tất cả</span>
                            <ul className={openCate ? "list list-open" : "list"}>
                                <li data-value="All Categories" className="option selected focus">Tất cả</li>
                                <li data-value="usa" className="option">CNTT &amp; Phần mềm</li>
                                <li data-value="canada" className="option">Âm nhạc</li>
                                <li data-value="australia" className="option">Thiết kế đồ họa</li>
                            </ul>
                        </div>
                        <input type="text" className="text" />
                        <button  >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default SliderBanner