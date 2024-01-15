'use client'
import { GoPlay } from "react-icons/go";
import { TbLock } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { getChapterDetail } from "@/services/courseService";

import { Frame } from "lucide-react";
const Chapter = (params) => {
    let changeActiveId = params.changeActiveId
    let getLesson = params.chooseLesson
    let lessonId = params.lessonId

    const [lesson, setLesson] = useState([])
    const [isFetch, setIsFetch] = useState(true)

    const handleClick = () => {
        if (!params.isLocked) {
            changeActiveId(params.id);
            setIsFetch(!isFetch)
        }

    };

    const fetchChapterDetail = async () => {
        let res = await getChapterDetail(params.id)
        if (res && res.EC === 0) {
            setLesson(res.DT.Lessons)
        }
    }

    useEffect(() => {
        fetchChapterDetail()
    }, [isFetch])

    const chooseLesson = (lesson) => {
        getLesson(lesson)
    }

    return (
        <div>
            <div onClick={handleClick} className={params.isLocked ? " locked" : params.active ? "chapter-item active" : 'chapter-item'}>
                {params.isLocked
                    ?
                    <TbLock style={{ fontSize: '32px', marginRight: '8px' }} />
                    :
                    <Frame style={{ fontSize: '32px', marginRight: '8px' }} />
                }


                <div style={params.isCompleted ? { color: '#027551' } : {}}>{params.title}</div>

            </div>
            {params.active
                ?
                <div>
                    {lesson.length > 0
                        ?
                        lesson.map((lesson) => {
                            return (
                                <div>
                                    <div onClick={() => chooseLesson(lesson)} style={{ paddingLeft: '48px' }} className={lessonId === lesson.id ? "active chapter-item" : "chapter-item"}>
                                        <div style={{ marginRight: '12px' }}>
                                            {lesson.isCompleted ?
                                                <IoMdCheckmarkCircleOutline style={{ fontSize: '32px', marginRight: '8px', color: '#027551' }} />
                                                :
                                                lesson.lessonType === "video"
                                                    ?
                                                    <i style={{ fontSize: '16px' }} className="fa-solid fa-circle-play"></i>
                                                    :
                                                    lesson.lessonType === "reading"
                                                        ?
                                                        <i style={{ fontSize: '16px' }} className="fa-solid fa-book-open"></i>
                                                        :
                                                        <i class="fa-regular fa-circle-question"></i>
                                            }
                                        </div>
                                        {lesson.title}
                                    </div>
                                </div>
                            )
                        })
                        :
                        ''}
                </div>

                :
                ''
            }

        </div>

    )
}

export default Chapter