// components/CreateLessonModal.js
'use client'
import React, { useState, useCallback, useRef } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from "react-toastify"
import axios from 'axios';
import { set } from 'lodash';
import * as XLSX from 'xlsx';

const CreateLessonModal = ({ isOpen, onClose, onCreateLesson }) => {
    const [lessonType, setLessonType] = useState('');
    const [lessonDetails, setLessonDetails] = useState({});
    const [isTypeSelected, setIsTypeSelected] = useState(false);
    const [duration, setDuration] = useState(0)
    const [title, setTitle] = useState('');

    const router = useRouter()

    // video
    const [video, setVideo] = useState()

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setVideo(acceptedFiles[0])
        }


    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const uploadVideo = async (file) => {
        if (file && (file.type.includes("video"))) {
            const videoData = new FormData()
            videoData.append("file", file)
            videoData.append("cloud_name", "dwpz7w8y4")
            videoData.append("upload_preset", "bleu4scs")

            const res = await axios.post("https://api.cloudinary.com/v1_1/dwpz7w8y4/video/upload", videoData)

            const videoURL = res.data.secure_url
            return videoURL
        }
    }



    // end video

    // reading
    const [content, setContent] = useState()
    // end reading

    // quizz
    const [questions, setQuestions] = useState([
        { content: '', options: [{ content: '', isCorrect: false }] }
    ]);

    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            { content: '', options: [{ content: '', isCorrect: false }] }
        ]);
    };

    const handleRemoveQuestion = (index) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions.splice(index, 1);
            return updatedQuestions;
        });
    };

    const handleAddOption = (questionIndex) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            const currentQuestion = updatedQuestions[questionIndex];

            if (currentQuestion.options.length < 4) {
                currentQuestion.options.push({ content: '', isCorrect: false });
            } else {
                alert('Mỗi câu hỏi chỉ có thể có tối đa 4 đáp án.');
            }

            return updatedQuestions;
        });
    };

    const handleRemoveOption = (questionIndex, optionIndex) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            const currentQuestion = updatedQuestions[questionIndex];

            if (currentQuestion.options.length > 1) {
                currentQuestion.options.splice(optionIndex, 1);
            } else {
                alert('Mỗi câu hỏi phải có ít nhất 1 đáp án.');
            }

            return updatedQuestions;
        });
    };

    const handleToggleCorrectOption = (questionIndex, optionIndex) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            const currentQuestion = updatedQuestions[questionIndex];
            const currentOption = currentQuestion.options[optionIndex];

            // Chuyển đổi trạng thái isCorrect
            currentOption.isCorrect = !currentOption.isCorrect;

            // Kiểm tra và đảm bảo chỉ một đáp án đúng
            currentQuestion.options.forEach((option, index) => {
                if (index !== optionIndex) {
                    option.isCorrect = false;
                }
            });

            return updatedQuestions;
        });
    };

    const handleContentChange = (questionIndex, content) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].content = content;
            return updatedQuestions;
        });
    };

    const handleOptionChange = (questionIndex, optionIndex, content) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].options[optionIndex].content = content;
            return updatedQuestions;
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                // Chuyển đổi dữ liệu từ file Excel thành định dạng câu hỏi
                console.log(rows)
                const newQuestions = rows.map((row) => ({
                    content: row[0] || '',
                    options: [
                        { content: row[1] || '', isCorrect: row[2] === true },
                        { content: row[3] || '', isCorrect: row[4] === true },
                        { content: row[5] || '', isCorrect: row[6] === true },
                        { content: row[7] || '', isCorrect: row[8] === true },
                    ],
                }));

                setQuestions(newQuestions);
            };

            reader.readAsArrayBuffer(file);
        }
    };

    const validateQuestions = (questions) => {
        for (const question of questions) {
            // Kiểm tra ít nhất có 3 đáp án
            if (question.options.length < 3) {
                return false;
            }

            let correctOptionCount = 0;

            // Kiểm tra có ít nhất một đáp án đúng
            for (const option of question.options) {
                if (option.isCorrect) {
                    correctOptionCount += 1;
                }
            }

            if (correctOptionCount !== 1) {
                return false;
            }
        }

        return true;
    };
    // end quizz

    const handleTypeChange = (type) => {
        setLessonType(type);
        setLessonDetails({});
        setIsTypeSelected(true);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minHeight: '400px',
            minWidth: '800px',
        },
    };

    const handleCreateLesson = async () => {
        // Validate input data if needed
        // Call the function to create lesson

        if (lessonType && lessonType === 'video') {
            if (video && duration && duration > 0 && title) {
                let videoUrl = await uploadVideo(video)
                onCreateLesson({
                    lessonType,
                    videoUrl,
                    title,
                    duration,
                    ...lessonDetails,
                });
                setContent('')
                setVideo(null)
                setTitle('')
                setDuration(0)
                setQuestions([
                    { content: '', options: [{ content: '', isCorrect: false }] }
                ])
                // Close the modal
                onClose();

            }
            else {
                toast.error('Vui lòng nhập đầy đủ thông tin');
            }
        }
        else if (lessonType && lessonType === 'reading') {
            if (content && duration && duration > 0 && title) {
                onCreateLesson({
                    lessonType,
                    title,
                    duration,
                    content,
                    ...lessonDetails,
                });
                setContent('')
                setVideo(null)
                setTitle('')
                setDuration(0)
                setQuestions([
                    { content: '', options: [{ content: '', isCorrect: false }] }
                ])
                // Close the modal
                onClose();
            }
            else {
                toast.error('Vui lòng nhập đầy đủ thông tin');
            }
        }
        else if (lessonType && lessonType === 'quiz') {
            if (questions.length > 0 && validateQuestions(questions)) {
                onCreateLesson({
                    lessonType,
                    title,
                    duration,
                    content,
                    questions,
                    ...lessonDetails,
                });
                setContent('')
                setVideo(null)
                setTitle('')
                setDuration(0)
                setQuestions([
                    { content: '', options: [{ content: '', isCorrect: false }] }
                ])
                // Close the modal
                onClose();
            }
            else {
                toast.error('Vui lòng nhập đầy đủ thông tin. Mỗi câu hỏi có ít nhất 3 đáp án và ít nhất một đáp án đúng');
            }
        }

    };

    const renderLessonDetailsForm = () => {
        switch (lessonType) {
            case 'video':
                return (
                    <div style={{ maxWidth: '750px' }}>
                        <label>Video:</label>
                        {video
                            ?
                            <video style={{ width: '100%' }} controls>
                                <source src={URL.createObjectURL(video)} type="video/mp4"></source>
                            </video>
                            :
                            <div className='drag_wrapper' {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <div style={{ height: '250px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#C0C5CD', borderRadius: '15px' }} >
                                            <p style={{ fontStyle: 'italic' }}>Kéo và thả video tại đây...</p>
                                        </div> :
                                        <div style={{ height: '250px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#C0C5CD', borderRadius: '15px' }}>
                                            <p style={{ fontWeight: 'bold' }}>Bạn có thể nhấn vào để chọn video hoặc kéo thả vào đây.</p>
                                        </div>
                                }
                            </div>
                        }
                    </div>
                );
            case 'reading':
                return (
                    <div style={{ maxWidth: '750px' }}>
                        <label>Nội dung:</label>
                        <ReactQuill style={{ marginBottom: '12px', backgroundColor: 'white', maxHeight: '450px', overflow: 'auto' }} theme="snow" value={content} onChange={setContent} />
                    </div>
                );
            case 'quiz':
                return (
                    <div style={{ width: '100%', maxHeight: '450px', overflow: 'auto' }}>
                        <h1 style={{ color: 'black' }}>Tạo câu hỏi</h1>
                        <div>
                            <label style={{ color: 'black', marginRight: '12px' }}>Thêm bằng file excel:</label>
                            <label style={{ background: '#80808033', padding: '4px', borderRadius: '5px' }} htmlFor="fileInput">Tải lên file Excel</label>
                            <input
                                type="file"
                                id="fileInput"
                                accept=".xlsx"
                                onChange={handleFileChange}
                                style={{ display: 'none' }} // Ẩn input
                            />
                        </div>
                        {questions.map((question, questionIndex) => (
                            <div style={{ marginBottom: '8px' }} key={questionIndex}>
                                <h3>Câu hỏi {questionIndex + 1}</h3>
                                <div style={{ marginBottom: '4px' }}>
                                    <label>
                                        Nội dung câu hỏi:
                                        <input
                                            type="text"
                                            value={question.content}
                                            onChange={(e) => handleContentChange(questionIndex, e.target.value)}
                                        />
                                    </label>
                                    <button style={{ marginLeft: '12px', backgroundColor: '#ff4122', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleRemoveQuestion(questionIndex)}>
                                        Xóa câu hỏi
                                    </button>
                                </div>
                                <ul>
                                    {question.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            <label>
                                                {`Đáp án: `}
                                                <input
                                                    type="text"
                                                    value={option.content}
                                                    onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                                />
                                            </label>
                                            <label style={{ color: 'black', marginLeft: '12px' }}>
                                                {`Đúng ? `}
                                                <input
                                                    type="checkbox"
                                                    checked={option.isCorrect}
                                                    onChange={() => handleToggleCorrectOption(questionIndex, optionIndex)}
                                                />
                                            </label>
                                            <button style={{ marginLeft: '12px', backgroundColor: '#ff6242', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleRemoveOption(questionIndex, optionIndex)}>
                                                Xóa đáp án
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <button style={{ backgroundColor: '#3DED97', color: 'white', border: 'none', borderRadius: '5px', marginTop: '12px' }} onClick={() => handleAddOption(questionIndex)}>
                                    Thêm đáp án
                                </button>
                            </div>
                        ))}
                        <button style={{ backgroundColor: '#028A0F', color: 'white', border: 'none', borderRadius: '5px', marginTop: '12px' }} onClick={handleAddQuestion}>Thêm câu hỏi</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Create Lesson Modal"
            style={customStyles}
        >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '10%' }}></div>
                <h2 style={{ textAlign: 'center', width: '80%', color: 'black' }}>Tạo bài học</h2>
                <button style={{ width: '10%', color: 'black', backgroundColor: 'white', borderRadius: '5px', borderColor: '#80808033' }} type="button" onClick={onClose}>
                    Đóng
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ width: '120px' }}>Tên bài học:</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%' }} placeholder="Tên bài học hoặc bài kiểm tra." />
            </div>
            <div>
                <label style={{ width: '103px', marginBottom: '12px' }}>Thể loại:</label>
                <select
                    value={lessonType}
                    onChange={(e) => handleTypeChange(e.target.value)}
                >
                    <option value="" disabled>Chọn thể loại</option>
                    <option value="video">Video</option>
                    <option value="reading">Bài đọc</option>
                    <option value="quiz">Câu hỏi</option>
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ width: '120px' }}>Thời lượng:</label>
                <input min={0} onChange={(e) => {
                    const value = Math.max(0, parseInt(e.target.value, 10)); // Chỉ cho phép giữ giá trị không âm
                    setDuration(isNaN(value) ? '' : value); // Nếu không phải số, đặt giá trị là ''
                }}
                    value={duration} type='number' style={{ width: '100%' }} placeholder="Thời lượng tối thiểu hoàn thành bài học, tính theo phút." />
            </div>

            {isTypeSelected && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {renderLessonDetailsForm()}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ width: '90%' }}></div>
                        <button style={{ marginTop: '12px', backgroundColor: 'black', color: 'white', borderRadius: '5px', minWidth: '80px' }} type="button" onClick={handleCreateLesson}>
                            Tạo
                        </button>
                    </div>

                </div>
            )}


        </Modal>
    );
};

export default CreateLessonModal;
