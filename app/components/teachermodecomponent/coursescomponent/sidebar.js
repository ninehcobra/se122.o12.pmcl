'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./sidebar.scss"
import { pathToRegexp } from 'path-to-regexp';
const Sidebar = ({ children }) => {
    const pathname = usePathname()
    const coursesIdPath = pathToRegexp('/teacher/courses/:id');
    const isCoursesIdPath = coursesIdPath.test(pathname);

    return (
        <div className="app_sidebar">
            <div className="app_sidebar_wrap teacher_mode">
                <div className="app_sidebar_wrapper" id="sidebar">

                    <ul className="sidebar_list">
                        <li>
                            <Link aria-current="page" className={pathname === '/teacher/courses' || pathname === '/teacher/create' || isCoursesIdPath ? "sidebar_item  onselect" : "sidebar_item"} href="/teacher/courses">
                                <i className="fa-solid fa-book"></i>
                                <span>Khóa học</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={pathname === "/teacher/analytics" ? "sidebar_item  onselect" : "sidebar_item"} href="/teacher/analytics">
                                <i className="fa-solid fa-chart-simple"></i>
                                <span>Thống kê</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* content */}
            <div className="app_sidebar_content">
                {children}
            </div>
        </div>
    )
}

export default Sidebar