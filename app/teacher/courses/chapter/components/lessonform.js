'use client'

import { updateChapter } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import { Grip, Pencil } from "lucide-react";

const LessonForm = (params) => {

    let chapter = params.chapter
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()


    const handleSaveTitle = async () => {
        if (title) {
            chapter.title = title
            let res = await updateChapter(chapter)
            if (res && res.EC === 0) {
                changeCompletionText(chapter)
                toast('Lưu thành công')
                setTitle('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền tiêu đề')
        }
    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Bài học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Thêm bài học</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Tên bài học hoặc bài kiểm tra" />

                    {!isSubmit ? <button className="button-save" onClick={handleSaveTitle}>Lưu</button> : <button className="button-save" disabled>Đang lưu...</button>}

                </div> : chapter.Lessons && chapter.Lessons.length > 0
                    ?
                    <div style={{ maxHeight: '450px', overflowY: 'auto', }}>
                        {
                            chapter.Lessons.map((lesson) => {
                                return (
                                    <div style={{
                                        height: '47px', padding: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', backgroundColor: 'rgb(222, 227, 237)',
                                        marginBottom: '16px', justifyContent: 'space-between'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img
                                                style={{ height: '30px', width: '30px', marginRight: '8px' }}
                                                src={lesson.ReadingLesson ? "https://raw.githubusercontent.com/ninehcobra/free-host-image/main/reading.png" : lesson.VideoLesson ? "https://raw.githubusercontent.com/ninehcobra/free-host-image/main/video.png" : 'https://raw.githubusercontent.com/ninehcobra/free-host-image/main/quiz.png'}></img>
                                            <div>{lesson.title}</div>
                                        </div>

                                        <div onClick={() => { }} style={{ cursor: 'pointer' }}>
                                            <Pencil style={{ marginRight: '4px' }} />
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div></div>
            }



        </div>
    )
}

export default LessonForm