'use client'
import Header from "@/app/components/dashboardcomponent/header"
import Sidebar from "../../components/teachermodecomponent/coursescomponent/sidebar"
import './courses.scss'
import Link from 'next/link'
import { useState, useEffect } from "react"
import { getAllCourse } from "@/services/courseService"
import ReactPaginate from "react-paginate"

const Courses = () => {
    const [listCourse, setListCourse] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [totalPage, setTotalPage] = useState(0)

    const getAllCourses = async (page, limit) => {
        try {
            let res = await getAllCourse(page, limit)
            console.log(res)

            if (res && res.DT) {
                setListCourse(res.DT.courses)
                setTotalPage(res.DT.totalPages)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCourses(currentPage, limit)

    }, [currentPage]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <div className="course-wrapper">
            <Link href="/teacher/create">
                <button>Tạo khóa học</button>
            </Link>
            <table style={{ marginTop: '10px' }} class="table ">
                <thead >
                    <tr className="table-secondary" style={{ border: '1px solid #80808033', }}>
                        <th>Tiêu đề  <i style={{ cursor: 'pointer' }} className="fa-solid fa-sort"></i></th>
                        <th>Giá <i style={{ cursor: 'pointer' }} className="fa-solid fa-sort"></i></th>
                        <th>Trạng thái <i style={{ cursor: 'pointer' }} className="fa-solid fa-sort"></i></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCourse ? listCourse.map(item => {
                            return (
                                <tr style={{ border: '1px solid #80808033' }}>
                                    <td>{item.title}</td>
                                    <td>{item.newPrice ? item.newPrice : '0'} VNĐ</td>
                                    <td >{item.isPublished ?
                                        <div style={{ height: '25px', width: '80px', backgroundColor: '#0268A0', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                                            Công khai
                                        </div>
                                        :
                                        <div style={{ height: '25px', width: '60px', backgroundColor: '#808080', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                                            Ẩn
                                        </div>
                                    }</td>
                                    <th><a style={{ textDecoration: 'none' }} href={`/teacher/courses/${item.id}`}>...</a></th>
                                </tr>
                            )
                        }) : ''
                    }
                </tbody>
            </table>
            <div className="pagination_wrapper">

                {totalPage > 0 ? <ReactPaginate
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={4}
                    pageCount={totalPage}
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
    )
}

export default Courses