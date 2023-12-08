'use client'
import Header from "../components/dashboardcomponent/header"
import { AuthCheck } from "../components/homecomponent/authcheck"
import "./user.scss"
import { useSelector } from "react-redux"


const User = () => {
    const info = useSelector((state) => state.personalInfo)
    console.log(info)
    return (

        <div>
            <AuthCheck>
                <Header searchHide={true} />
                <div className="container">
                    <div className="profile-banner">
                        <div className="profile-user">
                            <div className="profile-avatar">
                                <div className="fallback-avatar">
                                    <img src={info.avatar} />
                                </div>
                            </div>
                            <div className="profile-user-name">
                                <span>{info.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-container">
                        <section className="left-content-container">
                            <div className="left-content">
                                <div className="box-wrapper">
                                    <h4>Giới thiệu</h4>
                                    <div>
                                        <div className="profile-participation">
                                            <div className="profile-participation-icon">

                                            </div>
                                            <span>Thành viên</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </AuthCheck>
        </div>
    )
}

export default User