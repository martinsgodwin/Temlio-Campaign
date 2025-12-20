'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Active-Campaign.css';

import {
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown,
    User, Repeat, MoreVertical, Filter
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
// const FilterIcon = (props: any) => <Filter {...props} size={18} />;

const ActiveCampaign: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleRowClick = (campaign: any) => {
        const route = campaign.type === 'Voice' ? '/campaign/campaign-details-voice' : '/campaign/campaign-details';
        router.push(`${route}?campaignId=${encodeURIComponent(campaign.campaignId)}`);
    };

    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // Sample campaign data
    const campaigns = [
        { id: 1, campaignId: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 2, campaignId: '#BSMS1203/2025', type: 'Voice', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 3, campaignId: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 4, campaignId: '#BSMS1203/2025', type: 'Voice', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 5, campaignId: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 6, campaignId: '#BSMS1203/2025', type: 'Voice', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 7, campaignId: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 8, campaignId: '#BSMS1203/2025', type: 'Voice', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 9, campaignId: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 10, campaignId: '#BSMS1203/2025', type: 'Voice', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
        { id: 11, campaignId: '#BSMS1203/2025', type: 'SMS', amount: '₦120,000.00', progress: '20%', date: '12/02/2021 23:15:12' },
    ];

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

                                <li className={`nav-item ${pathname === '/campaign' || pathname === '/campaign/campaign-history' || pathname.startsWith('/campaign/') ? 'active' : ''}`}>
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
                        <div className="active-campaign-container">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="page-title-section">
                                    <CampaignIcon className="page-icon" size={24} />
                                    <h1 className="page-title">Active Campaign</h1>
                                </div>
                                <div className="page-actions">
                                    <div className="campaign-search-box">
                                        <SearchIcon />
                                        <input type="text" placeholder="Search with campaign id, name..." />
                                    </div>
                                    {/* <button className="filter-btn">
                                        <FilterIcon />
                                    </button> */}
                                    <button className="view-all-btn">View all</button>
                                </div>
                            </div>

                            {/* Campaign Table */}
                            <div className="campaign-table-container">
                                <table className="campaign-table">
                                    <thead>
                                        <tr>
                                            <th className="col-checkbox"><input type="checkbox" /></th>
                                            <th>Campaign ID</th>
                                            <th>Campaign Type</th>
                                            <th>Amount Spent</th>
                                            <th>Progress</th>
                                            <th>Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {campaigns.map((campaign) => (
                                            <tr key={campaign.id} onClick={() => handleRowClick(campaign)}>
                                                <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                                <td className="campaign-id">{campaign.campaignId}</td>
                                                <td>{campaign.type}</td>
                                                <td className="amount">{campaign.amount}</td>
                                                <td className="progress">{campaign.progress}</td>
                                                <td className="date">{campaign.date}</td>
                                                <td className="col-menu">
                                                    <MenuIcon className="table-menu-icon" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ActiveCampaign;