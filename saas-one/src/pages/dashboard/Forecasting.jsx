import React, { useState, useEffect } from 'react';

const Forecasting = () => {
    const [growth, setGrowth] = useState(2);
    const [costs, setCosts] = useState(0);
    const [timeline, setTimeline] = useState(24);
    const [forecastPath, setForecastPath] = useState('M0 200');

    useEffect(() => {
        const maxMonths = timeline;
        let balance = 142302;
        const monthlyBurn = 15120;
        let monthlyRevenue = 12400;

        const points = [{ x: 0, y: balance }];
        let months = 0;
        let ranOut = false;
        while (months < maxMonths) {
            months++;
            if (!ranOut) {
                monthlyRevenue *= (1 + growth / 100);
                balance += monthlyRevenue - (monthlyBurn + costs);
            }
            if (balance <= 0 && !ranOut) {
                ranOut = true;
                balance = 0;
            }
            points.push({ x: months, y: balance });
        }

        const maxY = Math.max(...points.map(p => p.y)) * 1.1 || 100000;
        const pathData = points.map((p, i) => {
            const x = (p.x / maxMonths) * 500;
            const y = 200 - (p.y / maxY) * 200;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');

        setForecastPath(pathData);
    }, [growth, costs, timeline]);

    return (
        <div className="space-y-8">
            <div className="glass-pane card-darker p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-white/90 text-lg font-semibold">Runway Forecast</h3>
                        <p className="text-white/50 text-sm mb-4">Model your financial future.</p>
                    </div>
                    <select value={timeline} onChange={e => setTimeline(Number(e.target.value))} className="timeline-select text-sm">
                        <option value="12">1 Year</option>
                        <option value="24">2 Years</option>
                        <option value="36">3 Years</option>
                        <option value="60">5 Years</option>
                    </select>
                </div>
                <div className="w-full h-80 mt-4">
                    <svg width="100%" height="100%" viewBox="0 0 500 200">
                        <line x1="0" y1="200" x2="500" y2="200" stroke="hsl(var(--destructive))" strokeWidth="1" strokeDasharray="2 2" />
                        <path d={forecastPath} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-line-draw" />
                    </svg>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <div>
                        <label htmlFor="growth-slider" className="text-sm text-white/70">Monthly Revenue Growth</label>
                        <div className="flex items-center gap-2">
                            <input type="range" id="growth-slider" min="-10" max="20" value={growth} onChange={e => setGrowth(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
                            <span className="font-mono text-primary w-12 text-right">{growth}%</span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="costs-slider" className="text-sm text-white/70">New Monthly Costs</label>
                        <div className="flex items-center gap-2">
                            <input type="range" id="costs-slider" min="0" max="5000" value={costs} step="100" onChange={e => setCosts(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
                            <span className="font-mono text-primary w-20 text-right">${costs.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecasting;