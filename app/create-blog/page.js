'use client'
import { useEffect, useCallback, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/dashboardcomponent/header'
import MarkdownIt from 'markdown-it';
import "./create-blog.scss"
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Cloudinary } from "@cloudinary/url-gen";
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import { AuthCheck } from '../components/homecomponent/authcheck';
import { Button } from 'react-bootstrap';
import { toast } from "react-toastify"
import { createBlog } from '@/services/blogService';






const Course = () => {

    const [thumbnail, setThumbnail] = useState(null)
    const [content, setContent] = useState({ contentHTML: '', contentMarkdown: '' })
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isCreate, setIsCreate] = useState(false)


    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Xử lý tệp tin đã chọn ở đây
            setThumbnail(selectedFile);
        }
    };

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'demo'
        }
    });

    // Initialize a markdown parser
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    // Finish!
    function handleEditorChange({ html, text }) {
        setContent({
            contentHTML: html,
            contentMarkdown: text
        })
    }
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setThumbnail(acceptedFiles[0])
        }


    }, [])

    const handleOnChange = (text, type) => {
        if (type === 'title') {
            setTitle(text)
        }
        if (type === 'description') {
            setDescription(text)
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    async function addImgToBlog(file) {

        const imgData = await uploadImg(file)
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = data => {

                resolve(imgData);
            };
            reader.readAsDataURL(file);
        });


    }

    const uploadImg = async (file) => {
        if (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
            const image = new FormData()
            image.append("file", file)
            image.append("cloud_name", "dwpz7w8y4")
            image.append("upload_preset", "bleu4scs")

            const res = await axios.post("https://api.cloudinary.com/v1_1/dwpz7w8y4/image/upload", image)

            const imgData = res.data.secure_url
            return imgData
        }
    }

    const handleCreateBlog = async () => {
        setIsCreate(true)
        if (title && description && content.contentHTML && content.contentMarkdown) {
            let imgThumb = null
            if (thumbnail) {
                let res = await uploadImg(thumbnail)
                imgThumb = res
            }
            let data = {
                title: title,
                description: description,
                thumbnail: imgThumb ? imgThumb : '',
                content: content
            }
            let res = await createBlog(data)
            if (res.EC === 0) {
                toast("Đăng blog thành công")
                setIsCreate(false)
                setThumbnail(null)
                setTitle('')
                setDescription('')
                setContent(
                    { contentHTML: '', contentMarkdown: '' }
                )
            }
            else if (res.EC === -1) {
                toast.error("Lỗi phát sinh từ server.")
            }
            else if (res.EC === -2) {
                toast.error("Lỗi phát sinh từ client.")
            }
            else {
                toast.error("Lỗi không xác định.")
            }
        }
        else {
            toast.error('Vui lòng nhập đầy đủ thông tin')
            setIsCreate(false)
        }
    }

    return (
        <div>
            <AuthCheck>
                <Header searchHide={true}></Header>
                <div style={{ margin: "0px 20px 10px 20px " }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '65%' }}>
                            <input value={title} onChange={(e) => handleOnChange(e.target.value, 'title')} style={{ width: '100%' }} placeholder='Tiêu đề' className='blog-input'></input>
                        </div>
                        <div style={{ width: '15%' }}></div>
                        <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: "flex-end" }}>

                            <button disabled={isCreate} onClick={handleCreateBlog} className={isCreate ? 'iscreate-btn' : 'create-btn'}  >{isCreate ? "Đang xuất bản..." : 'Xuất bản'}</button>
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>MÔ TẢ</div>
                        </div>
                        <div style={{ width: '50%', marginLeft: '50px' }}>
                            <div style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>LĨNH VỰC</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%' }}>
                            <textarea value={description} onChange={(e) => handleOnChange(e.target.value, 'description')} placeholder='Nhập mô tả bài blog của bạn ở đây' style={{ width: '100%' }}></textarea>
                        </div>
                        <div style={{ width: '50%' }}>

                        </div>

                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>ẢNH BÌA</div>
                        {thumbnail ? <div onClick={() => { setThumbnail(null) }} style={{ height: '20px', color: 'red', fontWeight: 'bold', marginLeft: '15px', fontSize: '20px' }}>X</div> : ''}
                    </div>


                    <div>
                        {thumbnail
                            ?
                            <div>

                                <img onClick={handleImageClick} src={URL.createObjectURL(thumbnail)} style={{ height: '200px' }}></img>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            :
                            <div className='drag_wrapper' {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Kéo và thả ảnh tại đây...</p> :
                                        <p>Bạn có thể nhấn vào để chọn file ảnh hoặc kéo thả vào đây.</p>
                                }
                            </div>
                        }
                    </div>
                    <div style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>NỘI DUNG</div>
                    <MdEditor value={content.contentMarkdown} onImageUpload={addImgToBlog} placeholder='Nội dung viết ở đây' style={{ height: '100vh' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
                </div>
            </AuthCheck>

        </div>
    )
}

export default Course