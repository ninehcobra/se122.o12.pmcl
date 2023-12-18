'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./sidebar.scss"
import { pathToRegexp } from 'path-to-regexp';
import Chapter from "./chapter"
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import ChapterDetail from "../components/chapterdetail"
import Header from "../../../components/dashboardcomponent/header"
import { getChapterDetail } from "@/services/courseService"

const Sidebar = ({ course, isPurchase }) => {
    const [activeId, setActiveId] = useState(null)
    const [chapter, setChapter] = useState(null)

    const changeActiveId = (id, type = 1) => {
        if (type === 1) {
            setActiveId(id)
        }

    }


    const fetchChapterDetail = async (id) => {
        let res = await getChapterDetail(id)
        if (res && res.EC === 0) {
            setChapter(res.DT)
        }
    }

    useEffect(() => {
        if (activeId) {
            fetchChapterDetail(activeId)
        }

    }, [activeId])



    return (
        <div className="app_sidebar">
            <div className="app_sidebar_wrap teacher_mode course_detail">
                <div className="course_title">
                    <div>{course.title}</div>
                </div>
                <div className="chapter-list">
                    {course ?
                        course.Chapters.map((chapter) => {
                            return (
                                <Chapter
                                    active={chapter.id === activeId}
                                    key={chapter.id}
                                    id={chapter.id}
                                    title={chapter.title}
                                    isCompleted={chapter.Progresses.length === 0 ? false : true}
                                    isLocked={!chapter.isFree && !isPurchase}
                                    changeActiveId={changeActiveId}
                                />
                            )
                        })
                        : ''}
                </div>
            </div>

            {/* content */}

            <div className="app_sidebar_content">
                <Header backBtn={true} searchHide={true} />
                {activeId ?

                    <ChapterDetail course={course} chapter={chapter} isPurchase={isPurchase} />
                    :

                    <div style={{ padding: '20px 10px 0 40px', display: 'flex' }}>
                        <div style={{ width: '65%', paddingRight: '20px' }}>
                            <div style={{ fontSize: '24px', color: 'black', fontWeight: 'bold' }}>{course.title}</div>
                            <div style={{ marginTop: '12px' }}>
                                <div style={{ color: 'black' }}>{course.description}</div>
                            </div>

                            <div style={{ marginTop: '12px' }}>
                                <div style={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>Nội dung khóa học</div>
                                <div>
                                    {course.Chapters.length} chương
                                </div>
                                <div style={{ marginTop: '8px' }}>
                                    {course ?
                                        course.Chapters.map((chapter) => {
                                            return (
                                                <div

                                                    style={{
                                                        width: '100%', backgroundColor: '#F5F5F5', marginBottom: '8px', padding: '8px', display: 'flex', alignItems: 'center', borderRadius: '5px',
                                                        border: '1px solid #EBEBEB'
                                                    }}>
                                                    <FaMinus style={{ color: '#FE4C1D', fontSize: '20px', margin: '0 12px' }} />
                                                    <div style={{ color: 'black ', fontWeight: 'bold' }}>{chapter.title}</div>
                                                </div>
                                            )
                                        })
                                        : ''}
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', flexDirection: 'column' }}>
                            <img style={{ width: '100%', borderRadius: '15px' }} src={course.thumbnail} />
                            <div style={{ marginTop: '8px' }}>
                                {
                                    isPurchase ?
                                        <div style={{
                                            height: '40px', width: '120px', borderRadius: '20px', backgroundColor: '#F05123', color: 'white', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                                        }}>

                                            TIẾP TỤC HỌC
                                        </div>
                                        :
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '12px 0', color: '#F05123'
                                            }}>{course.newPrice} VNĐ</div>
                                            <div style={{
                                                height: '40px', width: '120px', borderRadius: '20px', backgroundColor: '#F05123', color: 'white', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                                            }}>

                                                ĐĂNG KÝ HỌC
                                            </div>
                                            <div style={{ marginTop: '12px', display: 'flex', width: '250px', color: 'black' }}>
                                                <div style={{ display: 'flex', width: '20%', alignItems: 'flex-end', marginRight: '8px', flexDirection: 'column', lineHeight: '40px' }}>
                                                    <PiChalkboardTeacherBold style={{ fontSize: '24px', marginTop: '4px' }} />
                                                    <FaBookOpen style={{ fontSize: '24px', marginTop: '4px' }} />
                                                    <FaBatteryFull style={{ fontSize: '24px', marginTop: '4px' }} />
                                                </div>
                                                <div style={{ display: 'flex', width: '80%', alignItems: 'flex-start', flexDirection: 'column', lineHeight: '26px' }}>
                                                    <div style={{ marginTop: '4px' }}>{course.User.name}</div>
                                                    <div style={{ marginTop: '4px' }}>Tổng <strong>{course.Chapters.length}</strong> bài học</div>
                                                    <div style={{ marginTop: '2px' }}>Học ở mọi nơi</div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>



                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar