'use client'
import './login.scss'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Header from '../components/homecomponent/header';
import Footer from '../components/homecomponent/footer';
import Link from 'next/link';
import { login } from "../../services/userService"

import { useDispatch, useSelector } from 'react-redux'
import { loginRedux } from '@/redux/actions/updateAction';
import { toast } from 'react-toastify';
import { getUserAccount } from '../../services/userService';

export default function Login() {


    const dispatch = useDispatch()
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const [isValid, setIsValid] = useState(true)

    const fetchUser = async () => {
        let res = await getUserAccount()
        if (res && res.EC === 0 && res.DT) {
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        // Nếu đã đăng nhập thì tới thẳng dashboard

        fetchUser()


        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail && savedPassword) {
            // Nếu có thông tin trong localStorage, điền vào các trường đăng nhập
            setEmail(savedEmail);
            setPassword(savedPassword);
            setIsChecked(true)
        }
    }, []);


    const onChangeInput = (value, type) => {
        setIsValid(true)
        if (type === 'email') {
            setEmail(value)
        }
        else if (type === 'password') {
            setPassword(value)
        }
    }

    const inputValidation = () => {
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if (email === '' || password === '' || emailRegex.test(email) === false || passwordRegex.test(password) === false) {
            setIsValid(false)
            return false
        }
        setIsValid(true)
        return true
    }

    const onLogin = async () => {

        if (inputValidation()) {
            let res = await login(email, password)
            if (res) {
                console.log(res)

                if (res.EC === 0) {
                    let data = {
                        isAuthenticated: true,
                        token: res.DT.access_token,
                        account: {
                            name: res.DT.name,
                            address: res.DT.address,
                            avatar: res.DT.avatar,
                            email: res.DT.email,
                            gender: res.DT.gender,
                            roles: res.DT.roles
                        }
                    }
                    dispatch(loginRedux(data))
                    localStorage.setItem("jwt", res.DT.access_token)
                    toast('Đăng nhập thành công')

                    router.push('/dashboard')
                    saveLoginInfo()
                }
                else if (res.EC === 3) {
                    toast.error('Sai mật khẩu!')
                }
                else if (res.EC === 1) {
                    toast.error('Tài khoản không tồn tài!')
                }
                else if (res.EC === 2) {
                    toast.error('Vui lòng nhập đủ thông tin đăng nhập.')
                }
                else if (res.EC === -2) {
                    toast.error('Lỗi phát sinh từ server')
                }
                else if (res.EC === -5) {
                    toast.error('Không kết nối được với server')
                }
            }


        }

    }

    const saveLoginInfo = () => {
        if (isChecked) {
            // Nếu người dùng chọn "Lưu nhớ mật khẩu", lưu thông tin vào localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            // Nếu không chọn, xóa thông tin khỏi localStorage
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
    }



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
                                <h2>Đăng nhập</h2>
                                <p>Chào mừng bạn đến với ứng dụng dạy học của chúng tôi! <br />Hãy nhập thông tin đăng nhập của bạn để bắt đầu hành trình học tập mới của bạn. </p>
                            </div>
                            <div className="sl-form">
                                <div className="form-group">
                                    <label>Email
                                        {!isValid ? <span style={{ color: 'red' }}> - Email hoặc mật khẩu không chính xác</span> : ''}
                                    </label>
                                    <input value={email} onChange={(e) => onChangeInput(e.target.value, 'email')} type="email" placeholder="example@gmail.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu
                                        {!isValid ? <span style={{ color: 'red' }}> - Email hoặc mật khẩu không chính xác</span> : ''}
                                    </label>
                                    <input value={password} onChange={(e) => onChangeInput(e.target.value, 'password')} type="password" placeholder="Password" required />
                                </div>
                                <div className="form-check">
                                    <input checked={isChecked} onChange={() => setIsChecked(!isChecked)} type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Ghi nhớ mật khẩu</label>
                                </div>
                                <button onClick={onLogin} className="btn btn-filled btn-round"><span className="bh"></span> <span>Login</span></button>
                                <p className="notice">Chưa có tài khoản <Link href="/register">Đăng ký Ngay</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}