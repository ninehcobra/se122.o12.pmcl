'use client'

import { updateChapter } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const TitleForm = (params) => {

    let chapter = params.chapter
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()


    const handleSaveTitle = async () => {
        if (title) {
            chapter.title = title
            console.log(chapter)
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
                    Tiêu đề Chương học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa tiêu đề</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Tiêu đề mới" />

                    {!isSubmit ? <button onClick={handleSaveTitle}>Lưu</button> : <button disabled>Đang lưu...</button>}

                </div> : <div>{chapter.title}</div>
            }

        </div>
    )
}

export default TitleForm