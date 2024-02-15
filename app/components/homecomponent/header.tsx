'use client'
import Link from "next/link"
import "./header.scss"


const Header = () => {


    return (
        // Header
        <header >
            <div className="container">
                <nav className="navbar" >
                    {/* LOGO */}
                    <Link className="logo" href={'/'}>
                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png">
                        </img>
                        <div>Nineh Learning</div>
                    </Link>
                    <ul className="navbar-nav">
                        <li className="has-menu-child">
                            <Link href="">TRANG CHỦ</Link>

                            <i className="menu-dropdown fa-solid fa-chevron-down"></i>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">CHÚNG TÔI</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">KHÓA HỌC</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">BLOGS</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">SỰ KIỆN</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">PAGES</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">LIÊN HỆ</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="/login">ĐĂNG NHẬP</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header