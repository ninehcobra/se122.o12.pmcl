'use client'

import { getCourse, deleteCourse, updateCourse } from "@/services/courseService"
import './coursedetail.scss'
import TitleForm from "./components/titleform"
import DescriptionForm from "./components/descriptionform"
import ThumbnailForm from "./components/thumbnailform"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CategoryForm from "./components/categoryform"
import PriceForm from "./components/priceform"
import ChapterForm from "./components/chapterform"
import Banner from "../../../components/banner"
import Modal from 'react-modal';
import { toast } from "react-toastify"


const Courses = ({ params }) => {
    const [course, setCourse] = useState()
    const [completionText, setCompletionText] = useState('')
    const [reFetch, setReFetch] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none'
            , border: '1px solid #80808033', borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        },
    };

    const fetchCourse = async () => {

        let res = await getCourse(params.id);

        if (res && res.EC === 0) {
            setCourse(res.DT);
            changeCompletionText(res.DT)
        } else {
            return router.push('/teacher/courses');
        }

    }

    const changeCompletionText = (data, refresh = false) => {
        if (refresh) {
            setReFetch(!reFetch)
        }
        else {
            const requiredFields = [
                data.title,
                data.description,
                data.thumbnail,
                data.newPrice,
                data.categoryId,
                data.Chapters && Array.isArray(data.Chapters) ? data.Chapters.some(chapter => chapter.isPublished) : false
            ];

            const totalFields = requiredFields.length;
            const completedFields = requiredFields.filter(Boolean).length;
            const completionText = `(${completedFields}/${totalFields})`;
            const isComplete = requiredFields.every(Boolean)

            setIsComplete(isComplete)
            setCompletionText(completionText);
        }
    }

    useEffect(() => {
        fetchCourse()

    }, [reFetch])

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    const onDeleteCourse = async () => {
        let res = await deleteCourse(params.id)
        if (res && res.EC === 0) {
            toast('Xóa thành công')
            router.push('/teacher/courses')
            router.refresh()
        }
        else {
            toast("Lỗi hệ thông")
        }
    }

    const onChangeIsPublished = async () => {

        if (course && isComplete) {
            course.isPublished = !course.isPublished
            let res = await updateCourse(course)
            if (res && res.EC === 0) {
                changeCompletionText(course)
                toast('Lưu thành công')
                router.refresh()
            }
            else {
                toast.error('Cập nhật thất bại')
            }
        }
        else {
            toast.error('Vui lòng cập nhật đầy đủ thông tin cần thiết.')
        }
    }

    return (
        course ?
            <div>
                {!course.isPublished ?
                    <Banner label={'Khóa học này chưa được công khai. Học viên sẽ không thể tìm thấy khóa học này ở trên ứng dụng.'} />
                    : ''}
                <div style={{ padding: "0 40px 0 20px" }}>
                    <div className="create-course-process" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div className="title">Thiết lập Chương học</div>
                            <div className="process">Tiến độ thiết lập {completionText}</div>
                        </div>

                        <div style={{ display: 'flex', marginRight: '40px' }}>
                            <div
                                onClick={() => onChangeIsPublished()}
                                className="btn-control" style={{
                                    color: 'black', fontWeight: 'bold', padding: '4px', border: '1px solid #80808033', borderRadius: '5px', fontSize: '13px', height: '35px',
                                    display: 'flex', alignItems: 'center', marginRight: '8px'
                                }}>
                                <div>{course && course.isPublished ? "Ẩn khóa học" : "Công khai"}</div>
                            </div>
                            <div onClick={() => openModal()} className="btn-control" style={{
                                color: 'black', fontWeight: 'bold', padding: '8px', backgroundColor: 'black', borderRadius: '5px', fontSize: '13px', height: '35px'
                                ,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <img style={{ height: '20px', width: '20px', marginLeft: '4px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/delete.png"></img>
                            </div>
                        </div>

                    </div>


                    <div className="course-wrapper">
                        <div className="left-content">


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
                            <div className="customize-wrapper">
                                <div className="customize-icon">
                                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/checklist.png"></img>
                                </div>
                                <div className="customize-title">
                                    Chương học
                                </div>
                            </div>

                            <ChapterForm course={course} changeCompletionText={changeCompletionText} />

                            <div className="customize-wrapper">
                                <div className="customize-icon">
                                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/dollar.png"></img>
                                </div>
                                <div className="customize-title">
                                    Bán khóa học
                                </div>
                            </div>
                            <PriceForm course={course} changeCompletionText={changeCompletionText} />

                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div style={{ width: '400px', height: '140px', backgroundColor: 'white', padding: '20px' }}>
                        <div style={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }}>Bạn có chắc là muốn xóa Khóa học này?</div>
                        <div>Hành động này không thể khôi phục lại.</div>
                        <div style={{ display: 'flex', marginTop: '12px', justifyContent: 'flex-end' }}>
                            <div onClick={closeModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }} className="button-save button-cancel">Hủy</div>
                            <div onClick={() => onDeleteCourse()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="button-save">Tiếp tục</div>
                        </div>
                    </div>
                </Modal>
            </div>

            : ''
    )
}

export default Courses