import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Dashboard from '@/pages/dashboard/Dashboard';
import Revenue from '@/pages/dashboard/Revenue';
import Cashflow from '@/pages/dashboard/Cashflow';
import Forecasting from '@/pages/dashboard/Forecasting';
import { Button } from "@/components/ui/button";
import '@/dashboard.css';

function DashboardApp() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'revenue':
        return <Revenue />;
      case 'cashflow':
        return <Cashflow />;
      case 'forecasting':
        return <Forecasting />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dashboard-container flex h-full bg-background text-foreground rounded-2xl">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 border-b border-white/10 flex-shrink-0">
          <h1 className="text-xl font-semibold text-white/90 capitalize">{activeView}</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Settings</Button>
            <Button className="btn-custom-primary">Upgrade</Button>
          </div>
        </header>
        <main className="flex-1 p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default DashboardApp;