'use client'
import Header from "@/app/components/dashboardcomponent/header"
import "./blog.scss"
import { getBlogDetail } from "@/services/blogService"
import { useEffect, useState } from "react"
import NotFound from '../../not-found'
import { set } from "lodash"
import { AuthCheck } from "@/app/components/homecomponent/authcheck"
export default function Page({ params }) {

    const [blog, setBlog] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const fetchBlogDetail = async () => {
        let res = await getBlogDetail(params.id)
        if (res.EC === 0) {
            setBlog(res.DT)
            setIsLoading(false)
        }
        else {
            setIsLoading(false)
        }

    }

    const calTime = (time) => {
        var thoiDiem = new Date(time);

        // Lấy thời điểm hiện tại
        var thoiDiemHienTai = new Date();

        // Tính số mili giây giữa hai thời điểm
        var soMiligiay = thoiDiemHienTai - thoiDiem;

        // Chuyển đổi mili giây thành số giây
        var soGiay = Math.floor(soMiligiay / 1000);

        if (soGiay >= 60) {
            // Chuyển đổi số giây thành số phút
            var soPhut = Math.floor(soGiay / 60);

            if (soPhut >= 60) {
                // Chuyển đổi số phút thành số giờ
                var soGio = Math.floor(soPhut / 60);

                if (soGio >= 24) {
                    // Chuyển đổi số giờ thành số ngày
                    var soNgay = Math.floor(soGio / 24);
                    return soNgay + ' ngày trước';
                } else {
                    return soGio + ' giờ trước';
                }
            } else {
                return soPhut + ' phút trước';
            }
        } else {
            return soGiay + ' giây trước';
        }
    }

    useEffect(() => {
        fetchBlogDetail()

    }, [])
    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <div style={{ marginLeft: '10px' }}>ĐANG TẢI DỮ LIỆU...</div>
            </div>
        )
    }
    console.log(blog)

    return (
        <div>
            <AuthCheck>
                {blog ?

                    <div>
                        <Header searchHide={true} />
                        <div className="container blog-container">
                            <div className="container">
                                <h1 className="blog-title">{blog.title}</h1>
                                <div className="blog-header">
                                    <div className="blog-user">
                                        <a href={`/user/${blog.ownerId}`}>
                                            <div className="user-avatar-fallback">
                                                <img src={blog.User.avatar}></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-user-detail">
                                        <div className="username">{blog.User.name}</div>
                                        <div className="createdDay">{calTime(blog.createdAt)}</div>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div >
                                        <div className="container" dangerouslySetInnerHTML={{ __html: blog.contentHTML }}></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div className="notfound">
                        <div className="notfound_header_wrapper">
                            <a className="notfound_logo_link" href="/">
                                <img className="notfound_logo" src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png" alt="F8 Logo" />
                            </a>
                            <p className="notfound_product_name">
                                <a href="/">Học để nâng cao giá trị bản thân</a>
                            </p>
                        </div>
                        <div className="notfound_content">
                            <div className="notfound_error">
                                <img src='/404-error.png'></img>
                            </div>
                            <h1 className="notfound_error_title">Không tìm thấy nội dung 😓</h1>
                            <ul>
                                <li className="notfound_suggest">URL của nội dung này đã
                                    <strong>bị thay đổi</strong>
                                    hoặc
                                    <strong>không còn tồn tại</strong>.
                                </li>
                                <li className="notfound_suggestion">Nếu bạn
                                    <strong>đang lưu URL này</strong>
                                    , hãy thử <strong>truy cập lại từ trang chủ</strong>
                                    thay vì dùng URL đã lưu.</li>
                            </ul>
                            <p>
                                <a className="notfound_home_btn" href="/dashboard">Truy cập trang chủ</a>
                            </p>
                            <p>👉 hoặc đi tới
                                <a className="notfound_mycourse_btn" href="/my-courses">Khóa học của tôi</a>
                            </p>
                        </div>
                    </div>
                }
            </AuthCheck>
        </div>
    )
}