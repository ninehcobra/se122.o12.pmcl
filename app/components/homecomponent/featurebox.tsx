"use client"
import "./featurebox.scss"


const FeatureBox = () => {
    return (
        <section className="feature-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="f-box">
                            <i className="fas fa-drafting-compass"></i>
                            <strong>Hơn 100,000 khóa học online</strong>
                            <span>Khám phá nhiều chủ đề mới</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-center">
                        <div className="f-box">
                            <i className="far fa-user-circle"></i>
                            <strong>Hướng dẫn của chuyên gia</strong>
                            <span>Tìm người hướng dẫn phù hợp với bạn</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-center">
                        <div className="f-box">
                            <i className="fas fa-history"></i>
                            <strong>Quyền truy cập trọn đời</strong>
                            <span>Tìm hiểu dựa vào lịch trình của bạn</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureBox