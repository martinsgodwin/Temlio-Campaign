
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './CampaignHistory.css';

import {
    Home, Megaphone, Users, Package, Settings, Search, ChevronDown,
    User, Repeat, Clock, SlidersHorizontal, MoreVertical
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
const ClockHeaderIcon = (props: any) => <Clock {...props} size={20} />;
// const FilterIcon = (props: any) => <SlidersHorizontal {...props} size={16} />;
const MenuIcon = (props: any) => <MoreVertical {...props} size={18} />;


const CampaignHistory: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleRowClick = (campaign: any) => {
        const route = campaign.type === 'Voice' ? '/campaign/campaign-details-voice' : '/campaign/campaign-details';
        router.push(`${route}?campaignId=${encodeURIComponent(campaign.campaignId)}`);
    };

    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-main-content" style={{ display: 'flex', width: '100%' }}>
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
                        {/* Campaign History Table */}
                        <section className="campaign-history-section">
                            <div className="section-header">
                                <h2>
                                    <ClockHeaderIcon />
                                    Campaign History
                                </h2>

                                <div className="header-actions">
                                    <div className="search-campaign-box">
                                        <SearchIcon size={16} />
                                        <input type="text" placeholder="Search with campaign id, name..." />
                                        {/* <button className="search-menu-btn">
                                            <MenuIcon size={12} />
                                        </button> */}
                                    </div>
                                    {/* <button className="filter-btn">
                                        <FilterIcon />
                                    </button> */}
                                    <button className="view-all-btn">View all</button>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#VOICE128/2025', type: 'Voice' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#VOICE128/2025</td>
                                            <td>Voice</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#VOICE128/2025', type: 'Voice' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#VOICE128/2025</td>
                                            <td>Voice</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#VOICE128/2025', type: 'Voice' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#VOICE128/2025</td>
                                            <td>Voice</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#BSMS1203/2025', type: 'SMS' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#BSMS1203/2025</td>
                                            <td>SMS</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                        <tr onClick={() => handleRowClick({ campaignId: '#VOICE128/2025', type: 'Voice' })}>
                                            <td className="col-checkbox"><input type="checkbox" onClick={handleCheckboxClick} /></td>
                                            <td className="campaign-id">#VOICE128/2025</td>
                                            <td>Voice</td>
                                            <td className="amount">₦120,000.00</td>
                                            <td className="date">12/02/2021   23:15:12</td>
                                            <td className="col-menu">
                                                <MenuIcon className="table-menu-icon" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CampaignHistory;