'use client'
import { useState } from 'react'
import Slider from "react-slick";
import "./dashboard.scss"
import { useSelector } from 'react-redux';


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

                            <div className='slideshow_right'>
                                <a rel="noreferrer noopener noreferrer" target="_blank" href="https://fullstack.edu.vn/landing/htmlcss">
                                    <img className="Slideshow_img__K-c9+" src="https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png" alt="Khóa Học HTML CSS Pro" title="Học HTML CSS cho người mới" />
                                </a>
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

            {/* home wrapper */}
            <div className='home_wrapper'>
                <div className="scrolllist">
                    <div>
                        <div className="scrolllist_heading_wrapper">
                            <h2 className="scrolllist_heading">
                                <span rel="noreferrer" target="_self">Các khóa học tiêu biểu
                                    <span className="scrolllist_label">Mới</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="scrolllist_body">
                        <section className="scrolllist_section">
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>

                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                            <section className="scrolllist_item_wrap">
                                <div className="scrolllist_item_wrapper">
                                    <a className="scrolllist_item" title="HTML CSS Pro" target="_self" href="/landing/htmlcss/">
                                        <button className="scrolllist_btn">Xem khóa học</button>
                                        <img className="scrolllist_item_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro" />
                                    </a>
                                    <h3 className="scrolllist_title">
                                        <a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a>
                                    </h3>
                                    <div className="price">
                                        <span className="old_price">2.500.000đ</span>
                                        <span className="main_price">1.299.000đ</span>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
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