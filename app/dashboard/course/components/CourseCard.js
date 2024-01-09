import { FiBookOpen } from "react-icons/fi";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";

const CourseCard = (params) => {
    const course = params.course
    return (
        <Link href={`/course/${course.id}`} style={{ textDecoration: 'none' }} class="col">
            <div class="card course-card" style={{ marginBottom: '8px' }}>
                <div style={{ padding: '8px' }}>
                    <img style={{ borderRadius: '5px', height: '250px', width: '100%', objectFit: 'cover' }} src={course.thumbnail} class="card-img-top" alt="Course Image" />
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
                        <div style={{ marginTop: '8px' }}>
                            <ProgressBar
                                bgColor={'#0183C5'}
                                height="10px"
                                isLabelVisible={false}
                                completed={course.progress} />
                            <div style={{ margin: ' 8px 0', fontWeight: 'bold', color: '#0183C5' }}>Hoàn thành {Math.round(course.progress)} %</div>
                        </div>
                        :
                        <p style={{ marginTop: '8px', fontWeight: 'bold' }}>{course.newPrice.toLocaleString('vi-VN')} VNĐ</p>
                    }
                </div>

            </div>
        </Link>
    )
}

export default CourseCard