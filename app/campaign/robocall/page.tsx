'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Robocall.css';

import {
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown,
    Repeat, User, Plus, Upload, Phone, Settings2, Truck
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
const PlusIcon = (props: any) => <Plus {...props} size={16} />;
const UploadIcon = (props: any) => <Upload {...props} size={24} />;

const Robocall: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNextStep = () => {
        router.push('/campaign/robocall/call-setup');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-main-content" style={{ display: 'flex', width: '100%' }}>
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
                                <li className={`nav-item ${(pathname === '/campaign' || pathname?.includes('/campaign/')) ? 'active' : ''}`}>
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

                <div className="main-area">
                    <header className="dashboard-header">
                        <div className="header-left">
                            <div className="search-nav">
                                <SearchIcon />
                                <input type="text" placeholder="Search for product, name or number" />
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
                                <button className="btn-secondary-outline">Schedule for Later</button>
                                <button className="btn-primary-filled" onClick={handleNextStep}>Send</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Robocall;