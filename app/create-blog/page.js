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





const Course = () => {

    const [thumbnail, setThumbnail] = useState(null)
    const [content, setContent] = useState({ contentHTML: '', contentMarkdown: '' })
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    async function onImageUpload(file) {
        if (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
            console.log('2')
            const image = new FormData()
            image.append("file", file)
            image.append("cloud_name", "dwpz7w8y4")
            image.append("upload_preset", "bleu4scs")

            const res = await axios.post("https://api.cloudinary.com/v1_1/dwpz7w8y4/image/upload", image)

            const imgData = res.data.secure_url
            return new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = data => {

                    resolve(imgData);
                };
                reader.readAsDataURL(file);
            });
        }

    }

    return (
        <div>
            <Header searchHide={true}></Header>
            <div style={{ margin: "0px 20px 10px 20px " }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '65%' }}>
                        <input style={{ width: '100%' }} placeholder='Tiêu đề' className='blog-input'></input>
                    </div>
                    <div style={{ width: '15%' }}></div>
                    <div style={{ width: '20%', display: 'flex', alignItems: 'center' }}>
                        <button onClick={() => console.log(content)}>Xuất bản</button>
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
                        <textarea placeholder='Nhập mô tả bài blog của bạn ở đây' style={{ width: '100%' }}></textarea>
                    </div>
                    <div style={{ width: '50%' }}>

                    </div>

                </div>
                <div style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>ẢNH BÌA</div>
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
                <MdEditor onImageUpload={onImageUpload} placeholder='Nội dung viết ở đây' style={{ height: '100vh' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </div>

        </div>
    )
}

export default Course