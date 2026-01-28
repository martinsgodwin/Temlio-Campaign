'use client';

import React from 'react';
import { Search, ChevronDown, User, Repeat } from 'lucide-react';
import './Header.css';

// Icon Components
const SearchIcon = (props: any) => <Search {...props} size={18} />;
const ChevronDownIcon = (props: any) => <ChevronDown {...props} size={14} />;
const UserAvatarIcon = (props: any) => <User {...props} size={24} />;
const RepeatIcon = (props: any) => <Repeat {...props} size={16} />;

const Header: React.FC = () => {
    return (
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
    );
};

export default Header;
