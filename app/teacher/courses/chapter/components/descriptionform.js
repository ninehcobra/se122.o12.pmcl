'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { updateChapter } from '@/services/courseService';
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation';

const DescriptionForm = (params) => {
    const router = useRouter()

    let chapter = params.chapter
    let changeCompletionText = params.changeCompletionText

    const [description, setDescription] = useState(chapter && chapter.description ? chapter.description : '');
    const [isEditing, setIsEditing] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSaveDescription = async () => {
        if (description) {
            chapter.description = description
            let res = await updateChapter(chapter)
            if (res && res.EC === 0) {
                changeCompletionText(chapter)
                toast('Lưu thành công')
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
                    Mô tả Chương học
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
                    <ReactQuill style={{ marginBottom: '12px', backgroundColor: 'white', color: 'black' }} theme="snow" value={description} onChange={setDescription} />

                    {!isSubmit ? <button className='button-save' onClick={handleSaveDescription}>Lưu</button> : <button className='button-save' disabled>Đang lưu...</button>}

                </div> : chapter.description ? <div className='content' style={{ marginTop: '12px', marginLeft: '8px' }} dangerouslySetInnerHTML={{ __html: chapter.description }}></div> : <div style={{ fontStyle: 'italic' }}>Chưa có mô tả</div>
            }

        </div>
    )
}

export default DescriptionForm

{/* <ReactQuill theme="snow" value={description} onChange={setDescription} /> */ }