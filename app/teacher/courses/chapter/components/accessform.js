'use client'

import { updateChapter } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const AccessForm = (params) => {

    let chapter = params.chapter
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [isFree, setIsFree] = useState(chapter.isFree)
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()


    const handleSaveIsFree = async () => {

        chapter.isFree = isFree
        let res = await updateChapter(chapter)
        if (res && res.EC === 0) {
            changeCompletionText(chapter)
            toast('Lưu thành công')
            setIsEditing(false)
            setIsSubmit(false)
            router.refresh()
        }

    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Quyền truy cập
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Chỉnh sửa</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <div style={{ padding: '20px', border: '1px solid #8080801a', marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                        <input checked={isFree} onChange={() => setIsFree(!isFree)} type="checkbox" />
                        <div style={{ marginLeft: '12px', paddingBottom: '18px' }}>Check vào ô này nếu bạn muốn Chương học này được xem trước miễn phí.</div>
                    </div>

                    {!isSubmit ? <button className="button-save" onClick={handleSaveIsFree}>Lưu</button> : <button className="button-save" disabled>Đang lưu...</button>}

                </div> : chapter.isFree ? <div style={{ fontWeight: 'bold' }}>Chương này được xem trước miễn phí</div> : <div style={{ fontStyle: 'italic' }}>Trang này không được xem trước</div>
            }

        </div>
    )
}

export default AccessForm