'use client'
import { useEffect } from 'react'
import "./blog.scss"

const Blog = () => {
    useEffect(() => {

    }, []);

    return (
        <section className='main_content'>
            <div className="layout_container">
                <div className="layout_container_top">
                    <h1 className="layout_heading">Bài viết nổi bật</h1>
                    <div className="layout_desc" >
                        <p>Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.</p>
                    </div>
                </div>

                <div className="container_body">
                    <section className="section_content">
                        <section className="section_left">
                            <div className="blog_layout">
                                <div >
                                    <div className="post_item_wrapper">
                                        <div className="post_item_header">
                                            <div className="post_item_author">
                                                <a href="#">
                                                    <div className="fallback_avatar">
                                                        <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png" alt="" />
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <span>Chính</span>
                                                </a>
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
                                                <a href="">
                                                    <h2 className="post_item_title">Authentication & Authorization trong ReactJS</h2>
                                                </a>
                                                <p className="post_item_desc">
                                                    Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...
                                                </p>
                                                <div className="post_item_info">
                                                    <a href="" className="post_item_tag">ReactJS</a>
                                                    <span>22 ngày trước</span>

                                                </div>
                                            </div>
                                            <div className="post_item_thumb">
                                                <a href="/blog/authentication-authorization-trong-reactjs.html">
                                                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png" alt="Authentication &amp; Authorization trong ReactJS" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post_item_wrapper">
                                        <div className="post_item_header">
                                            <div className="post_item_author">
                                                <a href="#">
                                                    <div className="fallback_avatar">
                                                        <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png" alt="" />
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <span>Chính</span>
                                                </a>
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
                                                <a href="">
                                                    <h2 className="post_item_title">Authentication & Authorization trong ReactJS</h2>
                                                </a>
                                                <p className="post_item_desc">
                                                    Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...
                                                </p>
                                                <div className="post_item_info">
                                                    <a href="" className="post_item_tag">ReactJS</a>
                                                    <span>22 ngày trước</span>

                                                </div>
                                            </div>
                                            <div className="post_item_thumb">
                                                <a href="/blog/authentication-authorization-trong-reactjs.html">
                                                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png" alt="Authentication &amp; Authorization trong ReactJS" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post_item_wrapper">
                                        <div className="post_item_header">
                                            <div className="post_item_author">
                                                <a href="#">
                                                    <div className="fallback_avatar">
                                                        <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png" alt="" />
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <span>Chính</span>
                                                </a>
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
                                                <a href="">
                                                    <h2 className="post_item_title">Authentication & Authorization trong ReactJS</h2>
                                                </a>
                                                <p className="post_item_desc">
                                                    Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...
                                                </p>
                                                <div className="post_item_info">
                                                    <a href="" className="post_item_tag">ReactJS</a>
                                                    <span>22 ngày trước</span>

                                                </div>
                                            </div>
                                            <div className="post_item_thumb">
                                                <a href="/blog/authentication-authorization-trong-reactjs.html">
                                                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png" alt="Authentication &amp; Authorization trong ReactJS" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post_item_wrapper">
                                        <div className="post_item_header">
                                            <div className="post_item_author">
                                                <a href="#">
                                                    <div className="fallback_avatar">
                                                        <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png" alt="" />
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <span>Chính</span>
                                                </a>
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
                                                <a href="">
                                                    <h2 className="post_item_title">Authentication & Authorization trong ReactJS</h2>
                                                </a>
                                                <p className="post_item_desc">
                                                    Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...
                                                </p>
                                                <div className="post_item_info">
                                                    <a href="" className="post_item_tag">ReactJS</a>
                                                    <span>22 ngày trước</span>

                                                </div>
                                            </div>
                                            <div className="post_item_thumb">
                                                <a href="/blog/authentication-authorization-trong-reactjs.html">
                                                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png" alt="Authentication &amp; Authorization trong ReactJS" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pagination_wrapper">
                                        <div className="pagination_pages">
                                            <div className="pagination_page">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-left" className="svg-inline--fa fa-angles-left Pagination_icon__rsM4G" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="pagination_page">1</div>
                                            <div className="pagination_page">2</div>
                                            <div className="pagination_page">3</div>
                                            <div className="pagination_page">4</div>
                                            <div className="pagination_page">5</div>
                                            <div className="pagination_page">6</div>
                                            <div className="pagination_page">7</div>
                                            <div className="pagination_page">8</div>
                                            <div className="pagination_page">9</div>
                                            <div className="pagination_page">10</div>
                                            <div className="pagination_page">11</div>
                                            <div className="pagination_page">12</div>
                                            <div className="pagination_page">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" className="svg-inline--fa fa-angles-right Pagination_icon__rsM4G" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section_right">
                            <div className="topiclist_wrapper">
                                <h3>Các chủ đề được đề xuất</h3>
                                <ul className="topiclist">
                                    <li>
                                        <a href="/blog/topic/front-end-mobile-apps">Front-end / Mobile apps</a>
                                    </li>
                                    <li>
                                        <a href="/blog/topic/back-end-devops">Back-end / Devops</a>
                                    </li>
                                    <li>
                                        <a href="/blog/topic/ui-ux-design">UI / UX / Design</a>
                                    </li>
                                    <li>
                                        <a href="/blog/topic/others">Others</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="banner_wrapper">
                                <div className="banner_content">
                                    <a href="https://fullstack.edu.vn/landing/htmlcss" target="_blank" rel="noreferrer">
                                        <img src="https://files.fullstack.edu.vn/f8-prod/banners/25/63dc61d4caec2.png" alt="HTML CSS Pro Banner" title="HTML CSS Pro Banner" />
                                    </a>
                                    <a href="https://www.youtube.com/c/F8VNOfficial" target="_blank" rel="noreferrer">
                                        <img src="https://files.fullstack.edu.vn/f8-prod/banners/32/6421144f7b504.png" alt="F8 Youtube Banner" title="F8 Youtube Banner" />
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