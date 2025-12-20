'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Campaign.css';

import { 
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown, 
    Phone, User, Repeat, MoreVertical, Clock, 
    TrendingUp, MessageSquare, X 
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
const MoreIcon = (props: any) => <MoreVertical {...props} size={16} className="table-menu-icon" />;
const MegaphoneHeaderIcon = (props: any) => <Megaphone {...props} size={22} />;
const ClockHeaderIcon = (props: any) => <Clock {...props} size={22} />;

const Campaign: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample data for active campaigns
    const activeCampaigns = [
        { id: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: '#BSMS1204/2025', type: 'SMS', amount: '₦130,000.00', progress: '30%', date: '13/02/2021 10:15:12' },
        { id: '#BSMS1205/2025', type: 'SMS', amount: '₦140,000.00', progress: '40%', date: '14/02/2021 11:15:12' },
    ];

    // Sample data for campaign history
    const campaignHistory = [
        { id: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', date: '12/02/2021 23:15:12' },
        { id: '#VOICE128/2025', type: 'Voice', amount: '₦120,000.00', date: '12/02/2021 23:15:12' },
        { id: '#BSMS1206/2025', type: 'SMS', amount: '₦150,000.00', date: '15/02/2021 12:15:12' },
    ];

    const handleRowClick = (campaignType: string) => {
        if (campaignType === 'SMS') {
            router.push('/campaign/campaign-details');
        } else if (campaignType === 'Voice') {
            router.push('/campaign/campaign-details-voice');
        }
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleConfirm = () => {
        const selectedRadio = document.querySelector('input[name="campaignType"]:checked') as HTMLInputElement;
        const selectedType = selectedRadio?.value;

        if (selectedType === 'Voice') {
            router.push('/campaign/robocall');
        } else if (selectedType === 'Bulk SMS') {
            router.push('/campaign/bulksms');
        } else {
            toggleModal();
        }
    };

    return (
        <div className="dashboard-container">
            <div className={`dashboard-main-content ${isModalOpen ? 'content-blur' : ''}`} style={{ display: 'flex', width: '100%' }}>
                {/* Sidebar */}
                <div className="sidebar-panel">
                    <div className="logo-section">
                        <img src="/temlio-logo.png" alt="Temlio Logo" className="logo-image" />
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
                                <li className={`nav-item ${pathname === '/campaign' ? 'active' : ''}`}>
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
                        <div className="breadcrumbs">
                            <HomeIcon size={12} />  Home / Campaign
                        </div>

                        {/* Campaign Overview */}
                        <section className="campaign-overview-section">
                            <div className="section-header">
                                <h2>Campaign Overview</h2>
                                <div className="header-actions">
                                    <button className="campaign-single-btn" onClick={toggleModal}>
                                        Campaign
                                    </button>
                                </div>
                            </div>

                            <div className="overview-cards-container">
                                {/* Active Campaign Card */}
                                <div className="overview-card active-card">
                                    <div className="card-label">Active Campaign</div>
                                    <div className="card-big-number">10</div>
                                </div>

                                {/* Closed Campaign Card 1 */}
                                <div className="overview-card closed-card">
                                    <div className="card-header-row">
                                        <span className="card-label">Closed Campaign</span>
                                        <span className="today-badge">Today</span>
                                    </div>
                                    <div className="card-stats-row">
                                        <span className="card-big-number">12,023</span>
                                        <span className="trend-indicator">
                                            <TrendingUp size={14} />
                                            12%
                                        </span>
                                    </div>
                                </div>

                                {/* Closed Campaign Card 2 */}
                                <div className="overview-card closed-card">
                                    <div className="card-header-row">
                                        <span className="card-label">Closed Campaign</span>
                                        <span className="today-badge">Today</span>
                                    </div>
                                    <div className="card-stats-row">
                                        <span className="card-big-number">12,023</span>
                                        <span className="trend-indicator">
                                            <TrendingUp size={14} />
                                            12%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Active Campaign Table */}
                        <section className="active-campaign-section">
                            <div className="section-header">
                                <h2 className='section-h2-small'>
                                    <MegaphoneHeaderIcon />
                                    Active Campaign
                                </h2>
                                <div className="header-actions">
                                    <div className="search-campaign-box">
                                        <SearchIcon size={16} />
                                        <input type="text" placeholder="Search with campaign id, name..." />
                                        <RepeatIcon size={16} />
                                    </div>
                                    <Link href="/campaign/active-campaign">
                                        <button className="view-all-btn">View all</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="history-table-container">
                                <table className="campaign-history-table">
                                    <thead>
                                        <tr>
                                            <th className="col-checkbox"><input type="checkbox" /></th>
                                            <th>Campaign ID</th>
                                            <th>Campaign Type</th>
                                            <th>Amount Spent</th>
                                            <th>Progress</th>
                                            <th>Date</th>
                                            <th className="col-menu"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeCampaigns.map((campaign, index) => (
                                            <tr key={index} onClick={() => handleRowClick(campaign.type)} style={{ cursor: 'pointer' }}>
                                                <td className="col-checkbox"><input type="checkbox" /></td>
                                                <td className="col-id">{campaign.id}</td>
                                                <td>{campaign.type}</td>
                                                <td>{campaign.amount}</td>
                                                <td>{campaign.progress}</td>
                                                <td>{campaign.date}</td>
                                                <td className="col-menu"><MoreIcon /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Campaign History Table */}
                        <section className="campaign-history-section">
                            <div className="section-header">
                                <h2 className='section-h2-small'>
                                    <ClockHeaderIcon />
                                    Campaign History
                                </h2>
                                <div className="header-actions">
                                    <div className="search-campaign-box">
                                        <SearchIcon size={16} />
                                        <input type="text" placeholder="Search with campaign id, name..." />
                                        <RepeatIcon size={16} />
                                    </div>
                                    <Link href="/campaign/campaign-history">
                                        <button className="view-all-btn">View all</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="history-table-container">
                                <table className="campaign-history-table">
                                    <thead>
                                        <tr>
                                            <th className="col-checkbox"><input type="checkbox" /></th>
                                            <th>Campaign ID</th>
                                            <th>Campaign Type</th>
                                            <th>Amount Spent</th>
                                            <th>Date</th>
                                            <th className="col-menu"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {campaignHistory.map((campaign, index) => (
                                            <tr key={index} onClick={() => handleRowClick(campaign.type)} style={{ cursor: 'pointer' }}>
                                                <td className="col-checkbox"><input type="checkbox" /></td>
                                                <td className="col-id">{campaign.id}</td>
                                                <td>{campaign.type}</td>
                                                <td>{campaign.amount}</td>
                                                <td>{campaign.date}</td>
                                                <td className="col-menu"><MoreIcon /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={toggleModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <X size={14} />
                        </button>
                        
                        <h3>Campaign Type</h3>
                        <p>Select Campaign type here</p>

                        <div className="modal-options">
                            <label className="option-item">
                                <MessageSquare size={18} />
                                <span>Bulk SMS</span>
                                <input type="radio" name="campaignType" value="Bulk SMS" defaultChecked />
                            </label>

                            <label className="option-item">
                                <Phone size={18} />
                                <span>Voice</span>
                                <input type="radio" name="campaignType" value="Voice" />
                            </label>
                        </div>

                        <button className="confirm-btn" onClick={handleConfirm}>
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Campaign;