'use client'
import "./testimonial.scss"

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-9 m-auto text-center">
                        <div className="sec-heading">
                            <span className="tagline text-white">Testimonials</span>
                            <h3 className="sec-title text-white">What Our Users Say About Us</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-12 m-auto">
                        <div className="testimonialBox">
                            <span className="quote-sign"><i className="fa-solid fa-quote-left"></i></span>
                            <div className="test-caro owl-carousel owl-loaded owl-drag" data-slider-id="1">



                                <div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item active" ><div className="single-testimonial">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eco dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="testimonial-user">
                                        {/* <img src="images/avatar-small.png" className="avatar-small circle" alt="" /> */}
                                        <strong>Sansa Stark</strong>
                                    </div>
                                </div></div><div className="owl-item"><div className="single-testimonial">
                                    <p>Ypsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eco dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="testimonial-user">
                                        {/* <img src="images/avatar-small.png" className="avatar-small circle" alt="" /> */}
                                        <strong>Linda heiday</strong>
                                    </div>
                                </div></div><div className="owl-item" ><div className="single-testimonial">
                                    <p>Qonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eco dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="testimonial-user">
                                        {/* <img src="images/avatar-small.png" className="avatar-small circle" alt="" /> */}
                                        <strong>Anna Gunn</strong>
                                    </div>
                                </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev disabled"><i className="ti-arrow-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="ti-arrow-right"></i></button></div><div className="owl-dots disabled"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial