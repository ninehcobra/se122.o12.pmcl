'use client'

import { useEffect, useState, useRef } from "react"
import { getChapterDetail } from "@/services/courseService"
import { PayPalButton } from "react-paypal-button-v2"
import { toast } from 'react-toastify'
import { purchase } from "@/services/courseService"
import { useRouter } from "next/navigation"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { markComplete } from "@/services/courseService"
import { set } from "lodash"
import QuizPage from "./quiz"



const ChapterDetail = ({ chapter, isPurchase, course, setIsDone }) => {
    const videoRef = useRef(null);
    const [percentageWatched, setPercentageWatched] = useState(0);

    const router = useRouter()

    const [isPay, setIsPay] = useState(false)

    const convertCurrency = (amount) => {
        const fixedRate = 0.000043;
        const amountUSD = amount * fixedRate;
        const roundedAmountUSD = amountUSD.toFixed(1);
        return roundedAmountUSD;
    };

    const purchaseCourse = async () => {
        let res = await purchase(course.id)
        if (res && res.EC === 0) {
            setIsDone(true)
            return (true)
        }
        return (false)
    }


    useEffect(() => {
        const updateWatchedPercentage = () => {
            const videoElement = videoRef.current;

            if (videoElement) {
                const currentTime = videoElement.currentTime;
                const duration = videoElement.duration;

                const percentage = (currentTime / duration) * 100;
                setPercentageWatched(percentage);
            }
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('timeupdate', updateWatchedPercentage);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', updateWatchedPercentage);
            }
        };
    }, [])

    const handleMarkCompleted = async () => {
        let res = await markComplete(chapter.id)
        chapter.isCompleted = true
        router.refresh()
        setIsDone(true)

    }

    if (chapter === null) {
        return null
    }
    else {
        console.log(percentageWatched)
        return (
            <div>
                {chapter.lessonType === 'quiz'
                    ?
                    <QuizPage quiz={chapter.QuizzesLesson.QuizQuestions} />
                    :
                    <div style={{ padding: '20px' }}>
                        {chapter.lessonType === 'video' ? <video ref={videoRef} style={{ width: '100%' }} controls>
                            <source
                                src={chapter.VideoLesson.videoUrl}// Thay đổi link video của bạn
                                type="video/mp4"
                            />
                        </video> :
                            ''
                        }
                        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '24px', color: 'black', fontWeight: 'bold' }}>{chapter.title}</div>
                            {isPurchase ?
                                (
                                    !chapter.isCompleted && chapter.lessonType && chapter.lessonType !== 'reading' ?
                                        <div onClick={handleMarkCompleted} style={{ height: '25px', backgroundColor: '#027551', display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '5px' }}>
                                            <div style={{ color: 'white', marginRight: '8px', fontWeight: 'bold' }}>Đánh dấu hoàn thành</div>
                                            <IoMdCheckmarkCircleOutline style={{ color: 'white', fontSize: '24px' }} />
                                        </div>
                                        : ''

                                )
                                :
                                isPay ?
                                    <div>
                                        <PayPalButton
                                            amount={convertCurrency(course.newPrice)}
                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                            onSuccess={(details, data) => {
                                                if (purchaseCourse()) { toast("Thanh toán thành công bởi " + details.payer.name.given_name); }
                                                else toast.error('Thanh toán không thành công')


                                            }}
                                            onError={() => {
                                                toast.error('Thanh toán không thành công')
                                            }}
                                            onCancel={() => {
                                                toast.error('Thanh toán không thành công')
                                            }}
                                            options={{
                                                clientId: "ATB021v7PNCgCGfG5cYkEJVwGS-SnAWjHCLg8tZnkqk0yMIQWKLSphyh72YpWezyCy3dHXpXG3ZsQejb"
                                            }}
                                        />
                                        <div>
                                            <button onClick={() => setIsPay(false)} style={{ width: '100%', border: 'none', fontWeight: 'bold' }}>HỦY</button>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div onClick={() => setIsPay(true)} style={{
                                            height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#262B3A', color: 'white', padding: '0 10px',
                                            borderRadius: '5px', fontWeight: 'bold'
                                        }}>MUA KHÓA HỌC VỚI {course.newPrice} VNĐ</div>

                                    </div>
                            }
                        </div>
                        <div style={{ borderBottom: '1px solid #80808033', marginTop: '12px' }} />
                        <div style={{ color: 'black', fontSize: '14px', marginTop: '8px' }}>
                            <div className="container" dangerouslySetInnerHTML={{ __html: chapter.description }}></div>
                        </div>
                        <div style={{ borderBottom: '1px solid #80808033', marginTop: '4px' }} />
                        {
                            chapter.lessonType === 'reading' ?
                                <>
                                    <div style={{ color: 'black' }} className="container" dangerouslySetInnerHTML={{ __html: chapter.ReadingLesson.content }}></div>
                                    {!chapter.isCompleted ? <div onClick={handleMarkCompleted} style={{ height: '25px', backgroundColor: '#027551', display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '5px', width: '250px' }}>
                                        <div style={{ color: 'white', marginRight: '8px', fontWeight: 'bold' }}>Đánh dấu hoàn thành</div>
                                        <IoMdCheckmarkCircleOutline style={{ color: 'white', fontSize: '24px' }} />
                                    </div> : ''
                                    }
                                </>

                                : ''
                        }
                    </div>
                }

            </div>

        )
    }


}

export default ChapterDetail