'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './Robocall.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ScheduleModal from '../../components/ScheduleModal';

import {
    Users, Plus, Upload, Phone, Settings2, Truck, ChevronDown
} from 'lucide-react';

// Icon Components
const PlusIcon = (props: any) => <Plus {...props} size={16} />;
const UploadIcon = (props: any) => <Upload {...props} size={24} />;

const Robocall: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const handleNextStep = () => {
        router.push('/campaign/robocall/call-setup');
    };

    const toggleScheduleModal = () => setIsScheduleModalOpen(!isScheduleModalOpen);    return (
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
                                <div className="step active">
                                    <Users size={14} />
                                    <span>Contact Setup</span>
                                </div>
                                <div className="step-divider"></div>
                                <div className="step">
                                    <Phone size={14} />
                                    <span>Call Setup</span>
                                </div>
                                <div className="step-divider"></div>
                                <div className="step">
                                    <Truck size={14} />
                                    <span>Delivery Setup</span>
                                </div>
                            </div>
                        </div>

                        <section className="robocall-form-container">
                            <div className="form-row">
                                <label>Select Caller ID</label>
                                <div className="input-group">
                                    <div className="select-wrapper">
                                        <select className="form-select-robocall">
                                            <option>Select Caller ID</option>
                                        </select>
                                        <ChevronDown className="select-arrow" size={18} />
                                    </div>
                                    <button className="create-id-btn">
                                        <Settings2 size={16} />
                                        Create ID
                                    </button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label>Recipients</label>
                                <div className="recipients-box">
                                    <input 
                                        type="text" 
                                        className="transparent-input" 
                                        placeholder="Enter recipients contacts" 
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <label>Upload Contacts</label>
                                <div className="upload-dropzone">
                                    <UploadIcon />
                                    <p className="upload-title">Upload contacts</p>
                                    <p className="upload-specs">
                                        Supported formats: JPG, PNG, JPEG, MP4. You can upload up to five documents.
                                    </p>
                                </div>
                            </div>

                            <div className="form-actions-robocall">
                                <button className="btn-secondary-outline" onClick={toggleScheduleModal}>Schedule for Later</button>
                                <button className="btn-primary-filled" onClick={handleNextStep}>Send</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

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

export default Robocall;