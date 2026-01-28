'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import '../CampaignDetailsVoice.css';
import './EditCampaignVoice.css';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

import {
    Phone, MoreVertical, CheckCircle, Mic, ChevronDown, Users, Package, Repeat
} from 'lucide-react';

// Icon Components
const MenuIcon = (props: any) => <MoreVertical {...props} size={18} />

const EditCampaignVoice: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="dashboard-container">
            <div style={{ display: 'flex', width: '100%' }}>
                <Sidebar />

                {/* Main Area */}
                <div className="main-area">
                    <Header />

                    {/* Main Content */}
                    <main className="dashboard-content">
                        <div className="edit-campaign-layout">
                            {/* Breadcrumb Header Row */}
                            <div className="campaign-header-row">
                                <div className="title-section">
                                    <h1>Campaign Details</h1>
                                    <p className="campaign-subtitle">Connecting you to your customers easily</p>
                                </div>
                                <div className="setup-tabs">
                                    <div className="setup-tab active">
                                        <Users size={14} /> <span>Contact Setup</span>
                                    </div>
                                    <span className="tab-arrow">›</span>
                                    <div className="setup-tab">
                                        <Phone size={14} /> <span>Call Setup</span>
                                    </div>
                                    <span className="tab-arrow">›</span>
                                    <div className="setup-tab">
                                        <Package size={14} /> <span>Delivery Setup</span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-container">
                                <div className="form-group">
                                    <label>Select Caller ID</label>
                                    <div className="select-wrapper">
                                        <select className="form-select">
                                            <option>Ajo Onibata</option>
                                        </select>
                                        <ChevronDown size={20} className="select-icon" />
                                    </div>
                                </div>

                                <div className="form-group">
    <label>Record Audio</label>
    <div className="record-row">
        <button className="record-btn">
            <Mic size={16} />
            Record
        </button>
        <div className="audio-timeline">
            <div className="timeline-dots"></div>
            <span className="audio-duration">00:00:00</span>
        </div>
    </div>
</div>

                                <div className="form-group">
    <label>Upload Contacts</label>
    <div className="upload-section">
        <div className="uploaded-file">
            <div className="file-info-left">
                <div className="file-icon-box">MP4</div>
                <div className="file-details">
                    <span className="file-name">merry-christmas.mp4</span>
                    <span className="file-time">2m ago</span>
                </div>
            </div>
            <div className="file-info-right">
                <Repeat size={14} className="refresh-icon" />
                <span className="file-size-badge">604KB</span>
                <button className="file-menu-btn">
                    <MoreVertical size={16} />
                </button>
            </div>
        </div>
        <button className="upload-new-btn">Upload New</button>
    </div>
</div>

                                <div className="update-btn-container">
    <button className="update-btn">Update</button>
</div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EditCampaignVoice;