"use client"
import "./featurebox.scss"


const FeatureBox = () => {
    return (
        <section className="feature-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="f-box">
                            <i className="fas fa-drafting-compass"></i>
                            <strong>100,000 online courses</strong>
                            <span>Explore a variety of fresh topics</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-center">
                        <div className="f-box">
                            <i className="far fa-user-circle"></i>
                            <strong>Expert instruction</strong>
                            <span>Find the right instructor for you</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-center">
                        <div className="f-box">
                            <i className="fas fa-history"></i>
                            <strong>Lifetime access</strong>
                            <span>Learn on your schedule</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureBox