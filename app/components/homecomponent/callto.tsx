'use client'
import "./callto.scss"

const Callto = () => {
    return (
        <section className="callto-action">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto text-center">
                        <h3>Đăng ký nhận tin mới</h3>
                        <p>Nhận các tin tức mới nhất</p>
                        <form className="newsletter" action="#">
                            <input type="text" placeholder="Nhập email của bạn" />
                            <button type="submit"><i className="fa-solid fa-location-arrow"></i>Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Callto