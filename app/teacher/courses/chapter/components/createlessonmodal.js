// components/CreateLessonModal.js
'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';

const CreateLessonModal = ({ isOpen, onClose, onCreateLesson }) => {
    const [lessonType, setLessonType] = useState('');
    const [lessonDetails, setLessonDetails] = useState({});
    const [isTypeSelected, setIsTypeSelected] = useState(false);

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
        },
    };

    const handleCreateLesson = () => {
        // Validate input data if needed
        // Call the function to create lesson
        onCreateLesson({
            lessonType,
            ...lessonDetails,
        });
        // Close the modal
        onClose();
    };

    const renderLessonDetailsForm = () => {
        switch (lessonType) {
            case 'video':
                return (
                    <div>
                        <label>Video URL:</label>
                        <input
                            type="text"
                            value={lessonDetails.videoUrl || ''}
                            onChange={(e) => setLessonDetails({ ...lessonDetails, videoUrl: e.target.value })}
                        />
                    </div>
                );
            case 'reading':
                return (
                    <div>
                        <label>Content:</label>
                        <textarea
                            value={lessonDetails.content || ''}
                            onChange={(e) => setLessonDetails({ ...lessonDetails, content: e.target.value })}
                        />
                    </div>
                );
            case 'quiz':
                return (
                    <div>
                        <label>Questions:</label>
                        <textarea
                            value={lessonDetails.questions || ''}
                            onChange={(e) => setLessonDetails({ ...lessonDetails, questions: e.target.value })}
                        />
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
            <h2>Create Lesson</h2>
            <div>
                <label>Lesson Type:</label>
                <select
                    value={lessonType}
                    onChange={(e) => handleTypeChange(e.target.value)}
                >
                    <option value="" disabled>Select Lesson Type</option>
                    <option value="video">Video</option>
                    <option value="reading">Reading</option>
                    <option value="quiz">Quiz</option>
                </select>
            </div>

            {isTypeSelected && (
                <div>
                    {renderLessonDetailsForm()}
                    <button type="button" onClick={handleCreateLesson}>
                        Create Lesson
                    </button>
                </div>
            )}

            <button type="button" onClick={onClose}>
                Close
            </button>
        </Modal>
    );
};

export default CreateLessonModal;
