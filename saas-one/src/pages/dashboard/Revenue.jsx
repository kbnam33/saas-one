import React from 'react';

const Revenue = () => {
    return (
        <div className="space-y-8">
            <div className="glass-pane card-darker p-6">
                <h3 className="text-white/90 text-lg font-semibold">MRR Movement</h3>
                <p className="text-white/50 text-sm mb-4">How your Monthly Recurring Revenue changed this month.</p>
                <div className="w-full h-96">
                    <svg width="100%" height="100%" viewBox="0 0 500 300">
                        <line x1="20" y1="250" x2="480" y2="250" stroke="hsl(0 0% 20%)" strokeWidth="2" />
                        <g className="animate-bar-rise" style={{animationDelay: '0.1s'}}>
                            <rect x="50" y="150" width="60" height="100" fill="hsl(0 0% 80% / 0.5)"></rect>
                            <text x="80" y="270" textAnchor="middle" fill="hsl(0 0% 80%)" fontSize="12">Start MRR</text>
                        </g>
                        <path d="M110 150 H 140" stroke="hsl(0 0% 40%)" strokeWidth="1" strokeDasharray="3 3"></path>
                        <g className="animate-bar-rise" style={{animationDelay: '0.3s'}}>
                            <rect x="140" y="100" width="60" height="50" fill="hsl(var(--primary) / 0.7)"></rect>
                            <text x="170" y="95" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">New (+$1.5k)</text>
                        </g>
                        <path d="M200 100 H 230" stroke="hsl(0 0% 40%)" strokeWidth="1" strokeDasharray="3 3"></path>
                        <g className="animate-bar-rise" style={{animationDelay: '0.5s'}}>
                            <rect x="230" y="80" width="60" height="20" fill="hsl(var(--primary) / 0.7)"></rect>
                            <text x="260" y="75" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">Expansion (+$0.5k)</text>
                        </g>
                        <path d="M290 80 H 320" stroke="hsl(0 0% 40%)" strokeWidth="1" strokeDasharray="3 3"></path>
                        <g className="animate-bar-rise" style={{animationDelay: '0.7s'}}>
                            <rect x="320" y="110" width="60" height="30" fill="hsl(var(--destructive) / 0.7)"></rect>
                            <text x="350" y="105" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="12">Churn (-$0.3k)</text>
                        </g>
                        <path d="M380 110 H 410" stroke="hsl(0 0% 40%)" strokeWidth="1" strokeDasharray="3 3"></path>
                        <g className="animate-bar-rise" style={{animationDelay: '0.9s'}}>
                            <rect x="410" y="110" width="60" height="140" fill="hsl(0 0% 80% / 0.5)"></rect>
                            <text x="440" y="270" textAnchor="middle" fill="hsl(0 0% 80%)" fontSize="12">End MRR</text>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="glass-pane p-6">
                <h3 className="text-white/90 text-lg font-semibold">Subscribers</h3>
                <p className="text-white/50 text-sm mb-4">Live data from your Stripe account.</p>
                <ul className="divide-y divide-white/10">
                    <li className="py-3 grid grid-cols-3 items-center"><span className="text-white/80">Acme Inc.</span><span className="text-white/60">Pro Plan</span><span className="font-mono text-white/90 text-right">$99/mo</span></li>
                    <li className="py-3 grid grid-cols-3 items-center"><span className="text-white/80">Beta Tester LLC</span><span className="text-white/60">Pro Plan</span><span className="font-mono text-white/90 text-right">$99/mo</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Revenue;