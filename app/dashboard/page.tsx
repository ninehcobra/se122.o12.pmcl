'use client'
import "./dashboard.css"
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

export default function Dashboard() {

    let serverArr = ['https://tse4.mm.bing.net/th?id=OIP.Xdm-wgywZXyJu5UMJXb4MAHaHa&pid=Api&P=0&h=220',
        "https://tse4.mm.bing.net/th?id=OIP.timMXEQ83x3ODJpykhf7GgHaHa&pid=Api&P=0&h=220",
        "https://avatarfiles.alphacoders.com/280/thumb-1920-280362.png",
        "https://i.pinimg.com/originals/86/ee/53/86ee533f82b4996c7276e53b4c8fc48e.jpg",
        "https://i.pinimg.com/originals/33/6f/0e/336f0ef169ab7d5e2585acc0c30693c5.jpg",
        "https://tse1.mm.bing.net/th?id=OIP.FKl4yr0UUff4RrxHKX9URgHaHa&pid=Api&P=0&w=400&h=400",
        "https://tse1.mm.bing.net/th?id=OIP.FKl4yr0UUff4RrxHKX9URgHaHa&pid=Api&P=0&w=400&h=400",
        'https://tse4.mm.bing.net/th?id=OIP.Xdm-wgywZXyJu5UMJXb4MAHaHa&pid=Api&P=0&h=220',
        "https://tse4.mm.bing.net/th?id=OIP.timMXEQ83x3ODJpykhf7GgHaHa&pid=Api&P=0&h=220",
        "https://avatarfiles.alphacoders.com/280/thumb-1920-280362.png",
        "https://i.pinimg.com/originals/86/ee/53/86ee533f82b4996c7276e53b4c8fc48e.jpg",
        "https://i.pinimg.com/originals/33/6f/0e/336f0ef169ab7d5e2585acc0c30693c5.jpg",
        "https://tse1.mm.bing.net/th?id=OIP.FKl4yr0UUff4RrxHKX9URgHaHa&pid=Api&P=0&w=400&h=400",
        "https://tse1.mm.bing.net/th?id=OIP.FKl4yr0UUff4RrxHKX9URgHaHa&pid=Api&P=0&w=400&h=400",
        'https://tse4.mm.bing.net/th?id=OIP.Xdm-wgywZXyJu5UMJXb4MAHaHa&pid=Api&P=0&h=220',
        "https://tse4.mm.bing.net/th?id=OIP.timMXEQ83x3ODJpykhf7GgHaHa&pid=Api&P=0&h=220",
        "https://avatarfiles.alphacoders.com/280/thumb-1920-280362.png",
        "https://i.pinimg.com/originals/86/ee/53/86ee533f82b4996c7276e53b4c8fc48e.jpg",
        "https://i.pinimg.com/originals/33/6f/0e/336f0ef169ab7d5e2585acc0c30693c5.jpg",
        "https://tse1.mm.bing.net/th?id=OIP.FKl4yr0UUff4RrxHKX9URgHaHa&pid=Api&P=0&w=400&h=400",
        "https://tse1.mm.bing.net/th?id=OIP.FKl4yr0UUff4RrxHKX9URgHaHa&pid=Api&P=0&w=400&h=400",

    ]

    const [mic, setMic] = useState(true)
    const [headphone, setHeadphone] = useState(true)

    return (
        <div className="dashboard-container">
            <div className="list-server-section">

                <ul style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#5865F2' }} className="server-item">
                        <Image src={'https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png'} height={50} width={50} alt="server-avatar"></Image>
                    </div>
                    <div style={{ borderTop: '1px solid #b1b2b5', height: '1px', width: '32px', marginTop: '8px' }}></div>
                    {serverArr.map((e, index) => {
                        return (
                            <li onClick={() => alert(index)} key={index} className="server-item">
                                <Image src={e} height={50} width={50} alt="server-avatar"></Image>
                            </li>
                        )
                    })}

                </ul>
            </div>

            <div className="list-channel-section ">
                <div className="dashboard-header justify-content-center align-items-center d-flex">
                    <input placeholder="Tìm hoặc bắt đầu cuộc trò chuyện" className="search-input" />
                </div>
                <div className="list-channel">

                </div>
                <div className="personal-info-container d-flex align-items-center">
                    <div className="personal-info d-flex align-items-center">
                        <Image src={'https://avatarfiles.alphacoders.com/280/thumb-1920-280362.png'} height={32} width={32} alt="user avatar" className="avatar"></Image>
                        <div className="user-name">
                            <div className="name">Công Chính</div>
                            <div className="email">20520884@gm.uit.edu.vn</div>
                        </div>
                    </div>
                    <div className="setting-button-container d-flex">
                        <div onClick={() => setMic(!mic)} className="setting-button d-flex align-items-center justify-content-center">
                            <Image src={mic ? '/images/mic-on.svg' : '/images/mic-off.svg'} height={25} width={25} alt="user avatar" className="avatar" ></Image>
                        </div>
                        <div onClick={() => setHeadphone(!headphone)} className="setting-button d-flex align-items-center justify-content-center">
                            <Image src={headphone ? '/images/headphone-on.svg' : '/images/headphone-off.svg'} height={25} width={25} alt="user avatar" className="avatar" ></Image>
                        </div>
                        <div className="setting-button d-flex align-items-center justify-content-center">
                            <Image src={'/images/setting.svg'} height={25} width={25} alt="user avatar" className="avatar" ></Image>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="detail-section">

            </div>
        </div>
    )
}