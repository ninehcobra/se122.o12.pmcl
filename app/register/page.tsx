'use client'
import Link from 'next/link';
import './register.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [isSame, setIsSame] = useState(true)

    const onChangeInput = (value: any, type: any): void => {
        setIsValid(true)
        setIsSame(true)
        if (type === 'username') {
            setUserName(value)
        }
        else if (type === 'password') {
            setPassword(value)
        }
        else if (type === 'repassword') {
            setRePassword(value)
        }
    }

    const inputValidation = () => {
        let usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if (userName === '' || password === '' || usernameRegex.test(userName) === false || passwordRegex.test(password) === false) {
            setIsValid(false)
        }
        else if (password !== rePassword) {
            setIsSame(false)
        }
        else {
            router.push('/dashboard')
        }
    }

    const onLogin = () => {
        inputValidation()
    }

    return (
        <div className="login-container">
            <div className='register-form '>
                <div className='container '>
                    <div className='row' >
                        <div className='col-lg-8 ' style={{ padding: '0 20px' }}>
                            <div className='container'>
                                <div className='login-header'>
                                    <div style={{ color: "rgba(235,236,238,255)", fontSize: "20px", fontWeight: 'bold', marginBottom: '5px' }}>Chào mừng trở lại!</div>
                                    <div style={{ color: "#9ea3aa", marginBottom: '15px' }}>Rất vui mừng khi được gặp lại bạn!</div>
                                </div>
                                <Form.Label className={isValid ? 'login-label' : 'login-label error-text'} htmlFor="inputPassword5">EMAIL HOẶC SỐ ĐIỆN THOẠI

                                    {isValid ? <span style={{ marginLeft: '4px', color: 'red' }}>*</span> : <span style={{ marginLeft: '4px', color: '#ed7277', fontStyle: 'italic' }}>Tên đăng nhập hoặc mật khẩu không hợp lệ.</span>}
                                </Form.Label>
                                <Form.Control
                                    className='login-input'
                                    type="email"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    value={userName}
                                    onChange={(e) => onChangeInput(e.target.value, 'username')}
                                />
                                <Form.Label className={isValid ? 'login-label' : 'login-label error-text'} htmlFor="inputPassword5">MẬT KHẨU
                                    {isValid ? <span style={{ marginLeft: '4px', color: 'red' }}>*</span> : <span style={{ marginLeft: '4px', color: '#ed7277', fontStyle: 'italic' }}>Tên đăng nhập hoặc mật khẩu không hợp lệ.</span>}
                                </Form.Label>
                                <Form.Control
                                    className='login-input'
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    value={password}
                                    onChange={(e) => onChangeInput(e.target.value, 'password')}
                                />
                                <Form.Label className={isSame ? 'login-label' : 'login-label error-text'} htmlFor="inputPassword5">NHẬP LẠI MẬT KHẨU
                                    {isSame ? <span style={{ marginLeft: '4px', color: 'red' }}>*</span> : <span style={{ marginLeft: '4px', color: '#ed7277', fontStyle: 'italic' }}>Mật khẩu không trùng khớp.</span>}
                                </Form.Label>
                                <Form.Control
                                    className='login-input'
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    value={rePassword}
                                    onChange={(e) => onChangeInput(e.target.value, 'repassword')}
                                />

                                <Button onClick={() => onLogin()} className='login-btn'>Đăng ký</Button>
                                <div style={{ color: "#9ea3aa", fontSize: '14px' }}>Đã có tài khoản
                                    <Link className="nav-text" href={"/login"}> Đăng nhập</Link>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 d-none d-lg-block' >
                            <div className='logo-container'>
                                <Image src={'https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png'} width={200} height={200} alt={'logo app'}></Image>
                                <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Nineh</div>
                                <div style={{ fontSize: '14px', textAlign: 'center' }}>Giải pháp <span style={{ fontWeight: 'bold' }}>{`học nhóm trực tuyến `}</span>
                                    có mặt trên cả nền tảng <span style={{ fontWeight: 'bold' }} > Web</span> và <span style={{ fontWeight: 'bold' }} > Mobile</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}