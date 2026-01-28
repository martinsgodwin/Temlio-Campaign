'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

import {
    Users, MoreVertical, Upload, FileText, MoreHorizontal,
} from 'lucide-react';

import '../CampaignDetails.css';
import './EditCampaign-Details.css';

// Icon Components
const MenuIcon = (props: any) => <MoreVertical {...props} size={18} />;
const UploadIcon = (props: any) => <Upload {...props} size={16} />;
const FileIcon = (props: any) => <FileText {...props} size={16} />;
const MoreHorizontalIcon = (props: any) => <MoreHorizontal {...props} size={16} />;

const EditCampaign: React.FC = () => {
    const pathname = usePathname();
    const [message, setMessage] = useState('Merry christmas to you all\nthank uou for patronising me this year\nwe love you');
    const maxLength = 160;

    return (
        <div className="dashboard-container">
            <div style={{ display: 'flex', width: '100%' }}>
                <Sidebar />

                {/* Main Area */}
                <div className="main-area">
                    <Header />

                    {/* Main Content */}
                    <main className="dashboard-content">
                        <div className="campaign-details-container">
                            <div className="campaign-header">
                                <h1 className="campaign-title">Campaign Details</h1>
                                <p className="campaign-subtitle">Connecting you to your customers easily</p>
                            </div>

                            <div className="campaign-form">
                                {/* Select Sender ID */}
                                <div className="form-section">
                                    <label className="form-label">Select sender ID</label>
                                    <div className="sender-id-row">
                                        <div className="select-wrapper">
                                            <select className="sender-select">
                                                <option>Olubumi Alaso</option>
                                            </select>
                                        </div>
                                        <button className="change-id-btn">
                                            <Upload size={14} />
                                            Change ID
                                        </button>
                                    </div>
                                </div>

                                {/* Recipients */}
                                <div className="form-section">
                                    <div className="section-header">
                                        <label className="form-label">Recipients</label>
                                        <button className="create-group-btn">
                                            <Users size={14} />
                                            Create group
                                        </button>
                                    </div>
                                    <textarea 
                                        className="recipients-textarea"
                                        placeholder='Enter recipients contacts and separate with coma "," 091123456780, 081123456780, etc'
                                    />
                                </div>

                                {/* Upload Contacts */}
                                <div className="form-section">
                                    <label className="form-label">Upload Contacts</label>
                                    <div className="upload-file-row">
                                        <div className="file-info">
                                            <FileText size={16} className="file-icon" />
                                            <div className="file-details">
                                                <span className="file-name">user-contact-01.svg</span>
                                                <span className="file-time">2m ago</span>
                                            </div>
                                        </div>
                                        <div className="file-actions">
                                            <button className="delete-file-btn">
                                                <span className="delete-icon">×</span>
                                            </button>
                                            <span className="file-size">604KB</span>
                                            <button className="file-menu-btn">
                                                <MoreHorizontalIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <button className="upload-new-btn">Upload New</button>
                                </div>

                                {/* Compose Content */}
                                <div className="form-section">
                                    <label className="form-label">Compose content</label>
                                    <textarea 
                                        className="compose-textarea"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <div className="character-count">
                                        {maxLength - message.length} characters remaining
                                    </div>
                                </div>

                                {/* Update Button */}
                                <button className="update-btn">Update</button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EditCampaign;