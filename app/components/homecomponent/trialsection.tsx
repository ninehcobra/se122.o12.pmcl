import "./trialsection.scss"

const TrialSection = () => {
    return (
        <section className="trial-sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 offset-lg-1">
                        <div className="coupon">
                            <h2 className="coupon-title">Mã giảm giá <br />
                                50%
                                <span>vào lần đăng ký tiếp theo của bạn
                                </span>
                            </h2>
                            <p>Sử dụng mã này <strong>nineh2903</strong></p>

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 offset-lg-1">
                        <form action="#" className="form trial-form bg-light">
                            <h3 className="form-title">15 ngày thử miễn phí</h3>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="tel" placeholder="Your Phone" />
                            <button type="submit" className="btn btn-filled">Nhận bản dùng thử miễn phí</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TrialSection