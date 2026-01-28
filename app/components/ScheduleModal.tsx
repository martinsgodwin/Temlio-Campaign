'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import './ScheduleModal.css';

interface ScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSchedule?: (date: string, time: string) => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose, onSchedule }) => {
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');

    const handleSchedule = () => {
        if (onSchedule) {
            onSchedule(scheduleDate, scheduleTime);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    <X size={20} />
                </button>
                <h3>Schedule Message</h3>
                <p>Choose the date and time for sending your message</p>
                
                <div className="modal-field">
                    <label>Date</label>
                    <input 
                        type="date" 
                        className="modal-input"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                    />
                </div>
                
                <div className="modal-field">
                    <label>Time</label>
                    <input 
                        type="time" 
                        className="modal-input"
                        value={scheduleTime}
                        onChange={(e) => setScheduleTime(e.target.value)}
                    />
                </div>
                
                <button className="save-btn" onClick={handleSchedule}>Schedule</button>
            </div>
        </div>
    );
};

export default ScheduleModal;
