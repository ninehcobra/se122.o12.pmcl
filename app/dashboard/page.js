'use client'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "./dashboard.scss"
import { useSelector } from 'react-redux';
import { getDashboardCourses } from '@/services/courseService';
import CourseList from './course/components/CourseList';
import { FaRegClock } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

export default function Dashboard() {

    const [isFetch, setIsFetch] = useState(true)
    const [completedCourses, setCompletedCourses] = useState([])
    const [coursesInProgress, setCourseInProgress] = useState([])

    const fetchCourse = async () => {
        let res = await getDashboardCourses()
        if (res && res.EC === 0 && res.DT) {
            if (res.DT) {
                setCompletedCourses(res.DT.completedCourses)
                setCourseInProgress(res.DT.coursesInProgress)
            }
        }
        setIsFetch(false)
    }

    useEffect(() => {
        fetchCourse()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <section className="main_content">
            <div className="home_slideshow">
                <div className="slideshow_wrapper">

                    <Slider {...settings}>
                        <div className='slideshow_item'>
                            <div className="slideshow_left">
                                <h2 className="slideshow_heading">
                                    <a rel="noreferrer noopener noreferrer" target="_blank" href="https://fullstack.edu.vn/landing/htmlcss">Đa dạng các khóa học
                                        <span className="Slideshow_crownIcon__j++0O">
                                            <img src="/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg" alt="" />
                                        </span>
                                    </a>
                                </h2>
                                <p className="slideshow_desc">Được giảng dạy bởi các giảng viên có chuyên môn cao và lâu năm trong ngành.</p>
                                <div>
                                    <a rel="noreferrer noopener noreferrer" className="slideshow_btn" target="_blank" href="/dashboard/course">ĐĂNG KÝ HỌC NGAY</a>
                                </div>
                            </div>

                            <div className='slideshow_right' style={{ alignItems: 'center', display: 'flex' }}>
                                <a rel="noreferrer noopener noreferrer" target="_blank" href="/dashboard/course">
                                    <img style={{ height: '300px' }} className="Slideshow_img__K-c9+" src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png" />
                                </a>
                                <div style={{ color: 'white', marginRight: '65px', fontSize: '28px', fontWeight: 'bold' }}>Nineh Learning</div>
                            </div>
                        </div>


                    </Slider>

                </div>
            </div>

            {/* home wrapper */}
            <div className='home_wrapper'>
                <div style={{ width: '100%', margin: '0 12px', display: 'flex' }}>
                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '70px', width: '95%', border: '1px solid #80808033', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginLeft: '12px', height: '50px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DBEEFB', borderRadius: '50%' }}>
                                <FaRegClock style={{ fontSize: '35px', color: '#0B4469' }} />
                            </div>
                            <div style={{ marginLeft: '8px' }}>
                                <div style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', lineHeight: '24px' }}>Chưa hoàn thành</div>
                                <div style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '12px' }}>{coursesInProgress.length} khóa</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '70px', width: '95%', border: '1px solid #80808033', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginLeft: '12px', height: '50px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#CBF9E0', borderRadius: '50%' }}>
                                <BsCheck2Circle style={{ fontSize: '35px', color: '#0A5135' }} />
                            </div>
                            <div style={{ marginLeft: '8px' }}>
                                <div style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', lineHeight: '24px' }}>Đã hoàn thành</div>
                                <div style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '12px' }}>{completedCourses.length} khóa</div>
                            </div>
                        </div>
                    </div>
                </div>
                <CourseList courses={[...(completedCourses || []), ...(coursesInProgress || [])]} />

            </div>

        </section>
    )
}



function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} type="button" role="presentation" className="next">
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} type="button" role="presentation" className="prev" >
            <i className="fa-solid fa-arrow-left"></i>
        </button>
    );
}