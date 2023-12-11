'use client'

import { updateCourse } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const PriceForm = (params) => {

    let course = params.course
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [price, setPrice] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()


    const handleSaveTitle = async () => {
        if (price) {
            course.newPrice = price
            console.log(course)
            let res = await updateCourse(course)
            if (res && res.EC === 0) {
                changeCompletionText(course)
                toast('Lưu thành công')
                setPrice('')
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
                    Giá khóa học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa giá</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <input onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Giá mới" />

                    {!isSubmit ? <button onClick={handleSaveTitle}>Lưu</button> : <button disabled>Đang lưu...</button>}

                </div> : course.newPrice ? <div>{course.newPrice.toLocaleString('vi-VN')} <strong>VNĐ</strong></div> : <div style={{ fontStyle: 'italic' }}>Miễn phí</div>
            }

        </div>
    )
}

export default PriceForm