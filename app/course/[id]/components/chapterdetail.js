'use client'

import { useEffect, useState } from "react"
import { getChapterDetail } from "@/services/courseService"

const ChapterDetail = ({ chapter, isPurchase, course }) => {



    if (chapter === null) {
        return null
    }
    else {
        return (
            <div style={{ padding: '20px' }}>
                {chapter.videoUrl ? <video style={{ width: '100%' }} src={chapter.videoUrl} controls></video> : ''}
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', color: 'black', fontWeight: 'bold' }}>{chapter.title}</div>
                    {isPurchase ? '' :
                        <div style={{
                            height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#262B3A', color: 'white', padding: '0 10px',
                            borderRadius: '5px', fontWeight: 'bold'
                        }}>MUA KHÓA HỌC VỚI {course.newPrice} VNĐ</div>
                    }
                </div>
                <div style={{ borderBottom: '1px solid #80808033', marginTop: '12px' }} />
                <div style={{ color: 'black', fontSize: '14px', marginTop: '8px' }}>
                    <div className="container" dangerouslySetInnerHTML={{ __html: chapter.description }}></div>
                </div>
                <div style={{ borderBottom: '1px solid #80808033', marginTop: '4px' }} />
            </div>
        )
    }


}

export default ChapterDetail