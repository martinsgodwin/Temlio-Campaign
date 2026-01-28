'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Megaphone, Users, Package, Settings } from 'lucide-react';
import './Sidebar.css';

// Icon Components
const HomeIcon = (props: any) => <Home {...props} size={16} />;
const CampaignIcon = (props: any) => <Megaphone {...props} size={16} />;
const CustomerIcon = (props: any) => <Users {...props} size={16} />;
const OrdersIcon = (props: any) => <Package {...props} size={16} />;
const SettingsIcon = (props: any) => <Settings {...props} size={16} />;

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="sidebar-panel">
            <div className="logo-section">
                <img src="/temlio-logo.png" alt="Temlio Logo" className="logo-image" />
                <span className="logo-subtext">Temlio Campaign</span>
            </div>

            <aside className="dashboard-sidebar">
                <nav className="sidebar-nav">
                    <ul>
                        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                                <HomeIcon />
                                <span>Dashboard</span>
                            </li>
                        </Link>
                        <Link href="/campaign" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className={`nav-item ${pathname === '/campaign' || pathname.startsWith('/campaign/') ? 'active' : ''}`}>
                                <CampaignIcon />
                                <span>Campaign</span>
                            </li>
                        </Link>
                        <Link href="/customer-management" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className={`nav-item ${pathname === '/customer-management' ? 'active' : ''}`}>
                                <CustomerIcon />
                                <span>Customer Management</span>
                            </li>
                        </Link>
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
    );
};

export default Sidebar;
