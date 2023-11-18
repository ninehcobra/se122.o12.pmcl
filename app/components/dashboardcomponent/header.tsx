import { useEffect, useState, useRef } from "react"
import "./header.scss"
import Link from "next/link"
import { useSelector } from 'react-redux';

const Header = () => {
    const [myCourse, setMyCourse] = useState(false)
    const [userSetting, setUserSetting] = useState(false)
    const notificationRef = useRef<HTMLDivElement>(null);
    const userSettingRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            console.log(userSettingRef)
            console.log(event.target);
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target) &&
                userSettingRef.current &&
                !userSettingRef.current.contains(event.target)
            ) {
                setMyCourse(false);
                setUserSetting(false);
            }

        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [myCourse])

    const info = useSelector((state: any) => state.personalInfo)
    console.log(info)

    return (
        <div className="navbar_wrapper">
            <Link href="/dashboard" style={{ textDecoration: 'none' }} className="navbar_logo">
                <Link href="/dashboard">
                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png" alt="nineh" />
                </Link>
                <h4 className="navbar_logo_heading">Nineh Learning</h4>
            </Link>
            <div className="navbar_body">
                <div>
                    <div className="search" aria-expanded="false">
                        <i className="fa-solid fa-magnifying-glass search_icon" ></i>
                        <input className="search_input" placeholder="Tìm kiếm khóa học, bài viết ..." value="" />
                    </div>
                </div>
            </div>
            <div className="navbar_action">
                <div>
                    <button onClick={() => setMyCourse(!myCourse)} className="navbar_mylearn" aria-expanded="false">Khóa học của tôi</button>
                    {myCourse ?
                        <div className="popup_mycourse" >
                            <ul className="mycourse_wrapper">
                                <div className="mycourse_header">
                                    <h6 className="mycourse_heading">Khóa học của tôi</h6>
                                    <a className="mycourse_view_all" href="/my-courses">Xem tất cả</a>
                                </div>
                                <div className="mycourse_content">
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/javascript-co-ban">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/1.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/javascript-co-ban">Lập Trình JavaScript Cơ Bản</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 6 tháng trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/reactjs">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/reactjs">Xây Dựng Website với ReactJS</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 7 tháng trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        : ''
                    }


                </div>
                <div>
                    <div className="navbar_action_btn" id="notification-button" aria-expanded="false">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell NavBar_action-icon__l9MxX" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z">
                        </path>
                        </svg>
                    </div>
                </div>
                <div onClick={() => {

                    setUserSetting(!userSetting)
                    console.log(userSetting)
                }} className="navbar_avatar_wrapper" ref={userSettingRef} aria-expanded="false">
                    <div className="fallback_avatar" >
                        <img className="navbar_avatar"
                            src={info.avatar}
                            alt={info.name} />
                    </div>
                </div>

                {
                    userSetting ?
                        <div className="popup_info" >
                            <ul className="user_wrapper">
                                <div className="user_menu">
                                    <div className="avatar_wrapper">
                                        <div className="fallback_avatar">
                                            <img src={info.avatar} alt="avatar" />
                                        </div>
                                    </div>
                                    <div className="user_info">
                                        <span>{info.name}</span>
                                        <div className="user_email">{info.email}</div>
                                    </div>
                                </div>
                                <hr />
                                <ul className="user_list">
                                    <li>
                                        <Link className="user_item" href={`/user/${info.name}`}>Trang cá nhân</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="user_list">
                                    <li>
                                        <a className="user_item" href={`/dashboard/user/${info.name}`}>Viết blog</a>
                                    </li>
                                </ul>
                                <ul className="user_list">
                                    <li>
                                        <a className="user_item" href={`/dashboard/user/${info.name}`}>Bài viết của tôi</a>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="user_list">
                                    <li>
                                        <a className="user_item" href={`/dashboard/user/${info.name}`}>Đăng xuất</a>
                                    </li>
                                </ul>
                            </ul>
                        </div> :
                        ''
                }

            </div>
        </div>
    )
}

export default Header