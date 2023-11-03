import "./category.scss"
import Link from "next/link"

const Category = () => {
    return (
        <section className="categories bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-9 m-auto text-center">
                        <div className="sec-heading">
                            <span className="tagline">Danh mục hàng đầu</span>

                            <h3 className="sec-title" >   Chọn đúng danh mục <br />Xây dựng sự nghiệp của bạn</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/1.png" alt="" />
                            <span>CNTT &amp; Phần mềm</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/2.png" alt="" />
                            <span>Khoa học dữ liệu</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/3.png" alt="" />
                            <span>Development</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/4.png" alt="" />
                            <span>Thiết kế đồ họa</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/5.png" alt="" />
                            <span>Marketing</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/6.png" alt="" />
                            <span>Âm nhạc</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/7.png" alt="" />
                            <span>Nhiếp ảnh</span>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link href="#" className="icon-list-block">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/categories/8.png" alt="" />
                            <span>Tâm lý học</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category