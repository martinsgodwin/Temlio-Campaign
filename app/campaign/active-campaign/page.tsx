'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './Active-Campaign.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import {
    Megaphone, MoreVertical, Search
} from 'lucide-react';

// Icon Components
const CampaignIcon = (props: any) => <Megaphone {...props} size={16} />;
const MenuIcon = (props: any) => <MoreVertical {...props} size={18} />;

const SearchIcon = (props: any) => <Search {...props} size={16} />;

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
                <Sidebar />

                {/* Main Area */}
                <div className="main-area">
                    <Header />

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