'use client'

import { updateChapter } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState, useRef, useCallback } from "react"
import { toast } from "react-toastify"
import { useDropzone } from 'react-dropzone'
import axios from 'axios';

const VideoForm = (params) => {

    let chapter = params.chapter
    let changeCompletionText = params.changeCompletionText

    const [video, setVideo] = useState()
    const [isEditing, setIsEditing] = useState(false)

    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setVideo(acceptedFiles[0])
        }


    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const uploadVideo = async (file) => {
        if (file && (file.type.includes("video"))) {
            const videoData = new FormData()
            videoData.append("file", file)
            videoData.append("cloud_name", "dwpz7w8y4")
            videoData.append("upload_preset", "bleu4scs")

            const res = await axios.post("https://api.cloudinary.com/v1_1/dwpz7w8y4/video/upload", videoData)

            const videoURL = res.data.secure_url
            return videoURL
        }
    }


    const handleSaveVideo = async () => {
        setIsSubmit(true)
        if (video) {
            let linkVideo = await uploadVideo(video)
            chapter.videoUrl = linkVideo
            let res = await updateChapter(chapter)
            if (res && res.EC === 0) {
                changeCompletionText(chapter)
                toast('Lưu thành công')
                setVideo('')
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
                    Video
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        {chapter.videoURL ? <i class="fa-solid fa-pencil"></i> : <i class="fa-solid fa-circle-plus"></i>}
                        <div onClick={() => { setIsEditing(true) }} style={{ marginLeft: '12px' }}>{!chapter.videoUrl ? 'Thêm Video' : 'Sửa Video'}</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => { setIsEditing(false) }} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>
            <div className="title-form-wrapper">

                {isEditing ?

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {video
                            ?
                            <video controls>
                                <source style={{ width: '100%' }} src={URL.createObjectURL(video)} type="video/mp4"></source>
                            </video>
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
                        {!isSubmit ? <button className="button-save" style={{ marginTop: '12px' }} onClick={handleSaveVideo}>Lưu</button> : <button className="button-save" style={{ marginTop: '12px', width: '120px' }} disabled>Đang lưu...</button>}
                    </div>



                    : chapter.videoUrl ?
                        <div>
                            <video style={{ width: '100%' }} controls>
                                <source src={chapter.videoUrl} type="video/mp4"></source>
                            </video>
                        </div>
                        :
                        <div style={{ fontStyle: 'italic' }}>Chưa có Video nào</div>
                }
            </div>
        </div>
    )
}

export default VideoForm