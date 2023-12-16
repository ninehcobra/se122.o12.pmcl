'use client'

import { getChapter, deleteChapter, updateChapter } from "@/services/courseService"
import './chapter.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import TitleForm from "../components/titleform"
import DescriptionForm from "../components/descriptionform"
import AccessForm from "../components/accessform"
import VideoForm from "../components/videoform"
import Banner from "../../../../components/banner"
import { toast } from "react-toastify"
import Modal from 'react-modal';


const Chapter = ({ params }) => {
    const [chapter, setChapter] = useState()
    const [completionText, setCompletionText] = useState('')
    const [reFetch, setReFetch] = useState(false)
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

    const onDeleteChapter = async () => {
        let res = await deleteChapter(params.id)
        if (res && res.EC === 0) {
            toast('Xóa thành công')
            router.back()
            router.refresh()
        }
        else {
            toast("Lỗi hệ thông")
        }
    }

    const onChangeIsPublished = async () => {

        if (chapter && chapter.title && chapter.description && chapter.videoUrl) {
            chapter.isPublished = !chapter.isPublished
            let res = await updateChapter(chapter)
            if (res && res.EC === 0) {
                changeCompletionText(chapter)
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
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    return (
        chapter ?
            <div>
                {chapter.isPublished ? '' : <Banner label={'Chương học này chưa được công khai. Nó sẽ không được hiển thị trong khóa học.'} />}
                {/* <div className="back-btn" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: '18px', marginTop: '16px' }}>
                    <i className="fa-solid fa-arrow-left"></i>
                    <div style={{ marginLeft: '8px' }}>Quay về cài đặt khóa học</div>
                </div> */}
                <div style={{ padding: '0 40px 0 20px' }}>
                    <div className="create-course-process" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div className="title">Thiết lập Chương học</div>
                            <div className="process">Tiến độ thiết lập {completionText}</div>
                        </div>

                        <div style={{ display: 'flex', marginRight: '40px' }}>
                            <div
                                onClick={onChangeIsPublished}
                                className="btn-control" style={{
                                    color: 'black', fontWeight: 'bold', padding: '4px', border: '1px solid #80808033', borderRadius: '5px', fontSize: '13px', height: '35px',
                                    display: 'flex', alignItems: 'center', marginRight: '8px'
                                }}>
                                <div>{chapter && chapter.isPublished ? "Ẩn khóa học" : "Công khai"}</div>
                            </div>
                            <div onClick={openModal} className="btn-control" style={{
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
                                    Tùy chỉnh Chương học của bạn
                                </div>
                            </div>

                            <TitleForm chapter={chapter} changeCompletionText={changeCompletionText} />
                            <DescriptionForm chapter={chapter} changeCompletionText={changeCompletionText} />

                            <div className="customize-wrapper">
                                <div className="customize-icon">
                                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/view.png"></img>
                                </div>
                                <div className="customize-title">
                                    Cài đặt quyền truy cập
                                </div>
                            </div>
                            <AccessForm chapter={chapter} changeCompletionText={changeCompletionText} />
                        </div>
                        <div className="right-content">
                            <div className="customize-wrapper">
                                <div className="customize-icon">
                                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/play-button.png"></img>
                                </div>
                                <div className="customize-title">
                                    Thêm Video
                                </div>
                            </div>
                            <VideoForm chapter={chapter} changeCompletionText={changeCompletionText} />

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
                        <div style={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }}>Bạn có chắc là muốn xóa Chương học này?</div>
                        <div>Hành động này không thể khôi phục lại.</div>
                        <div style={{ display: 'flex', marginTop: '12px', justifyContent: 'flex-end' }}>
                            <div onClick={closeModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }} className="button-save button-cancel">Hủy</div>
                            <div onClick={onDeleteChapter} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="button-save">Tiếp tục</div>
                        </div>
                    </div>
                </Modal>
            </div>
            : ''
    )
}

export default Chapter