'use client'
import { useEffect, useState, useRef } from "react"
import "./header.scss"
import Link from "next/link"
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { logout } from "@/services/userService";

const Header = (params: any) => {
    const [myCourse, setMyCourse] = useState(false)
    const [userSetting, setUserSetting] = useState(false)
    const notificationRef = useRef<HTMLDivElement>(null);
    const userSettingRef = useRef<HTMLDivElement>(null)

    const router = useRouter()



    useEffect(() => {
        const handleOutsideClick = (event: any) => {

            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target) &&
                userSettingRef.current &&
                !userSettingRef.current.contains(event.target)
            ) {
                setMyCourse(false);
                setUserSetting(false);
            }

        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [myCourse])

    const info = useSelector((state: any) => state.personalInfo)


    const handleLogOut = async () => {
        localStorage.removeItem('jwt')
        let res = await logout()

        router.push('/login')
    }


    return (
        <div className="navbar_wrapper">
            <Link href="/dashboard" style={{ textDecoration: 'none' }} className="navbar_logo">
                <Link href="/dashboard">
                    <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png" alt="nineh" />
                </Link>
                <h4 style={params && params.searchHide ? { display: 'none' } : {}} className="navbar_logo_heading">Nineh Learning</h4>
                {params && params.searchHide ? <div onClick={() => router.back()} style={{ color: '#808990', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', marginLeft: '10px' }}>{`<< QUAY LẠI`}</div> : ''}
            </Link>
            <div className="navbar_body">
                <div>
                    <div style={params && params.searchHide ? { display: 'none' } : {}} className="search" aria-expanded="false">
                        <i className="fa-solid fa-magnifying-glass search_icon" ></i>
                        <input className="search_input" placeholder="Tìm kiếm khóa học, bài viết ..." value="" />
                    </div>
                </div>
            </div>
            <div className="navbar_action">
                <div>
                    <button style={params && params.searchHide ? { display: 'none' } : {}} onClick={() => setMyCourse(!myCourse)} className="navbar_mylearn" aria-expanded="false">Khóa học của tôi</button>
                    {myCourse ?
                        <div className="popup_mycourse" >
                            <ul className="mycourse_wrapper">
                                <div className="mycourse_header">
                                    <h6 className="mycourse_heading">Khóa học của tôi</h6>
                                    <a className="mycourse_view_all" href="/my-courses">Xem tất cả</a>
                                </div>
                                <div className="mycourse_content">
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/html-css">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/html-css">HTML CSS từ Zero đến Hero</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 8 giờ trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/javascript-co-ban">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/1.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/javascript-co-ban">Lập Trình JavaScript Cơ Bản</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 6 tháng trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mycourse_item">
                                        <a href="/learning/reactjs">
                                            <img className="mycourse_thumb" src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="" />
                                        </a>
                                        <div className="mycourse_info">
                                            <h3 className="mycourse_title">
                                                <a href="/learning/reactjs">Xây Dựng Website với ReactJS</a>
                                            </h3>
                                            <p className="mycourse_last_join">Học cách đây 7 tháng trước</p>
                                            <div className="mycourse_progress_bar" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        : ''
                    }


                </div>
                <div>
                    <div className="navbar_action_btn" id="notification-button" aria-expanded="false">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell NavBar_action-icon__l9MxX" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z">
                        </path>
                        </svg>
                    </div>
                </div>
                <div onClick={() => {

                    setUserSetting(!userSetting)

                }} className="navbar_avatar_wrapper" ref={userSettingRef} aria-expanded="false">
                    <div className="fallback_avatar" >
                        <img className="navbar_avatar"
                            src={info.avatar ? info.avatar : "data:image/jpeg;base64,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"}
                            alt={info.name} />
                    </div>
                </div>

                {
                    userSetting ?
                        <div className="popup_info" >
                            <ul className="user_wrapper">
                                <div className="user_menu">
                                    <div className="avatar_wrapper">
                                        <div className="fallback_avatar">
                                            <img src={info.avatar ? info.avatar : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPDxAQFQ8PDw8QEBAQEA8NFQ0PFRIWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGS0lHyUuKy0vKysrLSsvLy0rLS0tLSsuKy0rListNy0rLSstLzUtLS8tKy4tKystLS0tLy8tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAAAQIDBQYEB//EADsQAAIBAgEIBgcHBQEAAAAAAAABAgMRIQQFEjFBUWGRExZScYHRIlOSobHB8AYUI0Ji0uEVMnKi8TP/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQQDBQYCB//EADgRAQABAgMFBgQDBwUAAAAAAAABAgMEBRESE1Kh0RYhMUFRkRQiYbEyU/AGQnGBwdLhFSNygvH/2gAMAwEAAhEDEQA/APw0AAAAUAgKBpP6tr/kDTevutvvqAjeOtd+K5gaTV/y+LfDXZfWIH1U5JpybxeMm8fS2alq16uPADiqa8N0ndq2DV8X4P3gfPN393wAzN4vvYGQAAAAA3J4R4X5gKSxu9STe35PfYDnyeS0Jp63KFu607/FASXC+76+vMCXxunr7mB9eWV30cEmrRWhbQjgpJ6WNlfFvHj3AfBKtJ2vbCOgsEvR+toDppYrDGKi8F/ammvgsQMaXwt9cgIAA3ZJcd1tltdwMgAAACAAAAABQFgAFA19d4FuBPH3AFv+QHLB2T8b4MDMtb/7f+QOLaBGBAAAAAAoADdN4PwAaX1vAqkBaj9HXtWHMDhAAAKkBdXf8N6aaAyAAAAAAAAAoAABUAfduAqAvPuAP64gTmAfiByJ+/WBOHIDhAoEAAAAACoCsCw2+AFsBm4Fbw5AYAAWwDV4gQC2AgAABWgIAAAAKAAu8AgLfuAqAjAjAfWsDaAN/wAcAONgQAAAAAAADQFiBUBgC7AMgUABAAGm/mBAAACyerHZyArdpXjvwAzJWdmBAAFAAVAAIBpAAIACWosIGEsoIRgAIAAAAAGkBUAuBkC3AyAAAAAGl8wIBdmvbqAqTx7gDSst+NwMsDdeLTxd9twOMABQAAAAAqAXAgADSYADIACgRgQAAAAVAVALAQABAAAAAArAtgAF24gVv0bW26wMtPyA5tBWV7u6W0D5wAACgAAAAB9ub83Sr6WjKCcfyybTa3rA81VbLYYHLq8ZrFuqImPKf/H2dXK3ap85eR43sNj2axXFT7z0OrlXt0+cvIb2E9msTxU8+i9XKvap85eRG+g7NYnip59B/Z2r26fOXkN9B2axPFTz6HVyr26fOXkTvYOzWJ4qefROrlXt0+cvIjfQdmsTxU8+h1dq9unzl5DfR6HZrE8VPPodXKvbp85eQ30eh2axPFTz6HVyr26fOXkN9HodmsTxU8+h1cq9unzl5DfR6HZrE8VPvPQ6uVe3T5y8hvo9EdmsTxU+89Dq5V7dPnLyG+j0OzWJ4qfeeh1cq9unzl5DfR6HZvE8VPvPQ6u1e1T5y8hvoOzeK4qfeei9Xavbp85eRO9g7N4nip59GX9naq/PT5y8hvYRV+zmJpjWaqfeejqZxs2k07PWtT7jK0NUbMzGurssmzDVqQU7wjpYpSck7cjHN2InRucNkOJv24uRMRE+uuv2cvVur26fOXkRvoZ+zWJ4qefR12X5G6MtCUouVrvRu7d90e6atqNWoxmEqwtzd1VRM/R8x6VACsCoBvAJgE9fgBWsEwKrAcYAAAAAAKBQN0K8qclODs1qImNWWzers1xXROkw9XmzO8KqUZWjU7L1S/xfyK9duYdzl2c2sTEU1zs1+nlP8HZGNukZAAAFyQuAuAAAAAAgAM1akYJym0ktrwJiNWO7et2qdu5OkPNZ2zs634VJPQb2J3qeG4sUW9nvlxeaZvXi53NiJ2ecvqzRmPRaqVtaxjDXb/LyPNdzyhdyvIpiYu4j+VPV3pgdW+TOeWqhTcvzPCC3vyPdFO1LXZljqcJZmr96fCHjKk3JuUndttt72W4jR87rrqrqmqqe+WA8AFXyArYFTW3cBL/xwAAL/wDACttAyAAAAAAABQAAD7smzvXp4Kba3S9L4nmaIlssPm2LsRpTXrHpPe7LJM5ZXVTdOFN2dnqVvByMc0UR4txhs0zPExM2qKZ0/XnU5+ny71VPmv3HnS36rPxGc/l08v7jpsu9VT937hpbN/nP5dPL+46fLvVU/d+4aW/U3+c/l08v7jp8u9XT937hpb9U7/Ofy6eXU6bLvV0/d+4aW0b/ADngp5dTpsu9XT/1/cNLad/nPBTy6nTZf6un/r+4aW/VG/zn8unl1cGVZzyulbThTWlqX9zfgpExRRPgrYjNcyw2kXaaYmfDz+0u7yRz0IupbTau1FWUeBiq017nS4Ob02oqv6bU+Ud2n0cx5WXns658lGbhRatHByte8ttjPRajTWXI5nntym7NvDzGkd2vj3/R01bKp1Heo3LhJu3JajNFMR4Odu4q7eq2rtU1fxfdm7OFTSUKNOknJ2wg2/F3ueKqY82ywGPvxXFuxbpiZ+n9ddXqo3sr4va9V2VneURVsxteJOSinJuySu29iEd6Llym3TNVU6RDxmdctdeo5flWEFuX8luinZh86zLHTi701+XhEfR8R6a8AAUCr5AEBALbGwEsBUwMgAAAAAAAAAACgc+R5TOlLSg7P3NbmiJiJjvWMNibuGr27c6S72j9pI29OnLS/TZr3mGbXo6iz+01Gz/u251+n+XJ1jo9ipyh5kbqWXtNh+Crl1XrFR7NTlHzG6lPaXDcNXLqnWOj2KnKHmNzKO0uH4KuXVOsdLsVOUPMbmUdpcPwVcup1jpdipyj5jcyntNh+Crl1OsdLsVOUfMbmTtNh+Crl1ZzZSeUVXlNReinalF8Nvh8Sap2Y2YYsusVY/ETjL0fLH4Y/Xp93dmF1Dq8/Zw6KGhF/iTXsx3mS3Tq0Od5j8Pb3dE/NVyh5MsuFAPVZgzf0UOkkvTmvZju8Svcr17odvkWXbijfXI+arw+kO2MToXnvtHnC/4EHgv72tr2RM9qjzlyGf5jtT8Nbnujx6PPmZywAAAVAUBYCAV2AqtiBkCAAAAAAAAAAACgVAAPQ5sz3GyhXsmrJTtdPv3d5grtz5Ory3O7WzFvEx/20+7tlldH1lL2oGPZqb+MXgp79uj3g+9UfWUvagNKj4rBcdHvC/e6PrKXtw8yNKk/F4Pjo94PvVH1lL24E6SfF4Of36PeHVZdP71VVCnbo4vSqTjZp+P1izJTGzGstDjK4zHExhrGmxHfVMfr9S7qnTUUoxVoxVktyMMzrLp7Vqm1RFFEaRDGVZRGlBzlqXvexImImZY8ViqMNam5X5ff0eKyvKJVJynLXJ8lsRbiNI0fNsTiK79yblfjLhJYHbZgzf0sukkvQg/alu7jHcq0jRvMky74m7vK4+WnnPo9UVnePhzxl/QU7r++V1BbuPge6KdqWpzfMIwlnu/FPh1eObu23reLe9lp8+mZmdZQIAAAAgKBANJgR7ALfECKIGQAAAAAAAAAC2AtgKAAAc2RumprpYtweDs2nHjxInXTuWMLVZi5G/jWn6fd6SlmbJppSirxe1TbK83Ko8XY2sly+7TFdvWY/wCUt/0LJ+y/akN5Uy9n8Fwz7y67O+QUKUVGEZOrN2gtJu3Gx7oqqnxafNcBg8NTFFumZrq8I1dtmrIVQppfnljN8d3cjFXVtS3+VYCMJZ0n8U989P5PsPLZvJ59zh0s9GL/AA4PD9UtrLNunSHA5zmM4q7sUz8lPh9Z9XWGRpXNkWTSqzUI63rfZW1kTOkarGFw1eIuxbo8Z5fV7XJqEacVCOqK572VJnWdX0jC4ejD2ot0eENVqihFzk7RirtkRGsvd69TZtzcrnuh4rOGVyrTc3q1RXZjsRbpp2Y0fN8djK8Vem5V/KPSHznpUAACwDRAaIGrAGuAEtwAaL3AV77AVLgBxAAAAAAAAAAFuATAtwKAAAclGvOGMJSj/i2rkTET4stq/dtTrbqmP4To5v6nX9bPmRsU+iz/AKpjPzavd3OYsllN/earblqp3xw1aX1xMVyYj5YdDkmErvVfF35mZ/d1+7vDC6l032hzj0ceig/TmvSa/LHzZltUazrLnM+zLdUbi3PzT4/SP8vLlhxSgeuzJm/oYXl/6Ts5fpWyJWuVazo73Jcu+Gtbdf4quUejsjG3bzH2izhpy6KD9GL9Jr80v4LFqjTvlxOfZjvq9xbn5Y8frP8Ah0tzK51bgLgLgLgGwCYFuBQEViBdIBpAVysBwgAAAAAAAAAAABQFwLcABQIB7HMddTowtrglCS3NFW5GkvoOS4ii7hKaY8ae6XNl+Vxowc5d0V2pbEeaadqdFrH42jCWZuVePlHrLxVes5ylOTvKTuy3EaRo+cXrtV2ublc98uMljboz0ZRl2ZJ232Yl7t1bFcVekw95RqqcVOLvGSumU5jSX1CxeovW4uUT3S6/PecOhhaL/EndL9K2s926dZanOsx+GtbFE/NVyj1eQLLggAAAAAAGogQDSYC+rxAn8AV394CzYGAAAAAAAAAAAAAAUAAAoADnyPK50ZaUHjtT1SW5kTETCzhcVcw1zbtz3/dy50zjKvJNq0YqyindX2s80UbKxmOY142uKqo0iPL+r4T21wAA+/NudJ0HZYweuD+K3M8VURU2WX5pdwdXy99PnE/rufPlmUyqzlOWtvktiPURpGirisRXiLtVyvxlwEq4AAAAAADUQFvmBrd3AS3ABFfACWAqXADAAAAAAAAAAAAAUABANJAUABAIBAAAAAAAAAAAAAAVSsBpSA1fyAjvjwYEbYBS1gNNgYAAAAAAAAAAAACgUBYCgAAACMCMCAAAAAAAAAAAAAAAAKpe8DWnq4AWFm2BIQuBgAAAAAAAAAAAUAgN6ICwEsAAAAAEYEAgFAgAAAAAAAAAAAAAAAC3AgAAAAAAKkAYBIAAsByRjtf/AEB3gAFgFgFgIAsBLALAZsAsAAgAAAAAAAACgAAEAoEAAALYAwIAA1FXdr24vYAS36r2vYB3at+8AkBuMdr23WDxvb4Aad277WAlrd9d8e8CALAWwEsAsBLAADQEaAlu7VzAiAklYCAAAFsBAAFsBXs8QIwKASAgBgLALgAIAAoG4xSfpJ6tSwd7YfIBstx1fH5AXRW52wu+OOrwAuisb3/Txx2+AFeOO27e4DcXZprY09jxQBu929bd8MFxAzbd5gGgFgAEsA0QFgAEsASWN76na2GPHgBkBa64ruV1t8QM2AgEAqYCwEAqA5Erpd7AiWrjcDL94F7wI44X4gGuAH//2Q=="} alt="avatar" />
                                        </div>
                                    </div>
                                    <div className="user_info">
                                        <span>{info.name}</span>
                                        <div className="user_email">{info.email}</div>
                                    </div>
                                </div>
                                <hr />
                                <ul className="user_list">
                                    <li>
                                        <Link className="user_item" href={`/myaccount`}>Trang cá nhân</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="user_list">
                                    <li>
                                        <Link className="user_item" href={`/create-blog`}>Viết blog</Link>
                                    </li>
                                </ul>
                                <ul className="user_list">
                                    <li>
                                        <a className="user_item" href={`/dashboard/user/${info.name}`}>Bài viết của tôi</a>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="user_list">
                                    <li>
                                        <div onClick={handleLogOut} className="user_item" >Đăng xuất</div>
                                    </li>
                                </ul>
                            </ul>
                        </div> :
                        ''
                }

            </div>
        </div>
    )
}

export default Header