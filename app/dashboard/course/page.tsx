'use client'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcBarChart, FcParallelTasks, FcStackOfPhotos, FcSportsMode, FcMusic, FcCompactCamera, FcEngineering } from "react-icons/fc";

const Course = () => {
    const [selectedCategory, setSelectedCategory] = useState(''); // Khởi tạo giá trị mặc định

    const info = useSelector((state: any) => state.personalInfo);
    const dispatch: any = useDispatch();

    const handleCategoryClick = (categoryTitle: string) => {
        setSelectedCategory(categoryTitle);
    };

    return (
        <div className='course-wrapper'>
            <div className='category-list'>
                <div
                    className={`category-item ${selectedCategory === 'Kế toán' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Kế toán' ? '' : 'Kế toán')}
                >
                    <div className='category-icon'><FcBarChart /></div>
                    <div className='category-title'>Kế toán</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 'Khoa học máy tính' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Khoa học máy tính' ? '' : 'Khoa học máy tính')}
                >
                    <div className='category-icon'><FcParallelTasks /></div>
                    <div className='category-title'>Khoa học máy tính</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 'Quay phim' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Quay phim' ? '' : 'Quay phim')}
                >
                    <div className='category-icon'><FcStackOfPhotos /></div>
                    <div className='category-title'>Quay phim</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 'Thể thao' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Thể thao' ? '' : 'Thể thao')}
                >
                    <div className='category-icon'><FcSportsMode /></div>
                    <div className='category-title'>Thể thao</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 'Âm nhạc' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Âm nhạc' ? '' : 'Âm nhạc')}
                >
                    <div className='category-icon'><FcMusic /></div>
                    <div className='category-title'>Âm nhạc</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 'Chụp ảnh' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Chụp ảnh' ? '' : 'Chụp ảnh')}
                >
                    <div className='category-icon'><FcCompactCamera /></div>
                    <div className='category-title'>Chụp ảnh</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 'Kỹ thuật' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 'Kỹ thuật' ? '' : 'Kỹ thuật')}
                >
                    <div className='category-icon'><FcEngineering /></div>
                    <div className='category-title'>Kỹ thuật</div>
                </div>
            </div>
        </div>
    );
};

export default Course;
