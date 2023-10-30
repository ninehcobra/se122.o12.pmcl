import "./trialsection.scss"

const TrialSection = () => {
    return (
        <section className="trial-sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 offset-lg-1">
                        <div className="coupon">
                            <h2 className="coupon-title">50% Discout <br />
                                Voucher
                                <span>on your next Enroll
                                </span>
                            </h2>
                            <p>Use coupon code <strong>Elearnhub</strong></p>

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 offset-lg-1">
                        <form action="#" className="form trial-form bg-light">
                            <h3 className="form-title">15 day free trial</h3>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="tel" placeholder="Your Phone" />
                            <button type="submit" className="btn btn-filled">Get your free trial</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TrialSection