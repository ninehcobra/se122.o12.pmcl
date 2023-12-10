import Header from "@/app/components/dashboardcomponent/header"
import Sidebar from "../../components/teachermodecomponent/coursescomponent/sidebar"
import './courses.scss'
import Link from 'next/link'

const Courses = () => {
    return (
        <div className="course-wrapper">
            <Link href="/teacher/create">
                <button>Tạo khóa học</button>
            </Link>
        </div>
    )
}

export default Courses