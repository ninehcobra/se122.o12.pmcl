'use client'
import Link from 'next/link';
import '../login/login.scss'
import Header from '../components/homecomponent/header';
import Footer from '../components/homecomponent/footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { registerNewUser } from "../../services/userService"
import { toast, ToastContainer } from 'react-toastify';
import { getUserAccount } from '../../services/userService';


export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isChecked, setIsChecked] = useState(false);

    const [inputFailure, setInputFailure] = useState(0)

    const fetchUser = async () => {
        let res: any = await getUserAccount()
        if (res && res.EC === 0 && res.DT) {
            router.push('/dashboard')
        }
    }
    const onChangeInput = (value: any, type: any): void => {

        if (type === 'email') {
            setEmail(value)
        }
        else if (type === 'password') {
            setPassword(value)
        }
        else if (type === 'name') {
            setName(value)
        }
    }

    const inputValidation = () => {
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let nameRegex = /^[\p{L}']+([\s][\p{L}']+)*$/u;


        if (email && password && name) {

            if (!nameRegex.test(name)) {
                setInputFailure(1)

                return false
            }
            if (!emailRegex.test(email)) {
                setInputFailure(2)
                return false
            }
            if (!passwordRegex.test(password)) {
                setInputFailure(3)
                return false
            }
            setInputFailure(0)
            return true

        }
        else {
            setInputFailure(4)
            return false
        }
    }



    const handleRegister = async () => {
        if (inputValidation()) {
            if (isChecked) {
                let res: any = await registerNewUser(email, name, password)
                if (res.EC === 1) {
                    toast.error('Email này đã được đăng ký❗️')
                }
                else if (res.EC === 2) {
                    toast.error('Lỗi EC2 phía server❗️')
                }
                else if (res.EC === -2) {
                    toast.error('Lỗi EC-2 không xác định phía server❗️')
                }
                else if (res.EC === 0) {
                    toast('Đăng ký thành công🥳🥳🥳')
                }
                else if (res.EC === -5) {
                    toast.error('Không kết nối được với server')
                }
            }
            else {
                setInputFailure(5)
            }
        }

    }

    useEffect(() => {
        fetchUser()
    })

    return (
        <div>
            <Header></Header>

            <section className="banner login-registration">
                <div className="vector-img">
                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/DoAn2/login.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-box">
                                <h2>Đăng ký</h2>
                                <p>Đăng ký để bắt đầu học ngay hôm nay! 📚</p>
                            </div>
                            <div className="sl-form">
                                <div className="form-group">
                                    <label>Họ và tên
                                        {inputFailure === 4 && name === '' ? <span style={{ color: 'red' }}>  - Vui lòng nhập đầy đủ họ và tên</span> : inputFailure === 1 ? <span style={{ color: 'red' }}> -  Họ và tên không được bao gồm số</span> : <div></div>}
                                    </label>
                                    <input onChange={(e) => onChangeInput(e.target.value, 'name')} value={name} type="text" placeholder="Nguyễn Văn A" required />
                                </div>
                                <div className="form-group">
                                    <label>Email
                                        {inputFailure === 4 && email === '' ? <span style={{ color: 'red' }}>  - Vui lòng nhập email</span> : inputFailure === 2 ? <span style={{ color: 'red' }}> - Vui lòng nhập email chính xác</span> : <div></div>}
                                    </label>

                                    <input onChange={(e) => onChangeInput(e.target.value, 'email')} value={email} type="email" placeholder="example@gmail.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu
                                        {inputFailure === 4 && password === '' ? <span style={{ color: 'red' }}>  - Vui lòng nhập mật khẩu</span> : inputFailure === 3 ? <span style={{ color: 'red' }}> -  Mật khẩu phải chứa ít nhất 8 ký tự và có ít nhất một chữ số, chữ cái thường và in hoa  </span> : <div></div>}
                                    </label>
                                    <input onChange={(e) => onChangeInput(e.target.value, 'password')} value={password} type="password" placeholder="Password" required />
                                </div>

                                <div className="form-check">
                                    <input onChange={() => setIsChecked(!isChecked)} checked={isChecked} type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Đồng ý với các điều khoản{inputFailure === 5 ? <span style={{ color: 'red' }}> - Vui lòng đọc và đồng ý các điều khoản của chúng tôi</span> : ''}</label>
                                </div>
                                <button onClick={handleRegister} className="btn btn-filled btn-round"><span className="bh"></span> <span>Đăng ký</span></button>
                                <p className="notice">Đã có tài khoản <Link href="/login">Đăng nhập Ngay</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}