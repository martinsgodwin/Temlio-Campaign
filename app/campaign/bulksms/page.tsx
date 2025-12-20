'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './Bulksms.css';

import { 
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown, 
    Repeat, User, Plus, Upload, X, FileText, Check
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
const FileTextIcon = (props: any) => <FileText {...props} size={28} />;
const CloseIcon = (props: any) => <X {...props} size={20} />;
const CheckIcon = (props: any) => <Check {...props} size={40} />;

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

const Bulksms: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [messageContent, setMessageContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [isPriceBreakdownOpen, setIsPriceBreakdownOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const maxChars = 500;

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleScheduleModal = () => setIsScheduleModalOpen(!isScheduleModalOpen);
    const togglePriceBreakdown = () => setIsPriceBreakdownOpen(!isPriceBreakdownOpen);

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value);
    };

    const handleSendClick = () => {
        togglePriceBreakdown();
    };

    const handleProceed = () => {
        setIsPriceBreakdownOpen(false);
        // Small delay before showing success modal for smooth transition
        setTimeout(() => {
            setShowSuccessModal(true);
        }, 200);
    };

    const handleViewAnalysis = () => {
        console.log('Navigating to analytics...');
        router.push('/analytics');
    };

    const handleCloseSuccess = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className={`dashboard-container ${(isModalOpen || isScheduleModalOpen || isPriceBreakdownOpen || showSuccessModal) ? 'modal-open' : ''}`}>
            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={toggleModal}>
                            <X size={20} />
                        </button>
                        <h3>Create Group</h3>
                        <p>Create a group and organize your contacts together</p>
                        
                        <div className="modal-field">
                            <label>Group Name</label>
                            <input 
                                type="text" 
                                className="modal-input" 
                                placeholder="E.g Temu Christmas Campaign" 
                            />
                        </div>
                        
                        <div className="modal-field">
                            <label>Recipients</label>
                            <input 
                                type="text" 
                                className="modal-input" 
                                placeholder="Enter recipients contacts and separate with comma ',' 09112345678990, 08112345678990, etc" 
                            />
                        </div>
                        
                        <button className="save-btn">Save</button>
                    </div>
                </div>
            )}

            {isScheduleModalOpen && (
                <div className="modal-overlay" onClick={toggleScheduleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={toggleScheduleModal}>
                            <X size={20} />
                        </button>
                        <h3>Schedule Message</h3>
                        <p>Choose the date and time for sending your message</p>
                        
                        <div className="modal-field">
                            <label>Date</label>
                            <input 
                                type="date" 
                                className="modal-input" 
                            />
                        </div>
                        
                        <div className="modal-field">
                            <label>Time</label>
                            <input 
                                type="time" 
                                className="modal-input" 
                            />
                        </div>
                        
                        <button className="save-btn">Schedule</button>
                    </div>
                </div>
            )}

            {/* Price Breakdown Modal */}
            <AnimatePresence>
                {isPriceBreakdownOpen && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div 
                            className="price-breakdown-modal"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={togglePriceBreakdown}>
                                <CloseIcon />
                            </button>
                            
                            <div className="price-breakdown-header">
                                <div className="file-icon-wrapper">
                                    <FileTextIcon />
                                </div>
                                <div>
                                    <h3>Your Invoice</h3>
                                    <p className="price-breakdown-subtitle">Your Bulk SMS cost is here</p>
                                </div>
                            </div>

                            <div className="price-breakdown-content">
                                <div className="price-breakdown-table">
                                    <div className="table-header">
                                        <span>Description</span>
                                        <span>Amount</span>
                                    </div>
                                    
                                    <div className="table-row">
                                        <span className="row-label">SMS/Page</span>
                                        <span className="row-value">₦5.28</span>
                                    </div>
                                    
                                    <div className="table-row">
                                        <span className="row-label">Recipients(12,578)</span>
                                        <span className="row-value">₦500,000.28</span>
                                    </div>
                                    
                                    <div className="table-row">
                                        <span className="row-label">Charges</span>
                                        <span className="row-value">₦1000.00</span>
                                    </div>
                                    
                                    <div className="table-row total-row">
                                        <span className="row-label">Total</span>
                                        <span className="row-value">₦501,000.28</span>
                                    </div>
                                </div>
                            </div>

                            <div className="price-breakdown-actions">
                                <button className="back-btn" onClick={togglePriceBreakdown}>Back</button>
                                <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
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
                                <li className={`nav-item ${(pathname === '/campaign' || pathname === '/campaign/bulksms') ? 'active' : ''}`}>
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
                        <div className="breadcrumbs">
                            <HomeIcon size={12} /> Home / Campaign / Bulk SMS
                        </div>

                        <div className="section-header">
                            <div className="section-title">
                                <h2>Campaign Details</h2>
                                <p className="section-subtitle">Connecting you to your customers easily</p>
                            </div>
                        </div>

                        <section className="bulk-sms-form">
                            <div className="form-row">
                                <label>Select sender ID</label>
                                <div className="input-group">
                                    <select className="form-select">
                                        <option>Select Sender ID</option>
                                    </select>
                                    <button className="form-btn create-id">
                                        <PlusIcon />
                                        Create ID
                                    </button>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="recipients-label-group">
                                    <label>Recipients</label>
                                    <button className="create-group-btn" onClick={toggleModal}>
                                        <PlusIcon size={14} />
                                        Create group
                                    </button>
                                </div>
                                <div className="recipients-input-wrapper">
                                    <input 
                                        type="text" 
                                        className="form-input" 
                                        placeholder="Enter recipients contacts and separate with comma ',' 09112345678990, 08112345678990, etc" 
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <label>Upload Contacts</label>
                                <div className="upload-area">
                                    <div className="upload-icon">
                                        <UploadIcon />
                                    </div>
                                    <div className="upload-text">Upload contacts</div>
                                    <div className="upload-subtext">
                                        Supported formats: JPG, PNG, JPEG, MP4. You can upload up to five documents.
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <label>Compose content</label>
                                <textarea 
                                    className="form-textarea" 
                                    placeholder="enter message" 
                                    maxLength={maxChars}
                                    value={messageContent}
                                    onChange={handleMessageChange}
                                ></textarea>
                                <div className="char-count">
                                    {maxChars - messageContent.length} characters remaining
                                </div>
                            </div>

                            <div className="form-actions">
                                <button className="form-btn schedule" onClick={toggleScheduleModal}>Schedule for Later</button>
                                <button className="form-btn send" onClick={handleSendClick}>Send</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Bulksms;