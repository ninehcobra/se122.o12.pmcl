'use client'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcBarChart, FcParallelTasks, FcStackOfPhotos, FcSportsMode, FcMusic, FcCompactCamera, FcEngineering } from "react-icons/fc";
import { getUserCourse } from "@/services/courseService"
import Spinner from 'react-bootstrap/Spinner';
import CourseList from "./components/CourseList"
import ReactPaginate from 'react-paginate';

const Course = () => {
    const [selectedCategory, setSelectedCategory] = useState(''); // Khởi tạo giá trị mặc định
    const [isFetch, setIsFetch] = useState(true)
    const [courses, setCourses] = useState(null)
    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const info = useSelector((state) => state.personalInfo);
    const dispatch = useDispatch();

    const handleCategoryClick = (categoryTitle) => {
        setSelectedCategory(categoryTitle);
    };

    const fetchCourse = async () => {
        let res = await getUserCourse(selectedCategory, currentPage, limit, search)
        if (res && res.EC === 0 && res.DT) {
            setCourses(res.DT.products)
            setTotalPage(res.DT.totalPages)
        }
        setIsFetch(false)
    }

    useEffect(() => {
        fetchCourse()
    }, [selectedCategory, search, currentPage])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <div className='course-wrapper'>
            <div style={{ marginBottom: '12px' }} >
                <div className="search" aria-expanded="false" >
                    <i style={{ marginRight: '12px' }} className="fa-solid fa-magnifying-glass search_icon" ></i>
                    <input style={{ outline: 'none', borderRadius: '20px', borderColor: '#80808033', padding: '4px' }} onChange={(e) => setSearch(e.target.value)} className="search_input" placeholder="Tìm kiếm khóa học..." value={search} />
                </div>
            </div>

            <div className='category-list'>
                <div
                    className={`category-item ${selectedCategory === 1 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 1 ? '' : 1)}
                >
                    <div className='category-icon'><FcBarChart /></div>
                    <div className='category-title'>Kế toán</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 2 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 2 ? '' : 2)}
                >
                    <div className='category-icon'><FcParallelTasks /></div>
                    <div className='category-title'>Khoa học máy tính</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 3 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 3 ? '' : 3)}
                >
                    <div className='category-icon'><FcStackOfPhotos /></div>
                    <div className='category-title'>Quay phim</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 4 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 4 ? '' : 4)}
                >
                    <div className='category-icon'><FcSportsMode /></div>
                    <div className='category-title'>Thể thao</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 5 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 5 ? '' : 5)}
                >
                    <div className='category-icon'><FcMusic /></div>
                    <div className='category-title'>Âm nhạc</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 6 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 6 ? '' : 6)}
                >
                    <div className='category-icon'><FcCompactCamera /></div>
                    <div className='category-title'>Chụp ảnh</div>
                </div>
                <div
                    className={`category-item ${selectedCategory === 7 ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(selectedCategory === 7 ? '' : 7)}
                >
                    <div className='category-icon'><FcEngineering /></div>
                    <div className='category-title'>Kỹ thuật</div>
                </div>
            </div>
            <div>
                {isFetch
                    ?
                    <div style={{ height: '75vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Spinner variant='info' />
                    </div>
                    :
                    <div>
                        <CourseList courses={courses} />
                    </div>
                }

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '12px' }} className="pagination_wrapper">

                {totalPage > 0 ? <ReactPaginate
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={4}
                    pageCount={totalPage > 1 ? totalPage - 1 : totalPage}
                    previousLabel="<<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}

                /> : ''}

            </div>
        </div>
    );
};

export default Course;
