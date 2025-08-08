import React from 'react';

const SpendingBreakdownChart = () => {
    const data = [
        { label: 'Payroll', value: 45, color: 'hsl(var(--primary))' },
        { label: 'Marketing', value: 25, color: 'hsl(var(--warning))' },
        { label: 'Software', value: 20, color: 'hsl(var(--destructive))' },
        { label: 'Other', value: 10, color: 'hsl(0 0% 50%)' },
    ];

    let accumulated = 0;
    const segments = data.map(item => {
        const startAngle = (accumulated / 100) * 360;
        accumulated += item.value;
        const endAngle = (accumulated / 100) * 360;
        const largeArcFlag = item.value > 50 ? 1 : 0;

        const startX = 50 + 40 * Math.cos(Math.PI * startAngle / 180);
        const startY = 50 + 40 * Math.sin(Math.PI * startAngle / 180);
        const endX = 50 + 40 * Math.cos(Math.PI * endAngle / 180);
        const endY = 50 + 40 * Math.sin(Math.PI * endAngle / 180);

        return `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
    });

    return (
        <div className="w-full h-96 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-48 h-48">
                {segments.map((d, i) => (
                    <path key={i} d={d} fill={data[i].color} />
                ))}
                <circle cx="50" cy="50" r="25" fill="hsl(var(--background))" />
            </svg>
            <div className="ml-8 space-y-2">
                {data.map(item => (
                    <div key={item.label} className="flex items-center">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        <span className="text-white/70">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Cashflow = () => {
    return (
        <div className="space-y-8">
            <div className="glass-pane card-darker p-6">
                <h3 className="text-white/90 text-lg font-semibold">Spending Breakdown</h3>
                <p className="text-white/50 text-sm mb-4">A visual overview of your monthly expenses.</p>
                <SpendingBreakdownChart />
            </div>
            <div className="glass-pane card-darker p-6">
                <h3 className="text-white/90 text-lg font-semibold">Transactions</h3>
                <p className="text-white/50 text-sm mb-4">All transactions from your connected accounts.</p>
                <ul className="divide-y divide-white/10">
                    <li className="py-3 grid grid-cols-4 items-center gap-4"><span className="text-white/80 col-span-2">Stripe Payout</span><span className="font-mono text-green-400 text-right">+$8,250.00</span><button className="text-white/50 hover:text-white justify-self-end">Categorize</button></li>
                    <li className="py-3 grid grid-cols-4 items-center gap-4"><span className="text-white/80 col-span-2">AWS Bill</span><span className="font-mono text-red-400 text-right">-$1,530.50</span><button className="text-white/50 hover:text-white justify-self-end">Categorize</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Cashflow;