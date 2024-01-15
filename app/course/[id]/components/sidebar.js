'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./sidebar.scss"
import { pathToRegexp } from 'path-to-regexp';
import Chapter from "./chapter"
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import ChapterDetail from "../components/chapterdetail"
import Header from "../../../components/dashboardcomponent/header"
import { getChapterDetail } from "@/services/courseService"
import { PayPalButton } from "react-paypal-button-v2"
import { toast } from "react-toastify";
import { purchase } from "@/services/courseService";
import ProgressBar from "@ramonak/react-progress-bar";
import { ChevronRight, ChevronDown } from "lucide-react";

const Sidebar = ({ course, isPurchase, handleRefreshPage }) => {
    const [activeId, setActiveId] = useState(null)
    const [lessonId, setLessonId] = useState(null)
    const [activeLesson, setActiveLesson] = useState(null)

    const [isDone, setIsDone] = useState(false)
    const [chapter, setChapter] = useState(null)
    const [isPay, setIsPay] = useState(false)
    const [price, setPrice] = useState(course.newPrice)
    const [expandedChapters, setExpandedChapters] = useState([]);
    const [expandedLessons, setExpandedLessons] = useState([]);

    const toggleChapter = (chapterId) => {
        if (expandedChapters.includes(chapterId)) {
            // Nếu đã mở, đóng lại
            setExpandedChapters(expandedChapters.filter(id => id !== chapterId));
        } else {
            // Nếu chưa mở, thêm vào danh sách các chương đã mở
            setExpandedChapters([...expandedChapters, chapterId]);
        }
    };
    const toggleLesson = (lessonId) => {
        setExpandedLessons((prevLessons) => {
            if (prevLessons.includes(lessonId)) {
                return prevLessons.filter((id) => id !== lessonId);
            } else {
                return [...prevLessons, lessonId];
            }
        });
    };

    const isChapterExpanded = (chapterId) => expandedChapters.includes(chapterId);
    const isLessonExpanded = (lessonId) => {
        return expandedLessons.includes(lessonId);
    };

    const changeActiveId = (id, type = 1) => {
        if (type === 1) {
            if (activeId === id) {
                setActiveId(null)
            }
            else {
                setActiveId(id)
            }
        }

    }


    const fetchChapterDetail = async (id) => {
        let res = await getChapterDetail(id)
        if (res && res.EC === 0) {
            setChapter(res.DT)
        }
    }

    useEffect(() => {

        fetchChapterDetail(activeId)


    }, [activeId, isDone])

    const convertCurrency = (amount) => {
        const fixedRate = 0.000043;
        const amountUSD = amount * fixedRate;
        const roundedAmountUSD = amountUSD.toFixed(2);
        return roundedAmountUSD;
    };

    const purchaseCourse = async () => {
        let res = await purchase(course.id)
        if (res && res.EC === 0) {
            handleRefreshPage()
            return (true)
        }
        return (false)
    }

    const handleRefresh = () => {
        setIsDone(!isDone)
        handleRefreshPage()
    }
    const convertMinutesToHours = (minutes) => {
        const hours = Math.ceil(minutes / 60);
        return hours;
    };

    const countLessonTypes = (lessons) => {
        // Khởi tạo đối tượng để lưu trữ số lượng từng loại bài học
        const lessonCounts = {
            video: 0,
            reading: 0,
            quiz: 0,
        };

        // Sử dụng reduce để tính số lượng từng loại bài học
        lessons.reduce((accumulator, lesson) => {
            if (lesson.lessonType === 'video') {
                accumulator.video += 1;
            } else if (lesson.lessonType === 'reading') {
                accumulator.reading += 1;
            } else if (lesson.lessonType === 'quiz') {
                accumulator.quiz += 1;
            }

            return accumulator;
        }, lessonCounts);

        return lessonCounts;
    };


    const chooseLesson = (lesson) => {
        if (lessonId === lesson.id) {
            setLessonId(null)
            setActiveLesson(null)
        }
        else {
            setLessonId(lesson.id)
            setActiveLesson(lesson)
        }
    }
    return (
        <div className="app_sidebar">
            <div className="app_sidebar_wrap teacher_mode course_detail">
                <div className="course_title">
                    <div style={{ marginTop: '24px', padding: '0 12px' }}>{course.title}</div>
                    {isPurchase ? <div style={{ marginTop: '8px', width: '100%', padding: '12px' }}>
                        <ProgressBar
                            bgColor={'#0183C5'}
                            height="10px"
                            isLabelVisible={false}
                            completed={course.progress} />
                        <div style={{ margin: ' 8px 0', fontWeight: 'bold', color: '#0183C5' }}>Hoàn thành {Math.round(course.progress)} %</div>
                    </div> : <div style={{ marginBottom: '24px' }}></div>}

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
                                    // isCompleted={chapter.Progresses.length === 0 ? false : true}
                                    lessonId={lessonId}
                                    isCompleted={false}
                                    isLocked={!chapter.isFree && !isPurchase}
                                    changeActiveId={changeActiveId}
                                    chooseLesson={chooseLesson}
                                />
                            )
                        })
                        : ''}
                </div>
            </div>

            {/* content */}

            <div className="app_sidebar_content">
                <Header backBtn={true} searchHide={true} />
                {
                    activeId
                        ?
                        activeLesson
                            ?
                            <ChapterDetail course={course} chapter={activeLesson} isPurchase={isPurchase} setIsDone={handleRefresh} />
                            :
                            <ChapterDetail course={course} chapter={chapter} isPurchase={isPurchase} setIsDone={handleRefresh} />
                        :

                        <div style={{ padding: '20px 10px 0 40px', display: 'flex' }}>
                            <div style={{ width: '65%', paddingRight: '20px' }}>
                                <div style={{ fontSize: '24px', color: 'black', fontWeight: 'bold' }}>{course.title}</div>
                                <div style={{ marginTop: '12px' }}>
                                    <div style={{ color: 'black' }}>{course.description}</div>
                                </div>

                                <div style={{ marginTop: '12px' }}>
                                    <div className="container">
                                        <div className="row">

                                            <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>Mục tiêu khóa học</div>
                                            <div>
                                                {JSON.parse(course.overview).map((item, index) => (
                                                    <div style={{ color: 'black' }} key={index} className="mb-2">
                                                        <i style={{ marginLeft: '8px' }} className="fa-solid fa-hashtag"></i>  {item}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>

                                    <div style={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>Nội dung khóa học</div>
                                    <div>
                                        {course.Chapters.length} chương
                                    </div>

                                    <div style={{ marginTop: '8px' }}>
                                        {course ?
                                            course.Chapters.map((chapter) => (
                                                <div>
                                                    <div
                                                        key={chapter.id}
                                                        style={{
                                                            width: '100%', backgroundColor: '#F5F5F5', marginTop: '8px', padding: '8px', display: 'flex', alignItems: 'center', borderRadius: '5px',
                                                            border: '1px solid #EBEBEB', borderBottom: 'none'
                                                        }}
                                                    >
                                                        <div
                                                            style={{ color: '#FE4C1D', fontSize: '20px', margin: '0 12px', cursor: 'pointer' }}
                                                            onClick={() => toggleChapter(chapter.id)}
                                                        >
                                                            {isChapterExpanded(chapter.id) ? <FaMinus /> : <FaPlus />}
                                                        </div>
                                                        <div style={{ color: 'black ', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                            {chapter.title}
                                                            <i style={{ fontSize: '12px', marginLeft: '8px', marginRight: '8px' }} className="fa-solid fa-circle" />
                                                            <div style={{ color: '#808080', fontSize: '13px' }}>
                                                                Cần {convertMinutesToHours(chapter.duration)} giờ để hoàn thành
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {isChapterExpanded(chapter.id) && (
                                                        <div className="container" style={{
                                                            width: '100%', backgroundColor: '#F5F5F5', marginBottom: '8px', padding: '12px', display: 'flex', borderRadius: '5px',
                                                            border: '1px solid #EBEBEB', borderTop: 'none', flexDirection: 'column'
                                                        }}>
                                                            {/* Hiển thị thông tin mô tả của chương ở đây */}
                                                            <div style={{ color: 'black', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: chapter.description }}></div>
                                                            <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                                                                Chương học này bao gồm:
                                                            </div>
                                                            <div style={{ display: 'flex', flexDirection: 'row', color: 'black', fontSize: '13px' }}>
                                                                <div style={{ marginRight: '14px' }}>
                                                                    <i style={{ fontSize: '16px' }} className="fa-regular fa-circle-play"></i> {countLessonTypes(chapter.Lessons).video} Video
                                                                </div>
                                                                <div style={{ marginRight: '14px' }}>
                                                                    <i style={{ fontSize: '16px' }} className="fa-solid fa-book-open"></i> {countLessonTypes(chapter.Lessons).reading} bài đọc
                                                                </div>
                                                                <div>
                                                                    <i style={{ fontSize: '16px' }} className="fa-regular fa-circle-question"></i> {countLessonTypes(chapter.Lessons).quiz} bài Quiz
                                                                </div>

                                                            </div>
                                                            <div>
                                                                <div onClick={() => toggleLesson(chapter.id)} style={{ display: 'flex', alignItems: 'center', color: '#0056D2', fontWeight: 'bold', fontSize: '13px' }}>
                                                                    {!isLessonExpanded(chapter.id) ? <ChevronRight /> : <ChevronDown />}
                                                                    <div>
                                                                        Nhấn vào đây để hiển thị chi tiết tất cả bài học
                                                                    </div>
                                                                </div>
                                                                {isLessonExpanded(chapter.id) && (
                                                                    <div>
                                                                        {
                                                                            chapter.Lessons.map((lesson) => (
                                                                                <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0', cursor: 'pointer' }} onClick={() => handleOpenModal(lesson.id)}>
                                                                                    <div style={{ marginRight: '12px' }}>
                                                                                        {
                                                                                            lesson.lessonType === "video"
                                                                                                ?
                                                                                                <i style={{ fontSize: '16px' }} className="fa-solid fa-circle-play"></i>
                                                                                                :
                                                                                                lesson.lessonType === "reading"
                                                                                                    ?
                                                                                                    <i style={{ fontSize: '16px' }} className="fa-solid fa-book-open"></i>
                                                                                                    :
                                                                                                    <i class="fa-regular fa-circle-question"></i>
                                                                                        }
                                                                                    </div>
                                                                                    <div style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>{lesson.title}</div>
                                                                                    <div style={{ color: '#808080', fontSize: '13px', marginLeft: '8px' }}>
                                                                                        {`  - Cần ${lesson.duration} phút để hoàn thành`}
                                                                                    </div>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                            : ''}
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', flexDirection: 'column' }}>
                                <img style={{ width: '100%', borderRadius: '15px' }} src={course.thumbnail} />
                                <div style={{ marginTop: '8px' }}>
                                    {
                                        isPurchase ?
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div style={{
                                                    height: '40px', width: '120px', borderRadius: '20px', backgroundColor: '#F05123', color: 'white', display: 'flex',
                                                    alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                                                }}>

                                                    TIẾP TỤC HỌC

                                                </div>
                                                <div style={{ marginTop: '12px', display: 'flex', width: '250px', color: 'black' }}>
                                                    <div style={{ display: 'flex', width: '20%', alignItems: 'flex-end', marginRight: '8px', flexDirection: 'column', lineHeight: '40px' }}>
                                                        <PiChalkboardTeacherBold style={{ fontSize: '24px', marginTop: '4px' }} />
                                                        <FaBookOpen style={{ fontSize: '24px', marginTop: '4px' }} />
                                                        <FaBatteryFull style={{ fontSize: '24px', marginTop: '4px' }} />
                                                    </div>
                                                    <div style={{ display: 'flex', width: '80%', alignItems: 'flex-start', flexDirection: 'column', lineHeight: '26px' }}>
                                                        <div style={{ marginTop: '4px' }}>{course.User.name}</div>
                                                        <div style={{ marginTop: '4px' }}>Tổng <strong>{course.Chapters.length}</strong> chương</div>
                                                        <div style={{ marginTop: '2px' }}>Học ở mọi nơi</div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '12px 0', color: '#F05123'
                                                }}>{course.newPrice.toLocaleString('vi-VN')} VNĐ</div>
                                                {
                                                    isPay
                                                        ?
                                                        <PayPalButton
                                                            amount={convertCurrency(course.newPrice)}
                                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                            onSuccess={(details, data) => {
                                                                if (purchaseCourse()) { toast("Thanh toán thành công bởi " + details.payer.name.given_name); }
                                                                else toast.error('Thanh toán không thành công')
                                                            }}
                                                            onError={() => {
                                                                toast.error('Thanh toán không thành công')
                                                            }}
                                                            onCancel={() => {
                                                                toast.error('Thanh toán không thành công')
                                                            }}
                                                            options={{
                                                                clientId: "ATB021v7PNCgCGfG5cYkEJVwGS-SnAWjHCLg8tZnkqk0yMIQWKLSphyh72YpWezyCy3dHXpXG3ZsQejb"
                                                            }}
                                                        />
                                                        :
                                                        <div onClick={() => setIsPay(true)} style={{
                                                            height: '40px', width: '120px', borderRadius: '20px', backgroundColor: '#F05123', color: 'white', display: 'flex',
                                                            alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                                                        }}>

                                                            ĐĂNG KÝ HỌC
                                                        </div>
                                                }
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