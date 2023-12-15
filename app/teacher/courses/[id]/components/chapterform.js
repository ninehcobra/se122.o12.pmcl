'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import { createChapter } from "@/services/courseService"
import ChapterList from "./chapterlist"
import { updateChapterPosition } from "@/services/courseService"


const ChapterForm = (params) => {

    let course = params.course
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()

    const onReorder = async (arr) => {
        try {
            let res = await updateChapterPosition(arr)
            toast('Cập nhật thành công')
        } catch (error) {
            toast.error('Xảy ra lỗi.')
        }
    }


    const handleCreateChapter = async () => {
        if (title) {
            let res = await createChapter({
                title: title,
                courseId: course.id
            })
            if (res && res.EC === 0) {
                changeCompletionText(course, true)
                toast('Lưu thành công')
                setTitle('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền tiêu đề chương học')
        }
    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Chương học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Thêm chương học</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <textarea onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Tên chương học" />

                    {!isSubmit ? <button onClick={handleCreateChapter}>Lưu</button> : <button disabled>Đang lưu...</button>}

                </div> : course.Chapters ? <ChapterList onReorder={onReorder} items={course.Chapters} /> : <div>Chưa có chương nào trong khóa học này</div>
            }
            <div style={{ fontStyle: 'italic', fontSize: '12px', marginTop: '10px ' }}>Bạn có thể kéo thả để thay đổi thứ tự chương khóa học</div>
        </div>
    )
}

export default ChapterForm