'use client'

import { getCategory, updateCourse } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


const CategoryForm = (params) => {

    let course = params.course
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [categoryId, setCateGoryId] = useState(course.categoryId)
    const [isSubmit, setIsSubmit] = useState(false)
    const [categories, setCategories] = useState([])

    const router = useRouter()

    const fetchCategory = async () => {
        let res = await getCategory()
        if (res.EC === 0) {
            await setCategories(res.DT)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])


    const handleSaveCategoryId = async () => {
        if (categoryId) {
            course.categoryId = categoryId
            console.log(course)
            let res = await updateCourse(course)
            if (res && res.EC === 0) {
                changeCompletionText(course)
                toast('Lưu thành công')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng chọn danh mục')
        }
    }

    const onChangeCategoryId = (id) => {
        setCateGoryId(id)
    }

    const getCategoryName = (id) => {

        const foundCategory = categories.find((item) => item.id == id);

        return foundCategory ? foundCategory.name : 'Không thuộc danh mục nào';
    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Danh mục
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa Danh mục</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {
                isEditing
                    ?
                    <div className="title-form-wrapper">
                        <select onChange={(e) => onChangeCategoryId(e.target.value)}>
                            <option key={-1} value={null}>----Chọn danh mục----</option>
                            {categories ? categories.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            }) : 'ha'}
                        </select>

                        {!isSubmit ? <button onClick={handleSaveCategoryId}>Lưu</button> : <button disabled>Đang lưu...</button>}

                    </div>
                    :
                    <div>{getCategoryName(course.categoryId)}</div>
            }

        </div>
    )
}

export default CategoryForm