"use client"
import "./course.scss"
import Slider from "react-slick";
import { useState } from 'react'

const Course = () => {
    const settings = {

        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="courses">
            <div className="container">

                <div className="row">
                    <div className="col-lg-7 col-md-9 m-auto text-center">
                        <div className="sec-heading">
                            <h3 className="sec-title">Các khóa học nổi bật</h3>
                        </div>
                    </div>
                </div>


                <Slider {...settings}>
                    <div className="owl-item" ><div className="col-12">
                        <div className="single-course">
                            <figure className="course-thumb">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/courses/1.jpg" alt="" />
                                <strong className="ribbon">$29.00</strong>
                            </figure>
                            <div className="course-content">
                                <h3><a href="course-details.html">HTML5 for beginners</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...
                                </p>
                                <div className="enroll">
                                    <div className="ratings">
                                        <span className="total-students"><i className="fa-regular fa-user"></i> 220 Students</span>
                                        <a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a>
                                        <span className="enrolled">(330)</span>
                                    </div>
                                    <div className="course-meta text-right">

                                        <a href="#" className="btn btn-filled">Enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="owl-item" ><div className="col-12">
                        <div className="single-course">
                            <figure className="course-thumb">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/courses/2.jpg" alt="" />
                                <strong className="ribbon">$29.00</strong>
                            </figure>
                            <div className="course-content">
                                <h3><a href="course-details.html">HTML5 for beginners</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...
                                </p>
                                <div className="enroll">
                                    <div className="ratings">
                                        <span className="total-students"><i className="fa-regular fa-user"></i> 220 Students</span>
                                        <a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a>
                                        <span className="enrolled">(330)</span>
                                    </div>
                                    <div className="course-meta text-right">

                                        <a href="#" className="btn btn-filled">Enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="owl-item" ><div className="col-12">
                        <div className="single-course">
                            <figure className="course-thumb">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/courses/3.jpg" alt="" />
                                <strong className="ribbon">$29.00</strong>
                            </figure>
                            <div className="course-content">
                                <h3><a href="course-details.html">HTML5 for beginners</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...
                                </p>
                                <div className="enroll">
                                    <div className="ratings">
                                        <span className="total-students"><i className="fa-regular fa-user"></i> 220 Students</span>
                                        <a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a>
                                        <span className="enrolled">(330)</span>
                                    </div>
                                    <div className="course-meta text-right">

                                        <a href="#" className="btn btn-filled">Enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="owl-item" ><div className="col-12">
                        <div className="single-course">
                            <figure className="course-thumb">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/courses/4.jpg" alt="" />
                                <strong className="ribbon">$29.00</strong>
                            </figure>
                            <div className="course-content">
                                <h3><a href="course-details.html">HTML5 for beginners</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...
                                </p>
                                <div className="enroll">
                                    <div className="ratings">
                                        <span className="total-students"><i className="fa-regular fa-user"></i> 220 Students</span>
                                        <a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a>
                                        <span className="enrolled">(330)</span>
                                    </div>
                                    <div className="course-meta text-right">

                                        <a href="#" className="btn btn-filled">Enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="owl-item" ><div className="col-12">
                        <div className="single-course">
                            <figure className="course-thumb">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/courses/5.jpg" alt="" />
                                <strong className="ribbon">$29.00</strong>
                            </figure>
                            <div className="course-content">
                                <h3><a href="course-details.html">HTML5 for beginners</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...
                                </p>
                                <div className="enroll">
                                    <div className="ratings">
                                        <span className="total-students"><i className="fa-regular fa-user"></i> 220 Students</span>
                                        <a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a>
                                        <span className="enrolled">(330)</span>
                                    </div>
                                    <div className="course-meta text-right">

                                        <a href="#" className="btn btn-filled">Enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="owl-item" ><div className="col-12">
                        <div className="single-course">
                            <figure className="course-thumb">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/courses/6.jpg" alt="" />
                                <strong className="ribbon">$29.00</strong>
                            </figure>
                            <div className="course-content">
                                <h3><a href="course-details.html">HTML5 for beginners</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...
                                </p>
                                <div className="enroll">
                                    <div className="ratings">
                                        <span className="total-students"><i className="fa-regular fa-user"></i> 220 Students</span>
                                        <a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a><a href="#"><i className="fa-regular fa-star"></i>
                                        </a>
                                        <span className="enrolled">(330)</span>
                                    </div>
                                    <div className="course-meta text-right">

                                        <a href="#" className="btn btn-filled">Enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>



                </Slider>

            </div>
        </section>

    )
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} type="button" role="presentation" className="next">
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} type="button" role="presentation" className="prev" >
            <i className="fa-solid fa-arrow-left"></i>
        </button>
    );
}

export default Course