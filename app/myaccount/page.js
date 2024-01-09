'use client'
import Header from "../components/dashboardcomponent/header"
import { AuthCheck } from "../components/homecomponent/authcheck"
import "./user.scss"
import { useSelector } from "react-redux"


const User = () => {
    const info = useSelector((state) => state.personalInfo)

    return (

        <div>
            <AuthCheck>
                <Header searchHide={true} />
                <div style={{ marginBottom: '48px !important', height: '400px' }}>
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
                                    <i style={{ marginLeft: '8px', cursor: 'pointer' }} className="fa-solid fa-pencil"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </AuthCheck>
        </div>
    )
}

export default User