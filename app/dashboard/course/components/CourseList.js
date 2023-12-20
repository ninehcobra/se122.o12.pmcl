import CourseCard from "./CourseCard"

const CourseList = (params) => {
    let courses = params.courses
    return (
        <div style={{ marginTop: '12px' }} class="container-fluid">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                {courses ? courses.map((course) => {
                    return (
                        <CourseCard course={course} />
                    )
                }) : ''}
            </div>
        </div>
    )
}

export default CourseList