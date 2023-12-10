'use client'

import { updateCourse } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState, useRef, useCallback } from "react"
import { toast } from "react-toastify"
import { useDropzone } from 'react-dropzone'
import axios from 'axios';

const ThumbnailForm = (params) => {

    let course = params.course
    let changeCompletionText = params.changeCompletionText

    const [thumbnail, setThumbnail] = useState()
    const [isEditing, setIsEditing] = useState(false)

    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setThumbnail(acceptedFiles[0])
        }


    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const uploadImg = async (file) => {
        if (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
            const image = new FormData()
            image.append("file", file)
            image.append("cloud_name", "dwpz7w8y4")
            image.append("upload_preset", "bleu4scs")

            const res = await axios.post("https://api.cloudinary.com/v1_1/dwpz7w8y4/image/upload", image)

            const imgData = res.data.secure_url
            return imgData
        }
    }


    const handleSaveImage = async () => {
        setIsSubmit(true)
        if (thumbnail) {
            let linkThumnail = await uploadImg(thumbnail)
            course.thumbnail = linkThumnail
            let res = await updateCourse(course)
            if (res && res.EC === 0) {
                changeCompletionText(course)
                toast('Lưu thành công')
                setThumbnail('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng chọn ảnh')
        }
    }



    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Xử lý tệp tin đã chọn ở đây
            setThumbnail(selectedFile);
        }
    };

    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Mô tả khóa học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        {course.thumbnail ? <i class="fa-solid fa-pencil"></i> : <i class="fa-solid fa-circle-plus"></i>}
                        <div onClick={() => { setIsEditing(true) }} style={{ marginLeft: '12px' }}>{!course.thumbnail ? 'Thêm ảnh' : 'Sửa ảnh'}</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => { setIsEditing(false) }} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>
            <div className="title-form-wrapper">

                {isEditing ?

                    <div>
                        {thumbnail
                            ?
                            <div >

                                <img onClick={handleImageClick} src={URL.createObjectURL(thumbnail)} style={{ width: '100%' }}></img>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            :
                            <div className='drag_wrapper' {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <div style={{ height: '250px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#C0C5CD', borderRadius: '15px' }} >
                                            <p style={{ fontStyle: 'italic' }}>Kéo và thả ảnh tại đây...</p>
                                        </div> :
                                        <div style={{ height: '250px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#C0C5CD', borderRadius: '15px' }}>
                                            <p style={{ fontWeight: 'bold' }}>Bạn có thể nhấn vào để chọn file ảnh hoặc kéo thả vào đây.</p>
                                        </div>
                                }
                            </div>
                        }
                        {!isSubmit ? <button style={{ marginTop: '12px' }} onClick={handleSaveImage}>Lưu</button> : <button style={{ marginTop: '12px', width: '120px' }} disabled>Đang lưu...</button>}
                    </div>



                    : course.thumbnail ? <img style={{ marginTop: '12px' }} src={course.thumbnail}></img> :
                        <div style={{ width: '100 %', height: '350px', backgroundColor: '#C0C5CD', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img style={{ height: '80px', width: '80px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/none-img.png" />
                        </div>
                }
            </div>
        </div>
    )
}

export default ThumbnailForm