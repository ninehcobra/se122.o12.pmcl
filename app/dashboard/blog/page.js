'use client'
import "./blog.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from "../../../services/blogService"
import ReactPaginate from 'react-paginate';
import Link from 'next/link'
import { useEffect, useState } from "react";

const Blog = () => {

    const [listBlog, setListBlog] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [totalPage, setTotalPage] = useState(0)
    const [search, setSearch] = useState("")

    const getAllBlog = async (page, limit) => {
        try {
            let res = await getBlog(page, limit, search)

            if (res && res.DT) {
                setListBlog(res.DT.blogs)
                setTotalPage(res.DT.totalPages)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const calTime = (time) => {
        var thoiDiem = new Date(time);

        // Lấy thời điểm hiện tại
        var thoiDiemHienTai = new Date();

        // Tính số mili giây giữa hai thời điểm
        var soMiligiay = thoiDiemHienTai - thoiDiem;

        // Chuyển đổi mili giây thành số giây
        var soGiay = Math.floor(soMiligiay / 1000);

        if (soGiay >= 60) {
            // Chuyển đổi số giây thành số phút
            var soPhut = Math.floor(soGiay / 60);

            if (soPhut >= 60) {
                // Chuyển đổi số phút thành số giờ
                var soGio = Math.floor(soPhut / 60);

                if (soGio >= 24) {
                    // Chuyển đổi số giờ thành số ngày
                    var soNgay = Math.floor(soGio / 24);
                    return soNgay + ' ngày trước';
                } else {
                    return soGio + ' giờ trước';
                }
            } else {
                return soPhut + ' phút trước';
            }
        } else {
            return soGiay + ' giây trước';
        }
    }

    useEffect(() => {
        getAllBlog(currentPage, limit)

    }, [currentPage, search]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <section className='main_content'>
            <div className="layout_container">
                <div className="layout_container_top">
                    <h1 className="layout_heading">Bài viết nổi bật</h1>
                    <div className="layout_desc" >
                        <p>Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học cùng các lĩnh vực khác.</p>
                    </div>
                </div>
                <div style={{ marginBottom: '12px' }} >
                    <div className="search" aria-expanded="false" >
                        <i style={{ marginRight: '12px' }} className="fa-solid fa-magnifying-glass search_icon" ></i>
                        <input style={{ outline: 'none', borderRadius: '20px', borderColor: '#80808033', padding: '4px' }} onChange={(e) => setSearch(e.target.value)} className="search_input" placeholder="Tìm kiếm blog..." value={search} />
                    </div>
                </div>
                <div className="container_body">
                    <section className="section_content">
                        <section className="section_left">
                            <div className="blog_layout">
                                <div >
                                    {
                                        listBlog
                                            ?
                                            listBlog.map(item => {
                                                return (
                                                    <div className="post_item_wrapper">
                                                        <div className="post_item_header">
                                                            <div className="post_item_author">
                                                                <Link href={`/user/${item.User.id}`}>
                                                                    <div className="fallback_avatar">
                                                                        <img src={item.User.avatar} alt="" />
                                                                    </div>
                                                                </Link>
                                                                <Link href={`/user/${item.User.id}`}>
                                                                    <span>{item.User.name}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="post_item_action">
                                                                <div className="bookmark_toggle">
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" className="svg-inline--fa fa-bookmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"></path></svg>
                                                                </div>
                                                                <div className="option_btn">
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" className="svg-inline--fa fa-ellipsis " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"></path></svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="post_item_body">
                                                            <div className="post_item_info">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    <h2 className="post_item_title">{item.title}</h2>
                                                                </Link>
                                                                <p className="post_item_desc">
                                                                    {item.description}
                                                                </p>

                                                            </div>
                                                            <div className="post_item_thumb">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    <img src={item.thumbnail} alt={item.title} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            ''
                                    }



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
                            </div>
                        </section>

                        <section className="section_right">
                            <div className="topiclist_wrapper">
                                <h3>Các chủ đề được đề xuất</h3>
                                <ul className="topiclist">
                                    <li>
                                        <a href="/dashboard/blog">Công nghệ</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/blog">Thể thao</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/blog">Âm nhạc và nghệ thuật</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/blog">Khác</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="banner_wrapper">
                                <div className="banner_content">
                                    <a href="https://www.facebook.com/profile.php?id=100089771191514" target="_blank" rel="noreferrer">
                                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/facebook.png" alt="HTML CSS Pro Banner" title="HTML CSS Pro Banner" />
                                    </a>
                                    <a href="https://discord.gg/MzD3zQ8GJa" target="_blank" rel="noreferrer">
                                        <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/discord.png" alt="F8 Youtube Banner" title="F8 Youtube Banner" />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Blog