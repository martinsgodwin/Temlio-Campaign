'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './CallSetup.css';
import '../Robocall.css';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import ScheduleModal from '../../../components/ScheduleModal';

import {
    Users, Upload, Phone, Truck, Mic, Clock, X, Check, ChevronDown
} from 'lucide-react';

// Icon Components
const UploadIcon = (props: any) => <Upload {...props} size={24} />;
const MicIcon = (props: any) => <Mic {...props} size={16} />;
const ClockIcon = (props: any) => <Clock {...props} size={16} />;
const CloseIcon = (props: any) => <X {...props} size={20} />;
const CheckIcon = (props: any) => <Check {...props} size={40} />;
const ChevronDownIcon = (props: any) => <ChevronDown {...props} size={16} />;

// Confetti Component
const Confetti = () => {
    const confettiColors = [
        '#FF6B9D', '#FEC84E', '#4ECDC4', '#9B59B6', 
        '#3498DB', '#E74C3C', '#2ECC71', '#F39C12'
    ];

    const confettiPieces = Array.from({ length: 50 }, (_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 0.5;
        const randomDuration = 2 + Math.random() * 2;
        const randomRotation = Math.random() * 360;
        const randomColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];

        return (
            <motion.div
                key={i}
                className="confetti-piece"
                style={{
                    left: `${randomX}%`,
                    backgroundColor: randomColor,
                }}
                initial={{ 
                    y: -20, 
                    x: 0, 
                    rotate: 0,
                    opacity: 1 
                }}
                animate={{
                    y: ['0vh', '100vh'],
                    x: [0, (Math.random() - 0.5) * 100],
                    rotate: [0, randomRotation * 2],
                    opacity: [1, 1, 0.8, 0]
                }}
                transition={{
                    duration: randomDuration,
                    delay: randomDelay,
                    ease: 'easeIn'
                }}
            />
        );
    });

    return <div className="confetti-container">{confettiPieces}</div>;
};

const CallSetup: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isRecording, setIsRecording] = React.useState(false);
    const [recordingTime, setRecordingTime] = React.useState(0);
    const [showInvoiceModal, setShowInvoiceModal] = React.useState(false);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = React.useState(false);
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    const toggleRecording = () => {
        if (isRecording) {
            // Stop recording
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        } else {
            // Start recording
            setIsRecording(true);
            setRecordingTime(0);
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
        }
    };

    const toggleScheduleModal = () => setIsScheduleModalOpen(!isScheduleModalOpen);

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleSendClick = () => {
        setShowInvoiceModal(true);
    };

    const handleProceed = () => {
        setShowInvoiceModal(false);
        // Small delay before showing success modal for smooth transition
        setTimeout(() => {
            setShowSuccessModal(true);
        }, 200);
    };

    const handleBack = () => {
        setShowInvoiceModal(false);
    };

    const handleViewAnalysis = () => {
        // Navigate to analytics page
        console.log('Navigating to analytics...');
        router.push('/analytics');
    };

    const handleCloseSuccess = () => {
        setShowSuccessModal(false);
    };

    React.useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-main-content" style={{ display: 'flex', width: '100%' }}>
                <Sidebar />

                <div className="main-area">
                    <Header />

                    <main className="dashboard-content">
                        <div className="campaign-setup-header">
                            <div className="section-title">
                                <h2>Campaign Details</h2>
                                <p className="section-subtitle">Connecting you to your customers easily</p>
                            </div>
                            
                            <div className="stepper-container">
                                <div className="step completed"><Users size={14} /> <span>Contact Setup</span></div>
                                <div className="step-divider"></div>
                                <div className="step active"><Phone size={14} /> <span>Call Setup</span></div>
                                <div className="step-divider"></div>
                                <div className="step"><Truck size={14} /> <span>Delivery Setup</span></div>
                            </div>
                        </div>

                        <section className="setup-form-container">
                            <div className="form-row">
                                <label>Upload Audio</label>
                                <div className="select-wrapper">
                                    <select className="select-input">
                                        <option>Select Audio</option>
                                        <option>Audio File 1.mp3</option>
                                        <option>Audio File 2.mp3</option>
                                        <option>Welcome Message.mp3</option>
                                    </select>
                                    <ChevronDownIcon className="select-arrow" />
                                </div>
                            </div>

                            <div className="form-row">
                                <label>Record Audio</label>
                                <div className="record-audio-container">
                                    <button 
                                        className={`record-btn ${isRecording ? 'recording' : ''}`}
                                        onClick={toggleRecording}
                                    >
                                        <MicIcon size={18} />
                                        {isRecording ? 'Stop' : 'Record'}
                                    </button>
                                    {isRecording ? (
                                        <div className="audio-waveform">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="waveform-bar"></div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="recording-progress"></div>
                                    )}
                                    <span className="recording-timer">{formatTime(recordingTime)}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <label>Upload Contacts</label>
                                <div className="audio-upload-box">
                                    <UploadIcon size={32} color="#999" />
                                    <p className="upload-title">Upload Audio</p>
                                    <p className="upload-specs">Supported formats: MP3.<br />You can upload up to 2mb.</p>
                                </div>
                            </div>

                            <div className="form-row double-column">
                                <div className="form-column">
                                    <label>Retry Interval</label>
                                    <div className="select-wrapper">
                                        <select className="select-input">
                                            <option>Select time</option>
                                            <option>30 seconds</option>
                                            <option>1 minute</option>
                                            <option>5 minutes</option>
                                        </select>
                                        <ChevronDownIcon className="select-arrow" />
                                    </div>
                                </div>
                                <div className="form-column">
                                    <label>Time Interval</label>
                                    <div className="select-wrapper">
                                        <select className="select-input">
                                            <option>Select time</option>
                                            <option>15 minutes</option>
                                            <option>30 minutes</option>
                                            <option>1 hour</option>
                                        </select>
                                        <ChevronDownIcon className="select-arrow" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button className="schedule-btn" onClick={toggleScheduleModal}>Schedule for Later</button>
                                <button className="send-btn" onClick={handleSendClick}>Send</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Invoice Modal */}
            <AnimatePresence>
                {showInvoiceModal && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div 
                            className="invoice-modal"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <button className="modal-close-btn" onClick={handleBack}>
                                <CloseIcon />
                            </button>
                            
                            <div className="invoice-header">
                                <div className="invoice-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 2V8H20" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 13H8" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 17H8" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 9H9H8" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h2 className="invoice-title">Your Invoice</h2>
                                <p className="invoice-subtitle">Your Bulk SMS cost is here</p>
                            </div>

                            <div className="invoice-content">
                                <div className="invoice-table">
                                    <div className="invoice-table-header">
                                        <div className="invoice-col-desc">Description</div>
                                        <div className="invoice-col-amount">Amount</div>
                                    </div>
                                    
                                    <div className="invoice-row">
                                        <div className="invoice-col-desc">Call/Min</div>
                                        <div className="invoice-col-amount">₦5.28</div>
                                    </div>
                                    
                                    <div className="invoice-row">
                                        <div className="invoice-col-desc">Recipients(12,578)</div>
                                        <div className="invoice-col-amount">₦500,000.28</div>
                                    </div>
                                    
                                    <div className="invoice-row">
                                        <div className="invoice-col-desc">Charges</div>
                                        <div className="invoice-col-amount">₦1000.00</div>
                                    </div>
                                    
                                    <div className="invoice-total">
                                        <div className="invoice-col-desc">Total</div>
                                        <div className="invoice-col-amount">₦501,000.28</div>
                                    </div>
                                </div>
                            </div>

                            <div className="invoice-actions">
                                <button className="invoice-back-btn" onClick={handleBack}>Back</button>
                                <button className="invoice-proceed-btn" onClick={handleProceed}>Proceed</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Confetti />
                        <motion.div 
                            className="success-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <button className="modal-close-btn" onClick={handleCloseSuccess}>
                                <CloseIcon />
                            </button>
                            
                            <motion.div 
                                className="success-icon-wrapper"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    delay: 0.2, 
                                    duration: 0.5, 
                                    type: 'spring', 
                                    stiffness: 200 
                                }}
                            >
                                <motion.div 
                                    className="success-icon-circle"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.2, 1] }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                    >
                                        <CheckIcon />
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            <motion.h2 
                                className="success-title"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.3 }}
                            >
                                Success
                            </motion.h2>
                            
                            <motion.p 
                                className="success-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                            >
                                Your message is already sending
                            </motion.p>
                            
                            <motion.p 
                                className="success-submessage"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.3 }}
                            >
                                you can view the status and it analysis in analytics
                            </motion.p>

                            <motion.button 
                                className="success-btn"
                                onClick={handleViewAnalysis}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Analysis
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ScheduleModal 
                isOpen={isScheduleModalOpen} 
                onClose={toggleScheduleModal}
                onSchedule={(date, time) => {
                    console.log(`Call scheduled for ${date} at ${time}`);
                }}
            />
        </div>
    );
};

export default CallSetup;