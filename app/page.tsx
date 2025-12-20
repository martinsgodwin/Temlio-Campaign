'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Dashboard.css';

import { 
    Home, 
    Megaphone, 
    Users, 
    Package, 
    Settings, 
    Search, 
    ChevronDown, 
    Zap,
    Phone, 
    Play, 
    Mail, 
    CreditCard, 
    Download, 
    Repeat, 
    Bell, 
    User,
    Clock,
    MoreVertical, 
    PhoneOff,     
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
const PlayIcon = (props: any) => <Play {...props} size={16} />;
const MailIcon = (props: any) => <Mail {...props} size={16} />;
const CallIcon = (props: any) => <Phone {...props} size={16} />; 
const ImportIcon = (props: any) => <Download {...props} size={16} />; 
const CreditCardIcon = (props: any) => <CreditCard {...props} size={16} />;
const RepeatIcon = (props: any) => <Repeat {...props} size={16} />; 
const MoreIcon = (props: any) => <MoreVertical {...props} size={16} className="table-menu-icon" />;
const ZapHeaderIcon = (props: any) => <Zap {...props} size={22} />;
const MegaphoneHeaderIcon = (props: any) => <Megaphone {...props} size={22} />;
const ClockHeaderIcon = (props: any) => <Clock {...props} size={22} />;

const Dashboard: React.FC = () => {
    const pathname = usePathname();
    
    return (
        <div className="dashboard-container">
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
                        <HomeIcon size={12} />  Home / Website
                    </div>

                    <section className="dashboard-overview">
                        <div className="section-header">
                            <h2>Dashboard Overview</h2>
                            <div className="header-actions">
                                <button className="overview-btn">
                                    <Mail size={16} style={{marginRight: '5px'}}/>Bulk SMS
                                </button>
                                <button className="overview-btn active">
                                    <Phone size={16} style={{marginRight: '5px'}}/>Robocall
                                </button>
                            </div>
                        </div>

                        <div className="metric-cards-container">
                            <div className="metric-card blue-card">
                                <div className="card-header">
                                    <span>SMS Sent today</span>
                                    <span className="change-indicator positive">↑ 10%</span>
                                </div>
                                <div className="card-left-group">
                                    <Mail size={20} className="metric-small-icon"/> 
                                    <h3 className="card-value">12,023</h3>
                                </div>
                            </div>
                            
                            <div className="metric-card blue-card">
                                <div className="card-header">
                                    <span>Calls Connected</span>
                                    <span className="change-indicator positive">↑ 10%</span>
                                </div>
                                <div className="card-left-group">
                                    <Phone size={20} className="metric-small-icon"/> 
                                    <h3 className="card-value">12,023</h3>
                                </div>
                            </div>

                            <div className="metric-card blue-card">
                                <div className="card-header">
                                    <span>Delivery Rate</span>
                                    <span className="change-indicator positive">↑ 10%</span>
                                </div>
                                <div className="card-left-group">
                                    <Zap size={20} className="metric-small-icon"/> 
                                    <h3 className="card-value">12,023</h3>
                                </div>
                            </div>

                            <div className="metric-card blue-card">
                                <div className="card-header">
                                    <span>Failed Calls</span>
                                    <span className="change-indicator negative">↓ 10%</span>
                                </div>
                                <div className="card-left-group">
                                    <PhoneOff size={20} className="metric-small-icon"/> 
                                    <h3 className="card-value">12,023</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="quick-actions">
                        <h2><ZapHeaderIcon /> Quick Actions</h2>
                        <div className="action-buttons-container">
                            <button className="action-btn">
                                <PlayIcon /> Edit Broadcast
                            </button>
                            <button className="action-btn">
                                <MailIcon /> Bulk SMS
                            </button>
                            <button className="action-btn">
                                <CallIcon /> Robocall
                            </button>
                            <button className="action-btn">
                                <ImportIcon /> Import contacts
                            </button>
                            <button className="action-btn">
                                <CreditCardIcon /> Top up credit
                            </button>
                        </div>
                    </section>

                    <section className="active-campaign-section">
                        <div className="section-header">
                            <h2 className='section-h2-small'><MegaphoneHeaderIcon />Active Campaign</h2>
                            <div className="header-actions">
                                <div className="search-campaign-box">
                                    <SearchIcon size={16} />
                                    <input type="text" placeholder="Search with campaign id, name..." />
                                    <RepeatIcon size={16} />
                                </div>
                                <button className="view-all-btn">View all</button>
                            </div>
                        </div>

                        <div className="campaign-cards-container">
                            <div className="campaign-card">
                                <div className="card-title-group">
                                    <span className="icon-circle"><Bell size={12} /></span>
                                    <h3>Christmas Greetings</h3>
                                    <div className="campaign-status-running">
                                        <span className="status-dot"></span>
                                        <span className="status-text">Running</span>
                                    </div>
                                </div>
                                <p className="card-id">ID: #BSMS1203/2025 • Bulk SMS</p>
                                <div className="progress-bar-group">
                                    <div className="progress-header">
                                        <span className="progress-label">Progress</span>
                                        <span className="progress-count">12,348/ 50,003</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                
                                <div className="campaign-stats">
                                    <div className="stat-item">
                                        <span className="stat-label">Delivered</span>
                                        <span className="stat-value">20%</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Clicked</span>
                                        <span className="stat-value">12%</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Cost</span>
                                        <span className="stat-value">₦25,523.12</span>
                                    </div>
                                    <span className="details-link">Details →</span>
                                </div>
                            </div>

                            <div className="campaign-card">
                                <div className="card-title-group">
                                    <span className="icon-circle"><Package size={12} /></span> 
                                    <h3>New Cart added</h3>
                                    <div className="campaign-status-running">
                                        <span className="status-dot"></span>
                                        <span className="status-text">Running</span>
                                    </div>
                                </div>
                                <p className="card-id">ID: #BSMS1203/2025 • Bulk SMS</p>
                                <div className="progress-bar-group">
                                    <div className="progress-header">
                                        <span className="progress-label">Progress</span>
                                        <span className="progress-count">12,348/ 50,003</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                
                                <div className="campaign-stats">
                                    <div className="stat-item">
                                        <span className="stat-label">Delivered</span>
                                        <span className="stat-value">20%</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Clicked</span>
                                        <span className="stat-value">12%</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Cost</span>
                                        <span className="stat-value">₦25,523.12</span>
                                    </div>
                                    <span className="details-link">Details →</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="campaign-history-section">
                        <div className="section-header">
                            <h2 className='section-h2-small'><ClockHeaderIcon />Campaign History</h2>
                            <div className="header-actions">
                                <div className="search-campaign-box">
                                    <SearchIcon size={16} />
                                    <input type="text" placeholder="Search with campaign id, name..." />
                                    <RepeatIcon size={16} />
                                </div>
                            </div>
                        </div>

                        <div className="history-table-container">
                            <table className="campaign-history-table">
                                <thead>
                                    <tr>
                                        <th className="col-checkbox"><input type="checkbox" /></th>
                                        <th className="col-id">Campaign ID</th>
                                        <th>Campaign Type</th>
                                        <th>Amount Spent</th>
                                        <th className="col-analysis">Analysis</th>
                                        <th>Date</th>
                                        <th className="col-menu"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-checkbox"><input type="checkbox" /></td>
                                        <td className="col-id">#BSMS1203/2025</td>
                                        <td>Bulk SMS</td>
                                        <td>₦120,000.00</td>
                                        <td className="col-analysis">
                                            <div className="analysis-group">
                                                <span className="analysis-item delivered">12,134</span>
                                                <span className="analysis-item not-delivered">12,134</span>
                                            </div>
                                        </td>
                                        <td>12/02/2021 23:15:12</td>
                                        <td className="col-menu"><MoreIcon /></td>
                                    </tr>

                                    <tr>
                                        <td className="col-checkbox"><input type="checkbox" /></td>
                                        <td className="col-id">#BSMS1203/2025</td>
                                        <td>Bulk SMS</td>
                                        <td>₦120,000.00</td>
                                        <td className="col-analysis">
                                            <div className="analysis-group">
                                                <span className="analysis-item delivered">12,134</span>
                                                <span className="analysis-item not-delivered">12,134</span>
                                            </div>
                                        </td>
                                        <td>12/02/2021 23:15:12</td>
                                        <td className="col-menu"><MoreIcon /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;