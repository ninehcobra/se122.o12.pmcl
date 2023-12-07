'use client'
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="foo-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Học tập để nâng cao giá trị bản thân</h4>
                                <ul>
                                    <li><div >Điện thoại: 0797260870</div></li>
                                    <li><div >Email: congchinh2903@gmail.com</div></li>
                                    <li><div >Đồ án này thuộc quyền sở hữu của</div></li>
                                    <li><div >Trương Nguyễn Công Chính</div></li>
                                    <li><div >sinh viên K15 của trường ĐH CNTT TP.HCM</div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Về Nineh Learning</h4>
                                <ul>
                                    <li><a href="#">Giới thiệu</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                    <li><a href="#">Điều khoản</a></li>
                                    <li><a href="#">Bảo mật</a></li>
                                    <li><a href="#">Cơ hội </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">Thông tin thêm</h4>
                                <ul>
                                    <li><a href="#">Github</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">LinkedIn</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-navigation">
                                <h4 className="widget-title">CÔNG TY TNHH MTV CÔNG NGHỆ GIÁO DỤC NINEH</h4>
                                <ul>
                                    <li><div >Ngày thành lập : 6/10/2023</div></li>
                                    <li><div >Lĩnh vực: Giáo dục </div></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="foo-btm">
                <div className="container">
                    <p className="copyright">Copyright © 2023 <a href="https://www.facebook.com/congchinh.truongnguyen.5/">Nineh</a>. All rights reserved.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer