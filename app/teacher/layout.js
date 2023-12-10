'use client'
import { redirect } from "next/navigation";
import Header from "../components/dashboardcomponent/header";
import Sidebar from "../components/teachermodecomponent/coursescomponent/sidebar";
import { AuthCheck } from "../components/homecomponent/authcheck";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const TeacherLayout = ({
    children
}) => {
    // const { userId } = auth();

    // if (!isTeacher(userId)) {
    //     return redirect("/");
    // }

    const info = useSelector((state) => state.personalInfo)

    return (
        <Fragment>
            <AuthCheck>
                <Header teacherMode={true} searchHide={true} />
                <div>
                    <Sidebar >
                        {

                            React.cloneElement(children, {
                                info: info
                            })

                        }
                    </Sidebar>

                </div>
            </AuthCheck>
        </Fragment>
    )
}

export default TeacherLayout;