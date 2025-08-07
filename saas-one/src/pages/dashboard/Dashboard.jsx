import React, { useState, useEffect } from 'react';

// Icons (could be moved to a separate file)
const CashIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>;
const RunwayIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
const BurnIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0118 14c0 3-1.5 4-1.5 4-1.446-1.632-3.143-3.343-4.157-4.357M12 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>;
const MRRIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m0-10a9 9 0 110 18 9 9 0 010-18z"/></svg>;

const StatCard = ({ icon, title, value, change, changeColor, glowClass, iconClass }) => (
    <div className={`stat-card ${glowClass} p-6 flex flex-col justify-between h-full`}>
        <div>
            <div className="flex items-center gap-4">
                <div className={`icon-container ${iconClass}`}>{icon}</div>
                <h3 className="text-white/60 font-medium">{title}</h3>
            </div>
            <p className="text-4xl font-bold text-white mt-4">{value}</p>
            <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>
        </div>
    </div>
);

const HeartbeatChart = ({ timeline }) => {
    const [chartData, setChartData] = useState({ cashIn: 'M0 150', cashOut: 'M0 180' });

    useEffect(() => {
        const generateData = (points) => {
            let cashInPath = 'M0 150';
            let cashOutPath = 'M0 180';
            for (let i = 0; i < points; i++) {
                const x = (i / (points - 1)) * 500;
                const yIn = 150 - (Math.random() * 80 - 40);
                const yOut = 180 - (Math.random() * 60 - 30);
                cashInPath += ` L${x} ${yIn}`;
                cashOutPath += ` L${x} ${yOut}`;
            }
            return { cashIn: cashInPath, cashOut: cashOutPath };
        };

        let data;
        if (timeline === '7d') data = generateData(7);
        else if (timeline === '1m') data = generateData(30);
        else if (timeline === '3m') data = generateData(90);
        else if (timeline === '1y') data = generateData(12);

        setChartData(data);
    }, [timeline]);

    return (
        <div className="h-64">
            <svg viewBox="0 0 500 200" className="w-full h-full">
                <path d={chartData.cashIn} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-line-draw" />
                <path d={chartData.cashOut} fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" className="animate-line-draw" style={{animationDelay: '0.2s'}}/>
            </svg>
        </div>
    );
};

const Dashboard = () => {
    const [timeline, setTimeline] = useState('3m');

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<CashIcon />} title="Cash Balance" value="$142,302" change="+2.1% this month" changeColor="text-green-400" glowClass="glow-primary" iconClass="icon-primary" />
                <StatCard icon={<RunwayIcon />} title="Runway" value="~5 months" change="-2 weeks vs last month" changeColor="text-red-400" glowClass="glow-destructive" iconClass="icon-destructive" />
                <StatCard icon={<BurnIcon />} title="Net Burn (30d)" value="-$15,120" change="Burn is up 35%" changeColor="text-yellow-400" glowClass="glow-warning" iconClass="icon-warning" />
                <StatCard icon={<MRRIcon />} title="MRR" value="$12,400" change="+$1.2k this month" changeColor="text-green-400" glowClass="glow-primary" iconClass="icon-primary" />
            </div>
            <div className="glass-pane p-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-white/90 text-lg font-semibold">Business Heartbeat</h3>
                        <p className="text-white/50 text-sm">Cash In vs. Cash Out</p>
                    </div>
                    <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="timeline-select text-sm">
                        <option value="7d">Last 7 Days</option>
                        <option value="1m">1 Month</option>
                        <option value="3m">3 Months</option>
                        <option value="1y">1 Year</option>
                    </select>
                </div>
                <HeartbeatChart timeline={timeline} />
            </div>
             <div className="glass-pane p-6">
                <h3 className="text-white/90 text-lg font-semibold">Recent Activity</h3>
                <ul className="divide-y divide-white/10 mt-4">
                    <li className="py-3 flex justify-between items-center"><span className="text-white/80">Stripe Payout</span><span className="font-mono text-green-400">+$8,250.00</span></li>
                    <li className="py-3 flex justify-between items-center"><span className="text-white/80">AWS Bill</span><span className="font-mono text-red-400">-$1,530.50</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;