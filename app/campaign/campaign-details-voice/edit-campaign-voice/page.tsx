'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../CampaignDetailsVoice.css';
import './EditCampaignVoice.css';

import {
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown,
    User, Repeat, Phone, MoreVertical, CheckCircle, Mic
} from 'lucide-react';

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

const EditCampaignVoice: React.FC = () => {
    const pathname = usePathname();

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