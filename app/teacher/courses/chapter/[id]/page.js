'use client'

import { getChapter } from "@/services/courseService"
import './chapter.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import TitleForm from "../components/titleform"



const Chapter = ({ params }) => {
    const [chapter, setChapter] = useState()
    const [completionText, setCompletionText] = useState('')
    const [reFetch, setReFetch] = useState(false)

    const router = useRouter()

    const fetchChapter = async () => {

        let res = await getChapter(params.id);

        if (res && res.EC === 0) {
            setChapter(res.DT);
            changeCompletionText(res.DT)
        } else {
            return router.push('/teacher/courses');
        }
        console.log(res.DT)
    }

    const changeCompletionText = (data, refresh = false) => {
        if (refresh) {
            setReFetch(!reFetch)
        }
        else {
            const requiredFields = [
                data.title,
                data.description,
                data.videoUrl,
            ];

            const totalFields = requiredFields.length;
            const completedFields = requiredFields.filter(Boolean).length;
            const completionText = `(${completedFields}/${totalFields})`;
            setCompletionText(completionText);
        }
    }

    useEffect(() => {
        fetchChapter()

    }, [reFetch])






    return (
        chapter ?
            <div>
                {/* <div className="back-btn" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: '18px', marginTop: '16px' }}>
                    <i className="fa-solid fa-arrow-left"></i>
                    <div style={{ marginLeft: '8px' }}>Quay về cài đặt khóa học</div>
                </div> */}
                <div className="create-course-process">
                    <div className="title">Thiết lập Chương học</div>
                    <div className="process">Tiến độ thiết lập {completionText}</div>
                </div>
                <div className="course-wrapper">
                    <div className="left-content">


                        <div className="customize-wrapper">
                            <div className="customize-icon">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/customize.png"></img>
                            </div>
                            <div className="customize-title">
                                Tùy chỉnh Chương học của bạn
                            </div>
                        </div>

                        <TitleForm chapter={chapter} changeCompletionText={changeCompletionText} />

                    </div>
                    <div className="right-content">
                        <div className="customize-wrapper">
                            <div className="customize-icon">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/checklist.png"></img>
                            </div>
                            <div className="customize-title">
                                Chương học
                            </div>
                        </div>



                        <div className="customize-wrapper">
                            <div className="customize-icon">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/dollar.png"></img>
                            </div>
                            <div className="customize-title">
                                Bán khóa học
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            : ''
    )
}

export default Chapter