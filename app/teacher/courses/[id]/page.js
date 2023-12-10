'use client'

import { getCourse } from "@/services/courseService"
import './coursedetail.scss'
import TitleForm from "./components/titleform"
import DescriptionForm from "./components/descriptionform"
import ThumbnailForm from "./components/thumbnailform"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CategoryForm from "./components/categoryform"


const Courses = ({ params }) => {
    const [course, setCourse] = useState()
    const [completionText, setCompletionText] = useState('')

    const router = useRouter()

    const fetchCourse = async () => {

        let res = await getCourse(params.id);

        if (res && res.EC === 0) {
            setCourse(res.DT);
            changeCompletionText(res.DT)
        } else {
            return router.push('/teacher/courses');
        }

    }

    const changeCompletionText = (data) => {
        const requiredFields = [
            data.title,
            data.description,
            data.thumbnail,
            data.newPrice,
            data.categoryId
        ];

        const totalFields = requiredFields.length;
        const completedFields = requiredFields.filter(Boolean).length;
        const completionText = `(${completedFields}/${totalFields})`;
        setCompletionText(completionText);
    }

    useEffect(() => {
        fetchCourse()

    }, [])






    return (
        course ?
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

                    <TitleForm course={course} changeCompletionText={changeCompletionText} />
                    <DescriptionForm course={course} changeCompletionText={changeCompletionText} />
                    <ThumbnailForm course={course} changeCompletionText={changeCompletionText} />
                    <CategoryForm course={course} changeCompletionText={changeCompletionText} />
                </div>
                <div className="right-content">
                </div>
            </div>
            : ''
    )
}

export default Courses