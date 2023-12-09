import { redirect } from "next/navigation";
import Header from "../components/dashboardcomponent/header";
import Sidebar from "../components/teachermodecomponent/coursescomponent/sidebar";
import { AuthCheck } from "../components/homecomponent/authcheck";

const TeacherLayout = ({
    children
}) => {
    // const { userId } = auth();

    // if (!isTeacher(userId)) {
    //     return redirect("/");
    // }

    return (
        <div>
            <AuthCheck>
                <Header teacherMode={true} searchHide={true} />
                <div>
                    <Sidebar cac="cac">
                        {children}
                    </Sidebar>

                </div>
            </AuthCheck>
        </div>
    )
}

export default TeacherLayout;