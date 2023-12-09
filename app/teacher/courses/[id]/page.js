import { getCourse } from "@/services/courseService"
import { redirect } from "next/navigation"
import './coursedetail.scss'
import TitleForm from "./components/titleform"


const Courses = async ({ params }) => {

    let res = await getCourse(params.id)
    let course = res.DT
    if (res && res.EC === 0 && course) {
        console.log(course)
    }
    else {
        return redirect('/teacher/courses')
    }

    const requiredFields = [
        course.title,
        course.description,
        course.thumbnail,
        course.newPrice,
        course.categoryId
    ]


    const totalFields = requiredFields.length

    const completedFields = requiredFields.filter(Boolean).length
    const completionText = `(${completedFields}/${totalFields})`


    return (
        <div className="course-wrapper">
            <div className="left-content">
                <div className="create-course-process">
                    <div className="title">Thiết lập khóa học</div>
                    <div className="process">Tiến độ thiết lập {completionText}</div>
                </div>

                <div className="customize-wrapper">
                    <div className="customize-icon">
                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/customize.png"></img>
                    </div>
                    <div className="customize-title">
                        Tùy chỉnh khóa học của bạn
                    </div>
                </div>

                <TitleForm course={course} />
            </div>
        </div>
    )
}

export default Courses