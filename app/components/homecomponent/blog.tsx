'use client'
import "./blog.scss"

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-9 m-auto text-center">
                        <div className="sec-heading">
                            <span className="tagline">Tin tức</span>
                            <h3 className="sec-title">Mọi cập nhật từ <br />trang blog của chúng tôi</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="post-item">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/post/1.jpg" alt="" />
                            <div className="post-content">
                                <div className="meta-tags">
                                    <a href="#" className="post-meta category">creative
                                    </a> | <a href="#" className="post-meta date">07 July, 2019</a>
                                </div>
                                <h3 className="post-title"><a href="#">Own may face grass dot
                                    subdue brought</a></h3>
                                <div className="meta-tags">
                                    <a href="#" className="post-meta category">
                                        <i className="fa-solid fa-box"></i>
                                        Women Fashion</a><a href="#" className="post-meta commentCount">
                                        <i className="fa-regular fa-comments"></i>
                                        2 Comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="post-item">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/post/2.jpg" alt="" />
                            <div className="post-content">
                                <div className="meta-tags">
                                    <a href="#" className="post-meta category">technology
                                    </a> | <a href="#" className="post-meta date">07 June, 2019</a>
                                </div>
                                <h3 className="post-title"><a href="#">Dolores quis commodi ratione fugit optio</a></h3>
                                <div className="meta-tags">
                                    <a href="#" className="post-meta category"><i className="fa-solid fa-box"></i>creative</a><a href="#" className="post-meta commentCount"><i className="fa-regular fa-comments"></i>2 Comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="post-item">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/post/3.jpg" alt="" />
                            <div className="post-content">
                                <div className="meta-tags">
                                    <a href="#" className="post-meta category">Marketing
                                    </a> | <a href="#" className="post-meta date">13 Feb, 2019</a>
                                </div>
                                <h3 className="post-title"><a href="#">Repellat delectus maiores accusantium</a></h3>
                                <div className="meta-tags">
                                    <a href="#" className="post-meta category"><i className="fa-solid fa-box"></i>Women Fashion</a>
                                    <a href="#" className="post-meta commentCount"><i className="fa-regular fa-comments"></i>2 Comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog