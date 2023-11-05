
import Link from 'next/link'

import './globals.scss'

export default async function NotFound() {


    return (
        <div>
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
                        <a className="notfound_home_btn" href="/">Truy cập trang chủ</a>
                    </p>
                    <p>👉 hoặc đi tới
                        <a className="notfound_mycourse_btn" href="/my-courses">Khóa học của tôi</a>
                    </p>
                </div>
            </div>
        </div>
    )
}