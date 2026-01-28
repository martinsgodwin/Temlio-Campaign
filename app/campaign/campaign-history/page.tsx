
'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './CampaignHistory.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import {
    Clock, MoreVertical, Search
} from 'lucide-react';

// Icon Components
const ClockHeaderIcon = (props: any) => <Clock {...props} size={20} />;
const MenuIcon = (props: any) => <MoreVertical {...props} size={18} />;
const SearchIcon = (props: any) => <Search {...props} size={18} />;


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
                <Sidebar />

                {/* Main Area */}
                <div className="main-area">
                    <Header />

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