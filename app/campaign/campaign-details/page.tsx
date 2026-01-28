'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './CampaignDetails.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import {
    MessageSquare, CheckCircle, Clock, Download,
    MoreVertical, DollarSign, FileText, Gift, Pause, Edit, Archive
} from 'lucide-react';

// Icon Components
const MessageIcon = (props: any) => <MessageSquare {...props} size={40} />;
const CheckIcon = (props: any) => <CheckCircle {...props} size={40} />;
const ClockIcon = (props: any) => <Clock {...props} size={40} />;
const ChristmasIcon = (props: any) => <Gift {...props} size={16} />;
const MenuIcon = (props: any) => <MoreVertical {...props} size={18} />;
const DollarIcon = (props: any) => <DollarSign {...props} size={20} />;
const FileIcon = (props: any) => <FileText {...props} size={20} />;
const PauseIcon = (props: any) => <Pause {...props} size={16} />;
const EditIcon = (props: any) => <Edit {...props} size={16} />;
const ArchiveIcon = (props: any) => <Archive {...props} size={16} />;

const CampaignDetails: React.FC = () => {
    const pathname = usePathname();
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);
    const [showArchiveModal, setShowArchiveModal] = React.useState(false);

    // Sample data
    const contacts = [
        { id: 1, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '12/10/2025  12:08:21' },
        { id: 2, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '---/---' },
        { id: 3, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '---/---' },
        { id: 4, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '12/10/2025  12:08:21' },
        { id: 5, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '---/---' },
        { id: 6, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '---/---' },
        { id: 7, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '---/---' },
        { id: 8, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '12/10/2025  12:08:21' },
        { id: 9, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '12/10/2025  12:08:21' },
        { id: 10, name: 'No Name', phone: '0912345678', deliveredDate: '12/10/2025  12:08:21', pendingDate: '12/10/2025  12:08:21' },
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
                        <div className="campaign-details-layout">
                            {/* Main Content Area */}
                            <div className="campaign-main-content">
                                {/* Campaign Header */}
                                <div className="campaign-header">
                                    <div className="campaign-title-wrapper">
                                        <h1 className="campaign-title">Christmas SMS Campaign</h1>
                                        <span className={`campaign-status-badge ${isPaused ? 'paused' : ''}`}>{isPaused ? 'Paused' : 'Active'}</span>
                                    </div>

                                    <div className="campaign-settings-container">
                                        <button 
                                            className="campaign-settings-btn" 
                                            onClick={() => setShowDropdown(!showDropdown)}
                                        >
                                            Campaign Settings
                                        </button>
                                        {showDropdown && (
                                            <div className="campaign-dropdown-menu">
                                                <div className="dropdown-item" onClick={() => { setIsPaused(!isPaused); setShowDropdown(false); }}>
                                                    <PauseIcon />
                                                    <span>{isPaused ? 'Resume Campaign' : 'Pause Campaign'}</span>
                                                </div>
                                                <Link href="/campaign/campaign-details/edit-campaign-details" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <div className="dropdown-item">
                                                        <EditIcon />
                                                        <span>Edit Campaign</span>
                                                    </div>
                                                </Link>
                                                <div className="dropdown-item archive-item" onClick={() => { setShowArchiveModal(true); setShowDropdown(false); }}>
                                                    <ArchiveIcon />
                                                    <span>Archive Campaign</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Stats Cards */}
                                <div className="stats-cards">
                                    <div className="stat-card">
                                        <div className="stat-card-header">
                                            <span className="stat-card-label">SMS Sent</span>
                                            <span className="stat-card-badge">↑+12%</span>
                                        </div>
                                        <div className="stat-card-value">1,209</div>
                                        <MessageIcon className="stat-card-icon" />
                                    </div>

                                    <div className="stat-card">
                                        <div className="stat-card-header">
                                            <span className="stat-card-label">Delivered</span>
                                            <span className="stat-card-badge">↑+12%</span>
                                        </div>
                                        <div className="stat-card-value">1,209</div>
                                        <CheckIcon className="stat-card-icon" />
                                    </div>

                                    <div className="stat-card">
                                        <div className="stat-card-header">
                                            <span className="stat-card-label">Pending SMS</span>
                                            <span className="stat-card-badge">↑+12%</span>
                                        </div>
                                        <div className="stat-card-value">180</div>
                                        <ClockIcon className="stat-card-icon" />
                                    </div>
                                </div>

                                {/* Contacts Section */}
                                <section className="contacts-section">
                                    <div className="contacts-header">
                                        <h2 className="contacts-title">Contacts</h2>
                                        <button className="download-btn">
                                            <ChristmasIcon />
                                            Christmas Group
                                        </button>
                                    </div>

                                    <div className="contacts-table-container">
                                        <table className="contacts-table">
                                            <thead>
                                                <tr>
                                                    <th className="col-checkbox"><input type="checkbox" /></th>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Phone Number</th>
                                                    <th>Delivered Date</th>
                                                    <th>Pending Date</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contacts.map((contact) => (
                                                    <tr key={contact.id}>
                                                        <td className="col-checkbox"><input type="checkbox" /></td>
                                                        <td>{contact.id}</td>
                                                        <td>{contact.name}</td>
                                                        <td>{contact.phone}</td>
                                                        <td>{contact.deliveredDate}</td>
                                                        <td>{contact.pendingDate}</td>
                                                        <td className="col-menu">
                                                            <MenuIcon className="table-menu-icon" />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar */}
                            <aside className="campaign-sidebar">
                                {/* Campaign Cost Breakdown */}
                                <div className="sidebar-card">
                                    <div className="sidebar-card-header">
                                        <DollarIcon className="sidebar-card-icon" />
                                        <h3 className="sidebar-card-title">Campaign Cost Breakdown</h3>
                                    </div>
                                    <ul className="cost-breakdown-list">
                                        <li className="cost-item">
                                            <span className="cost-label">Description</span>
                                            <span className="cost-value">Amount</span>
                                        </li>
                                        <li className="cost-item">
                                            <span className="cost-label">Message</span>
                                            <span className="cost-value">₦0.38</span>
                                        </li>
                                        <li className="cost-item">
                                            <span className="cost-label">Recipients(1,270)</span>
                                            <span className="cost-value">₦500,000.38</span>
                                        </li>
                                        <li className="cost-item">
                                            <span className="cost-label">Charges</span>
                                            <span className="cost-value">₦1000.00</span>
                                        </li>
                                        <li className="cost-item">
                                            <span className="cost-label">Total</span>
                                            <span className="cost-value">₦601,000.38</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Campaign Details */}
                                <div className="sidebar-card">
                                    <div className="sidebar-card-header">
                                        <FileIcon className="sidebar-card-icon" />
                                        <h3 className="sidebar-card-title">Campaign Details</h3>
                                    </div>
                                    <p className="campaign-details-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est porttitor sapien, eget porsuere. Pellentesque sit elit velit ut consequat. In est vestibulum non dolor. Aenean volutpat diam augue enim eget tortor eros gravida nec.
                                    </p>
                                    <div className="delivery-info">
                                        <span className="delivery-label">Delivery Time</span>
                                        <span className="delivery-value">11/10/2025  12:31:20</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
            </div>

            {/* Archive Modal */}
            {showArchiveModal && (
                <div className="modal-overlay" onClick={() => setShowArchiveModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setShowArchiveModal(false)}>
                            ✕
                        </button>
                        <div className="modal-icon-wrapper">
                            <ArchiveIcon className="modal-icon" size={48} />
                        </div>
                        <h2 className="modal-title">Are you sure you want to Archive</h2>
                        <p className="modal-description">
                            Are you sure you want to delete Christmas Campaign note your customers that are yet to receive the message will not receive it and we are not going to refund your credit
                        </p>
                        <div className="modal-actions">
                            <button className="modal-cancel-btn" onClick={() => setShowArchiveModal(false)}>
                                Cancel
                            </button>
                            <button className="modal-delete-btn" onClick={() => {
                                // Handle archive logic here
                                setShowArchiveModal(false);
                            }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampaignDetails;