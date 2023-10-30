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
                            <Link href="">HOME</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link href={""}>Home 1</Link>
                                </li>
                                <li>
                                    <Link href={""}>Home 1</Link>
                                </li>
                                <li>
                                    <Link href={""}>Home 1</Link>
                                </li>
                            </ul>
                            <i className="menu-dropdown fa-solid fa-chevron-down"></i>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">ABOUT</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">COURSES</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">BLOG</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">EVENTS</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">PAGES</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">CONTACT</Link>
                        </li>
                        <li className="has-menu-child">
                            <Link href="">LOG IN</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header