'use client'

import { updateCourse } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const OverviewForm = (params) => {
    let course = params.course;
    let changeCompletionText = params.changeCompletionText;

    const [isEditing, setIsEditing] = useState(false);
    const [newTarget, setNewTarget] = useState("");
    const [overview, setOverview] = useState(course.overview ? JSON.parse(course.overview) : []);
    const [isSubmit, setIsSubmit] = useState(false);

    const router = useRouter();

    const handleSaveTitle = async () => {
        if (overview.length > 0) {
            course.overview = overview;
            let res = await updateCourse(course);
            if (res && res.EC === 0) {
                changeCompletionText(course);
                toast('Lưu thành công');
                setIsEditing(false);
                setIsSubmit(false);
                router.refresh()
            }
        } else {
            toast.warning('Vui lòng điền tối thiểu một mục tiêu');
        }
    };

    const handleAddTarget = () => {
        if (newTarget.trim() !== "") {
            setOverview([...overview, newTarget.trim()]);
            setNewTarget("");
        }
    };

    const handleRemoveTarget = (index) => {
        const updatedOverview = [...overview];
        updatedOverview.splice(index, 1);
        setOverview(updatedOverview);
    };


    return (
        <div className="title-form">
            <div className="title-form-label">
                <div>Mục tiêu khóa học</div>
                {!isEditing ? (
                    <div
                        className="edit-btn"
                        onClick={() => setIsEditing(true)}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Thêm mục tiêu</div>
                    </div>
                ) : (
                    <div
                        className="edit-btn"
                        onClick={() => { setIsEditing(false); setOverview(course.overview ? JSON.parse(course.overview) : []) }}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                )}
            </div>

            {isEditing ? (
                <div className="title-form-wrapper">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type="text"
                            onChange={(e) => setNewTarget(e.target.value)}
                            value={newTarget}
                            placeholder="Thêm mục tiêu mới"
                        />
                        <button onClick={handleAddTarget}>Thêm</button>
                    </div>
                    {
                        overview.length > 0 ?
                            (
                                <ul>
                                    {overview.map((target, index) => (
                                        <li key={index}>
                                            {target}{' '}
                                            <span onClick={() => handleRemoveTarget(index)}>Xóa</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : ''
                    }
                    {!isSubmit ? (
                        <button onClick={handleSaveTitle}>Lưu</button>
                    ) : (
                        <button disabled>Đang lưu...</button>
                    )}
                </div>
            ) : (
                <div>
                    {course.overview && JSON.parse(course.overview).length > 0 ? (
                        <ul>
                            {JSON.parse(course.overview).map(
                                (item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    ) : (
                        <div style={{ fontStyle: 'italic' }}>Chưa có mục tiêu</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default OverviewForm