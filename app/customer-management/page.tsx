'use client';

import React from 'react';
import Link from 'next/link';
import './CustomerManagement.css';

import { 
    Home, Search, Repeat, Plus, Download, Filter, MoreVertical, ChevronLeft, ChevronRight,
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const HomeIcon = (props: any) => <Home {...props} size={16} />;
const SearchIcon = (props: any) => <Search {...props} size={18} />;
const RepeatIcon = (props: any) => <Repeat {...props} size={16} />; 
const PlusIcon = (props: any) => <Plus {...props} size={18} />;
const DownloadIcon = (props: any) => <Download {...props} size={18} />;
const FilterIcon = (props: any) => <Filter {...props} size={18} />;
const MoreVerticalIcon = (props: any) => <MoreVertical {...props} size={18} />;
const ChevronLeftIcon = (props: any) => <ChevronLeft {...props} size={18} />;
const ChevronRightIcon = (props: any) => <ChevronRight {...props} size={18} />;

interface CustomerGroup {
    id: number;
    name: string;
    numbers: number;
    purpose: string;
    date: string;
    details: string;
}

const generateCustomerGroups = (count: number): CustomerGroup[] => {
    const baseGroups = [
        { name: 'Sales force', numbers: 200, purpose: 'Increase sales...', date: '12/10/2025', details: 'This group is...' },
        { name: 'Food Customers', numbers: 129, purpose: 'Kayode foodco', date: '12/10/2025', details: 'This group is...' },
        { name: 'Grand Pricing', numbers: 21, purpose: 'New price alert', date: '12/10/2025', details: 'This group is...' },
    ];
    
    const groups: CustomerGroup[] = [];
    for (let i = 0; i < count; i++) {
        const baseIndex = i % baseGroups.length;
        groups.push({
            id: i + 1,
            ...baseGroups[baseIndex],
            name: i < 3 ? baseGroups[baseIndex].name : 'Grand Pricing',
            numbers: i < 3 ? baseGroups[baseIndex].numbers : 21,
            purpose: i < 3 ? baseGroups[baseIndex].purpose : 'New price alert',
        });
    }
    return groups;
};

const customerGroups = generateCustomerGroups(10); 

const CustomerGroupsTable: React.FC<{ groups: CustomerGroup[] }> = ({ groups }) => (
    <div className="table-wrapper">
        <table className="customer-groups-table">
            <thead>
                <tr>
                    <th className="col-checkbox"><input type="checkbox" /></th>
                    <th>#</th>
                    <th>Group Name</th>
                    <th>Numbers</th>
                    <th>Group Purpose</th>
                    <th>Date Created</th>
                    <th>Details</th>
                    <th className="col-actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((group) => (
                    <tr key={group.id}>
                        <td className="col-checkbox"><input type="checkbox" /></td>
                        <td>{group.id}</td>
                        <td>{group.name}</td>
                        <td>{group.numbers}</td>
                        <td>{group.purpose}</td>
                        <td>{group.date}</td>
                        <td>{group.details}</td>
                        <td className="col-actions">
                            <MoreVerticalIcon className="table-action-icon" size={16} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Pagination: React.FC = () => (
    <div className="table-footer-pagination">
        <div className="page-control-group">
            <span className="pagination-text">Goto Page</span>
            <input type="text" defaultValue="01" className="page-input" />
        </div>
        <div className="page-nav-buttons">
            <button className="nav-btn">
                <ChevronLeftIcon size={12} />
            </button>
            <button className="nav-btn active">
                <ChevronRightIcon size={12} />
            </button>
            <span className="current-page-number">01</span>
        </div>
    </div>
);

const CustomerManagement: React.FC = () => {

  return (
    <div className="dashboard-container">
        <Sidebar />
        
        <div className="main-area">
            <Header />

            <main className="dashboard-content">
                <div className="breadcrumbs">
                    <HomeIcon size={12} className="icon" />
                    <span>Home / Customer Management</span>
                </div>

                <div className="customer-management-page">
                    <div className="page-actions-row">
                        <h1>Customer Management</h1>
                        <div className="search-nav" style={{ width: '300px' }}>
                            <SearchIcon className="icon" />
                            <input type="text" placeholder="Search for product, name or ID" />
                            <button className="search-secondary-btn">
                                <RepeatIcon className="icon" />
                            </button>
                        </div>
                    </div>

                    <CustomerGroupsTable groups={customerGroups} />
                    <Pagination />
                </div>
            </main>
        </div>
    </div>
  );
};

export default CustomerManagement;