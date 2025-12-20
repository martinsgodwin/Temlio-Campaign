'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown,
    User, Repeat, MoreVertical, Upload, FileText, MoreHorizontal,
} from 'lucide-react';

import '../CampaignDetails.css';
import './EditCampaign-Details.css';

// Icon Components
const HomeIcon = (props: any) => <Home {...props} size={16} />;
const CampaignIcon = (props: any) => <Megaphone {...props} size={16} />;
const CustomerIcon = (props: any) => <Users {...props} size={16} />;
const OrdersIcon = (props: any) => <Package {...props} size={16} />;
const SettingsIcon = (props: any) => <Settings {...props} size={16} />;
const SearchIcon = (props: any) => <Search {...props} size={18} />;
const ChevronDownIcon = (props: any) => <ChevronDown {...props} size={14} />;
const UserAvatarIcon = (props: any) => <User {...props} size={24} />;
const RepeatIcon = (props: any) => <Repeat {...props} size={16} />;
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
                {/* Sidebar */}
                <div className="sidebar-panel">
                    <div className="logo-section">
                        <span className="logo-text">Temlio</span>
                        <span className="logo-subtext">Temlio Campaign</span>
                    </div>

                    <aside className="dashboard-sidebar">
                        <nav className="sidebar-nav">
                            <ul>
                                <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                                        <HomeIcon />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${pathname === '/campaign' || pathname.startsWith('/campaign/') ? 'active' : ''}`}>
                                    <Link href="/campaign" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                                        <CampaignIcon />
                                        <span>Campaign</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${pathname === '/customer-management' ? 'active' : ''}`}>
                                    <Link href="/customer-management" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                                        <CustomerIcon />
                                        <span>Customer Management</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <OrdersIcon />
                                    <span>Analysis</span>
                                </li>
                                <li className="nav-item">
                                    <SettingsIcon />
                                    <span>Settings</span>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>

                {/* Main Area */}
                <div className="main-area">
                    {/* Header */}
                    <header className="dashboard-header">
                        <div className="header-left">
                            <div className="search-nav">
                                <SearchIcon />
                                <input type="text" placeholder="Search for product, name or number" />
                                <button className="search-menu-btn">
                                    <MenuIcon />
                                </button>
                                <button className="search-secondary-btn">
                                    <RepeatIcon />
                                </button>
                            </div>
                        </div>

                        <div className="header-right">
                            <div className="profile-details-group">
                                <div className="user-avatar">
                                    <UserAvatarIcon />
                                </div>
                                <div className="user-info">
                                    <span className="user-name">Adereeni Stores</span>
                                    <span className="user-email">adeerinistores@oduta.com</span>
                                </div>
                                <button className="user-dropdown-btn">
                                    <ChevronDownIcon />
                                </button>
                            </div>

                            <div className="credit-action-group">
                                <div className="user-credit">
                                    <span className="credit-label">Credit Balance</span>
                                    <span className="credit-value">₦20,000.00</span>
                                </div>
                                <button className="topup-btn">Top up</button>
                            </div>
                        </div>
                    </header>

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