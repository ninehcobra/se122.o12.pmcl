'use client'

import { updateCourse } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const DescriptionForm = (params) => {

    let course = params.course
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [description, setDescription] = useState('')
    const [isSubmit, setIsSubmit] = useState(true)

    const router = useRouter()


    const handleSaveDescription = async () => {
        if (description) {
            course.description = description
            let res = await updateCourse(course)
            if (res && res.EC === 0) {
                changeCompletionText(course)
                toast('Lưu thành công')
                setDescription('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền mô tả')
        }
    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Mô tả khóa học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa mô tả</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Mô tả mới" />

                    {isSubmit ? <button onClick={handleSaveDescription}>Lưu</button> : <button disabled>Đang lưu...</button>}

                </div> : course.description ? <div>{course.description}</div> : <div style={{ fontStyle: 'italic' }}>Không có mô tả</div>
            }

        </div>
    )
}

export default DescriptionForm