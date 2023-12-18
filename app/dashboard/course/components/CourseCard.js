import { FiBookOpen } from "react-icons/fi";
import Link from "next/link";

const CourseCard = (params) => {
    const course = params.course
    return (
        <Link href={`/course/${course.id}`} style={{ textDecoration: 'none' }} class="col">
            <div class="card course-card">
                <div style={{ padding: '8px' }}>
                    <img style={{ borderRadius: '5px' }} src={course.thumbnail} class="card-img-top" alt="Course Image" />
                </div>



                <div style={{ padding: '8px', lineHeight: '18px', height: '124px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{course.title}</div>
                    <div style={{ fontSize: '13px', color: '#808080' }}>{course.Category.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                        <div style={{ height: '25px', width: '25px', backgroundColor: '#F1F9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                            <FiBookOpen style={{ color: '#01669F' }} />
                        </div>
                        <div style={{ marginLeft: '4px', color: '#808080', fontSize: '14px' }}>{course.Chapters.length} Chương</div>
                    </div>
                    {course.progress !== null ?
                        <div>Progess</div>
                        :
                        <p style={{ marginTop: '8px' }}>{course.newPrice} VNĐ</p>
                    }
                </div>

            </div>
        </Link>
    )
}

export default CourseCard