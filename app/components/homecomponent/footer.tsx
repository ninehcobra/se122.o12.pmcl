import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="foo-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Information for</h4>
                                <ul>
                                    <li><a href="#">Prospective undergraduates</a></li>
                                    <li><a href="#">Prospective graduate students</a></li>
                                    <li><a href="#">Businesses/Partnerships</a></li>
                                    <li><a href="#">Visitors/Tourists</a></li>
                                    <li><a href="#">Parliamentarians</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li><a href="#">Contact Searches</a></li>
                                    <li><a href="#">Jobs and Vacancies</a></li>
                                    <li><a href="#">University images</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Information About</h4>
                                <ul>
                                    <li><a href="#">Strategic Plan</a></li>
                                    <li><a href="#">Fees and Funding</a></li>
                                    <li><a href="#">Museums and collections</a></li>
                                    <li><a href="#">Statement on Modern Slavery</a></li>
                                    <li><a href="#">Data privacy / GDPR</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Security Brand</h4>
                                <ul>
                                    <li><a href="#">Privacy Statement</a></li>
                                    <li><a href="#">Report Copyright Infringement</a></li>
                                    <li><a href="#">Report Security Issue</a></li>
                                    <li><a href="#">Trademark Notice</a></li>
                                    <li><a href="#">Access Control</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="foo-btm">
                <div className="container">
                    <p className="copyright">Copyright © 2023 <a href="#">Nineh</a>. All rights reserved.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer