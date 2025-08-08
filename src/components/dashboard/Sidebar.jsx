import React from 'react';
import { Button } from '@/components/ui/button';

const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'revenue', label: 'Revenue' },
    { id: 'cashflow', label: 'Cash Flow' },
    { id: 'forecasting', label: 'Forecasting' },
];

const Sidebar = ({ activeView, setActiveView }) => {
    return (
        <div className="w-64 p-4 border-r border-white/10 flex flex-col justify-between flex-shrink-0">
            <div>
                <h1 className="text-2xl font-bold text-white mb-10">Arc</h1>
                <nav className="flex flex-col space-y-2">
                    {navItems.map(item => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            onClick={() => setActiveView(item.id)}
                            className={`w-full justify-start text-base font-medium transition-colors duration-200 py-2 px-4 rounded-md flex items-center ${activeView === item.id ? 'text-primary bg-primary/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className={`mr-3 h-2 w-2 rounded-full ${activeView === item.id ? 'bg-primary' : 'bg-transparent'}`}></span>
                            {item.label}
                        </Button>
                    ))}
                </nav>
            </div>
            <div className="text-center"><p className="text-white/50 text-xs">© 2025 Arc</p></div>
        </div>
    );
};

export default Sidebar;
