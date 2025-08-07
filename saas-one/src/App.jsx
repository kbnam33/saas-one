import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// ==================================
//      THEME TOGGLE HOOK
// ==================================
function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark';
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const root = window.document.documentElement;
        root.classList.add(savedTheme);
        return savedTheme;
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        const root = window.document.documentElement;
        root.classList.remove(theme);
        root.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return [theme, toggleTheme];
}

// ==================================
//      NEW, RELEVANT SVG VISUALS FOR 3-CARD SECTION
// ==================================
const AutomateVisual = () => (
    <div className="w-full h-full p-4 bg-background rounded-lg border border-border/20 flex items-center justify-center">
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Spreadsheet Grid */}
            <path d="M5 20H55M5 30H55M5 40H55M5 50H55M5 60H55M20 15V65M35 15V65M50 15V65" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.3" strokeWidth="1"/>
            {/* Animated Arrow */}
            <path d="M70 40H110" stroke="hsl(var(--primary))" strokeWidth="1.5" className="animate-draw" style={{animationDelay: '0.5s'}}/>
            <path d="M105 35L110 40L105 45" stroke="hsl(var(--primary))" strokeWidth="1.5" className="animate-draw" style={{animationDelay: '0.7s'}}/>
            {/* Clean UI Element */}
            <rect x="120" y="25" width="25" height="30" rx="4" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.5" strokeWidth="1"/>
        </svg>
    </div>
);
const ClarityVisual = () => (
     <div className="w-full h-full p-4 bg-background rounded-lg border border-border/20 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-2 h-full px-4">
            <div className="w-full h-[30%] rounded-t-sm bg-muted-foreground/30 animate-pulse" style={{animationDelay: '0.1s'}}></div>
            <div className="w-full h-[60%] rounded-t-sm bg-muted-foreground/50 animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-full h-[40%] rounded-t-sm bg-muted-foreground/40 animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-full h-[80%] rounded-t-sm bg-primary animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-full h-[50%] rounded-t-sm bg-muted-foreground/40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
    </div>
);
const FocusVisual = () => (
    <div className="w-full h-full p-4 bg-background rounded-lg border border-border/20 space-y-3">
        <div className="flex items-center justify-between p-2 rounded-md bg-card border border-border/20">
             <div className="w-1/2 h-2 rounded-sm bg-muted-foreground/30"></div>
             <div className="w-1/4 h-4 rounded-sm bg-primary"></div>
        </div>
         <div className="flex items-center justify-between p-2 rounded-md bg-card border border-border/20">
             <div className="w-1/2 h-2 rounded-sm bg-muted-foreground/30"></div>
             <div className="w-1/4 h-4 rounded-sm bg-primary"></div>
        </div>
    </div>
);

// ==================================
//      ANIMATED SCROLLING VISUALS
// ==================================
const RevenueVisual = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="revenueGradientNeutral" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M50 250 C 100 50, 150 200, 200 120 C 250 40, 300 150, 350 100" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" className={isActive ? "animate-draw" : ""} style={{ animationDelay: '0.1s' }}/>
      <path d="M50 250 C 100 50, 150 200, 200 120 C 250 40, 300 150, 350 100" fill="url(#revenueGradientNeutral)" />
       <g className={isActive ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: '1.2s' }}>
        <circle cx="200" cy="120" r="6" fill="hsl(var(--primary))" />
        <rect x="160" y="70" width="80" height="30" rx="8" fill="hsl(var(--card) / 0.8)" stroke="hsl(var(--border) / 0.5)"/>
        <text x="200" y="90" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">$12.4k</text>
      </g>
    </svg>
);
const CashflowVisual = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="300" height="200" rx="8" fill="hsl(var(--background) / 0.5)" />
      <text x="65" y="75" fill="hsl(var(--muted-foreground))" fontSize="14">Recent Transactions</text>
      <g className={isActive ? "animate-fade-in-up" : "opacity-0"} style={{animationDelay: '0.2s'}}>
        <text x="65" y="115" fill="hsl(var(--foreground))" fontSize="14">Stripe Payout</text>
        <text x="335" y="115" fill="hsl(var(--primary))" fontSize="14" textAnchor="end">+ $2,408.00</text>
      </g>
      <g className={isActive ? "animate-fade-in-up" : "opacity-0"} style={{animationDelay: '0.4s'}}>
        <text x="65" y="145" fill="hsl(var(--foreground))" fontSize="14">Vercel Inc.</text>
        <text x="335" y="145" fill="hsl(var(--foreground))" fontSize="14" textAnchor="end">- $20.00</text>
      </g>
       <g className={isActive ? "animate-fade-in-up" : "opacity-0"} style={{animationDelay: '0.6s'}}>
        <text x="65" y="175" fill="hsl(var(--foreground))" fontSize="14">Linear App</text>
        <text x="335" y="175" fill="hsl(var(--foreground))" fontSize="14" textAnchor="end">- $48.00</text>
      </g>
       <g className={isActive ? "animate-fade-in-up" : "opacity-0"} style={{animationDelay: '0.8s'}}>
        <text x="65" y="205" fill="hsl(var(--foreground))" fontSize="14">Stripe Payout</text>
        <text x="335" y="205" fill="hsl(var(--primary))" fontSize="14" textAnchor="end">+ $1,899.00</text>
      </g>
      <line x1="50" y1="220" x2="350" y2="220" stroke="hsl(var(--border)/0.3)" />
      <text x="65" y="240" fill="hsl(var(--muted-foreground))" fontSize="12">Connected to: Chase Bank **** 4092</text>
    </svg>
);
const ForecastingVisual = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 200 Q 120 180, 200 120" stroke="hsl(var(--muted-foreground))" strokeWidth="3" className={isActive ? "animate-draw" : ""} />
        <path d="M200 120 C 280 60, 320 80, 350 150" stroke="hsl(var(--muted-foreground))" strokeWidth="3" strokeDasharray="5 5" className={isActive ? "animate-draw" : ""} style={{ animationDelay: '1s' }} />
        <path d="M50 50 H 350" stroke="hsl(var(--border) / 0.1)" />
        <path d="M50 100 H 350" stroke="hsl(var(--border) / 0.1)" />
        <path d="M50 150 H 350" stroke="hsl(var(--border) / 0.1)" />
        <path d="M50 200 H 350" stroke="hsl(var(--border) / 0.2)" />
        <path d="M50 250 H 350" stroke="hsl(var(--border) / 0.1)" />
        <g className={isActive ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: '2s' }}>
            <rect x="250" y="40" width="120" height="35" rx="8" fill="hsl(var(--card) / 0.8)" stroke="hsl(var(--border) / 0.5)"/>
            <text x="260" y="62" fill="hsl(var(--muted-foreground))" fontSize="12">Forecast: <tspan fill="hsl(var(--primary))" fontWeight="bold">18 Months</tspan></text>
        </g>
    </svg>
);

const mainFeatures = [
    { visual: <AutomateVisual />, title: "Automate the Tedious", description: "Eliminate 'spreadsheet chaos' by connecting your financial accounts." },
    { visual: <ClarityVisual />, title: "Clarity in Real-Time", description: "Get a clear, real-time dashboard of your key financial metrics the moment you log in." },
    { visual: <FocusVisual />, title: "Focus on Building", description: "We empower you to focus on your product by making financial management effortless." }
];

const scrollFeatures = [
  { id: 'revenue', title: 'Real-Time Revenue Tracking', description: 'Forget static reports. Connect your Stripe account in seconds for a live view of your MRR and ARR.', visual: RevenueVisual },
  { id: 'cashflow', title: 'Automated Cash Flow', description: 'Link your bank accounts to see a clear, automated picture of your cash in, cash out, and net burn.', visual: CashflowVisual },
  { id: 'forecasting', title: 'Intelligent Runway Forecasting', description: 'Our tool analyzes your real-time data to give you an accurate, up-to-the-minute runway forecast.', visual: ForecastingVisual }
];

function App() {
    const [activeFeature, setActiveFeature] = useState(null); 
    const [isFeatureSectionVisible, setIsFeatureSectionVisible] = useState(false);
    const [theme, toggleTheme] = useTheme();
    const featureSectionRef = useRef(null);
    const featureStickyContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsFeatureSectionVisible(true);
                    if (!activeFeature) {
                        setActiveFeature(scrollFeatures[0].id);
                    }
                }
            },
            { rootMargin: "0px 0px -40% 0px" }
        );
        if (featureStickyContainerRef.current) {
            observer.observe(featureStickyContainerRef.current);
        }
        return () => {
            if (featureStickyContainerRef.current) {
                observer.unobserve(featureStickyContainerRef.current);
            }
        };
    }, [activeFeature]);

    useEffect(() => {
        const handleScroll = () => {
            if (!featureSectionRef.current) return;
            const { top, height } = featureSectionRef.current.getBoundingClientRect();
            const scrollableHeight = height - window.innerHeight;
            if (top > 0 || top < -scrollableHeight) return;
            const progress = -top / scrollableHeight;
            const featureIndex = Math.min(scrollFeatures.length - 1, Math.floor(progress * scrollFeatures.length));
            setActiveFeature(scrollFeatures[featureIndex].id);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4">
                <header className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold">Fathom.</h1>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
                        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="secondary">Login</Button>
                        <Button variant="primary">Get Started Free</Button>
                    </div>
                </header>

                <main>
                    <section id="hero" className="grid lg:grid-cols-2 gap-12 items-center mt-20 md:mt-28 min-h-[60vh]">
                        <div className="text-left">
                           <div className="inline-block bg-primary/10 text-primary-foreground border border-primary/20 rounded-full px-4 py-1 mb-6">
                                Built for Founders, by Founders
                            </div>
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Finance for Founders Who'd Rather Be Building.</h2>
                            <p className="mt-6 text-lg md:text-xl text-muted-foreground">Stop wrestling with spreadsheets. Fathom automates your financial reporting so you can get back to building.</p>
                            <div className="mt-8 flex items-center gap-4">
                                <Button size="lg" variant="primary">Sign Up for Free</Button>
                                <Button size="lg" variant="secondary">Get a demo</Button>
                            </div>
                        </div>
                         <div className="hidden lg:block relative h-full w-full">
                           <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_90%)]"></div>
                             <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(100%_100%_at_50%_50%,_black_50%,_transparent_100%)]">
                               <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border) / 0.5)" strokeWidth="0.5"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                               </svg>
                            </div>
                        </div>
                    </section>
          
                    <section id="social-proof" className="mt-32 md:mt-48">
                        <div className="text-center">
                            <h3 className="text-sm text-muted-foreground tracking-widest uppercase">Trusted by the next generation of builders</h3>
                            <div className="mt-8 flex justify-center items-center gap-x-8 md:gap-x-12 opacity-50">
                                <div className="w-28 h-12 flex items-center justify-center text-2xl font-mono">Logoipsum</div>
                                <div className="w-28 h-12 flex items-center justify-center text-2xl font-mono">Synergy</div>
                                <div className="w-28 h-12 hidden sm:flex items-center justify-center text-2xl font-mono">Innovate</div>
                                <div className="w-28 h-12 hidden md:flex items-center justify-center text-2xl font-mono">Quantum</div>
                            </div>
                        </div>
                    </section>

                    <section id="main-features" className="mt-32 md:mt-48 relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {mainFeatures.map((feature, index) => (
                                <Card key={index} className="flex flex-col glass-pane p-6">
                                    <div className="h-48 w-full mb-4">{feature.visual}</div>
                                    <CardHeader className="p-0">
                                       <CardTitle>{feature.title}</CardTitle>
                                       <CardDescription className="pt-2">{feature.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>
                    
                    <section ref={featureSectionRef} id="features" className="mt-32 md:mt-48 relative h-[300vh]">
                         <div ref={featureStickyContainerRef} className="sticky top-0 h-screen w-full flex flex-col items-start justify-center">
                            <div className="w-full grid lg:grid-cols-2 gap-24 items-center">
                               <div className="flex flex-col">
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-left mb-12">
                                        Everything you need. <br/> Nothing you don't.
                                    </h2>
                                    <div className="space-y-12">
                                        {scrollFeatures.map((feature, index) => (
                                            <React.Fragment key={feature.id}>
                                                <div data-feature={feature.id} className="transition-opacity duration-300"
                                                    style={{ opacity: activeFeature === feature.id ? 1 : 0.4 }}
                                                >
                                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                                    <p className="mt-2 text-lg text-muted-foreground">{feature.description}</p>
                                                </div>
                                                {index < scrollFeatures.length - 1 && <hr className="border-border/20" />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden lg:block relative h-[550px]">
                                     <div className="feature-visual-panel h-full w-full">
                                         <div className="relative z-10 p-8 w-full h-full">
                                            {scrollFeatures.map(feature => {
                                                const VisualComponent = feature.visual;
                                                return (
                                                    <div key={feature.id} className="absolute inset-0 p-8 transition-opacity duration-500" style={{opacity: activeFeature === feature.id ? 1 : 0}}>
                                                        <VisualComponent isActive={isFeatureSectionVisible && activeFeature === feature.id} />
                                                    </div>
                                                )
                                            })}
                                         </div>
                                     </div>
                                </div>
                            </div>
                         </div>
                    </section>

                    <section id="pricing" className="mt-32 md:mt-48">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple, transparent pricing</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Choose the plan that's right for your stage.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="flex flex-col glass-pane">
                                <CardHeader>
                                    <CardTitle>Hobby</CardTitle>
                                    <CardDescription>For founders just getting started.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="mt-6">
                                        <span className="text-5xl font-bold">$0</span>
                                        <span className="text-muted-foreground"> / mo</span>
                                    </div>
                                    <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Revenue Tracking</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Basic Cash Flow</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> 1 Bank Connection</li>
                                    </ul>
                                    <Button variant="secondary" className="mt-8 w-full">Get Started</Button>
                                </CardContent>
                            </Card>

                            <Card className="flex flex-col ring-2 ring-primary/50 glass-pane bg-card/60">
                                <CardHeader>
                                    <CardTitle>Pro</CardTitle>
                                    <CardDescription>For growing businesses ready to scale.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="mt-6">
                                        <span className="text-5xl font-bold">$49</span>
                                        <span className="text-muted-foreground"> / mo</span>
                                    </div>
                                    <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Everything in Hobby</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Runway Forecasting</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Unlimited Connections</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Priority Support</li>
                                    </ul>
                                    <Button variant="primary" className="mt-8 w-full">Choose Pro</Button>
                                </CardContent>
                            </Card>

                            <Card className="flex flex-col glass-pane">
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>For established teams with custom needs.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="mt-6">
                                        <span className="text-5xl font-bold">Custom</span>
                                    </div>
                                    <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Everything in Pro</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Dedicated Account Manager</li>
                                        <li className="flex items-center gap-x-3"><span className="text-primary">✔</span> Custom Integrations</li>
                                    </ul>
                                    <Button variant="secondary" className="mt-8 w-full">Contact Sales</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="cta" className="mt-32 md:mt-48 text-center">
                        <div className="glass-pane relative p-12 rounded-2xl overflow-hidden">
                            <div className="absolute -inset-20 bg-primary/20 blur-3xl -z-10"></div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to take control?</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">Stop guessing, start growing. Get a clear view of your startup's finances in minutes.</p>
                            <div className="mt-8">
                                <Button size="lg" variant="primary">Sign Up for Free</Button>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="mt-24 py-8 border-t border-white/10">
                    <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">&copy; 2025 Fathom. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                <svg className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                <svg className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
