'use client'
import { useState } from 'react'
import Slider from "react-slick";
import "./dashboard.scss"

export default function Dashboard() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section className="main_content">
            <div className="home_slideshow">
                <div className="slideshow_wrapper">

                    <Slider {...settings}>
                        <div className='slideshow_item'>
                            <div className="slideshow_left">
                                <h2 className="slideshow_heading">
                                    <a rel="noreferrer noopener noreferrer" target="_blank" href="https://fullstack.edu.vn/landing/htmlcss">Học HTML CSS cho người mới
                                        <span className="Slideshow_crownIcon__j++0O">
                                            <img src="/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg" alt="" />
                                        </span>
                                    </a>
                                </h2>
                                <p className="slideshow_desc">Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.</p>
                                <div>
                                    <a rel="noreferrer noopener noreferrer" className="slideshow_btn" target="_blank" href="https://fullstack.edu.vn/landing/htmlcss">HỌC THỬ MIỄN PHÍ</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>

                    </Slider>

                </div>
            </div>

        </section>
    )
}



function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} type="button" role="presentation" className="next">
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} type="button" role="presentation" className="prev" >
            <i className="fa-solid fa-arrow-left"></i>
        </button>
    );
}