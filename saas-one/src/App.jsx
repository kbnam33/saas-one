import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// ==================================
//      THEME TOGGLE COMPONENT
// ==================================
function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

// ==================================
//      SVG VISUAL COMPONENTS (STICKY SCROLL)
// ==================================

const RevenueVisual = ({ is_active }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" aria-labelledby="revenue-title" role="img">
        <title id="revenue-title">Illustration of a real-time revenue chart</title>
        <defs>
            <linearGradient id="revenueGradientNew" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--foreground))', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--foreground))', stopOpacity: 0 }} />
            </linearGradient>
        </defs>
        <path d="M50,250 C 150,150 200,180 250,130 S 350,80 350,80" fill="url(#revenueGradientNew)" className={is_active ? 'animate-area-fill' : ''} />
        <path d="M50,250 C 150,150 200,180 250,130 S 350,80 350,80" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" className={is_active ? 'animate-line-draw' : ''} />
        <g className={is_active ? 'animate-point-move' : 'opacity-0'}>
            <circle cx="250" cy="130" r="5" fill="hsl(var(--primary))" />
            <g transform="translate(215, 80)">
                <rect width="70" height="30" rx="8" fill="hsl(var(--card-foreground))" />
                <text x="35" y="20" textAnchor="middle" fill="hsl(var(--card))" className="font-semibold text-sm">$12.4k</text>
                <path d="M35,30 L35,38" stroke="hsl(var(--card-foreground))" strokeWidth="2" />
            </g>
        </g>
    </svg>
);

const CashflowVisual = ({ is_active }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" aria-labelledby="cashflow-title" role="img">
        <title id="cashflow-title">Illustration of automated cash flow from multiple sources</title>
        <g className={is_active ? 'animate-text-fade-in' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
            <rect x="60" y="80" width="80" height="40" rx="8" fill="hsl(var(--muted) / 0.3)" />
            <text x="100" y="105" textAnchor="middle" fill="hsl(var(--muted-foreground))" className="font-bold text-sm">stripe</text>
        </g>
        <g className={is_active ? 'animate-text-fade-in' : 'opacity-0'} style={{ animationDelay: '0.4s' }}>
            <rect x="60" y="180" width="80" height="40" rx="8" fill="hsl(var(--muted) / 0.3)" />
            <text x="100" y="205" textAnchor="middle" fill="hsl(var(--muted-foreground))" className="font-bold text-sm">Bank</text>
        </g>
        <g transform="translate(240, 130)" className={is_active ? 'animate-point-fade-in' : 'opacity-0'}>
            <rect width="120" height="40" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
            <circle cx="20" cy="20" r="4" fill="hsl(var(--primary))" />
            <text x="40" y="25" fill="hsl(var(--foreground))" className="text-sm font-semibold">Dashboard</text>
        </g>
        <path d="M140,100 C 180,100 200,150 240,150" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="3 3" className={is_active ? 'animate-line-draw' : ''} style={{ animationDelay: '0.6s' }}/>
        <path d="M140,200 C 180,200 200,150 240,150" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="3 3" className={is_active ? 'animate-line-draw' : ''} style={{ animationDelay: '0.8s' }}/>
    </svg>
);

const ForecastingVisual = ({ is_active }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" aria-labelledby="forecasting-title" role="img">
        <title id="forecasting-title">Illustration of an intelligent runway forecast chart</title>
        <path d="M50 250 H 350 M 80 50 V 250" fill="none" stroke="hsl(var(--border))" strokeOpacity="0.5" />
        <text x="65" y="60" textAnchor="end" fill="hsl(var(--muted-foreground))" className="text-xs">$</text>
        <text x="345" y="265" textAnchor="end" fill="hsl(var(--muted-foreground))" className="text-xs">Time</text>
        <path d="M80,80 C 120,100 160,140 200,150" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" className={is_active ? 'animate-line-draw' : ''} />
        <path d="M200,150 C 240,160 280,200 320,240" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 4" className={is_active ? 'animate-forecast-draw' : ''} />
        <circle cx="200" cy="150" r="4" fill="hsl(var(--primary))" className={is_active ? 'animate-point-fade-in' : ''} />
        <g className={is_active ? 'animate-text-fade-in' : 'opacity-0'} style={{ animationDelay: '1.8s' }}>
            <line x1="320" y1="240" x2="320" y2="270" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
            <text x="320" y="285" textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-xs font-semibold">Runway End</text>
        </g>
    </svg>
);

const features = [
  { id: 'revenue', title: 'Real-Time Revenue Tracking', description: "Forget static reports. Connect your Stripe account in seconds for a live view of your MRR and ARR.", visual: <RevenueVisual /> },
  { id: 'cashflow', title: 'Automated Cash Flow', description: 'Link your bank accounts to see a clear, automated picture of your cash in, cash out, and net burn.', visual: <CashflowVisual /> },
  { id: 'forecasting', title: 'Intelligent Runway Forecasting', description: 'Our tool analyzes your real-time data to give you an accurate, up-to-the-minute runway forecast.', visual: <ForecastingVisual /> }
];

// ==================================
//      SVG VISUAL COMPONENTS (FEATURE CARDS - NEW)
// ==================================
const AutomateFeatureCardVisual = () => (
    <svg viewBox="0 0 300 200" className="w-full h-full" aria-labelledby="automate-card-title" role="img">
        <title id="automate-card-title">Automate the Tedious</title>
        <g opacity="0.9">
            <rect x="40" y="50" width="220" height="120" rx="8" fill="hsl(var(--muted) / 0.1)" stroke="hsl(var(--border))" />
            <rect x="55" y="65" width="50" height="10" rx="2" fill="hsl(var(--muted) / 0.3)" />
            <rect x="55" y="85" width="190" height="40" rx="4" fill="hsl(var(--muted) / 0.2)" />
            <rect x="55" y="135" width="150" height="20" rx="3" fill="hsl(var(--muted) / 0.3)" />
            <circle cx="230" cy="145" r="10" fill="hsl(var(--primary) / 0.2)" />
            <path d="M227 145 l3 3 l5 -5" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        </g>
    </svg>
);

const ClarityFeatureCardVisual = () => (
    <svg viewBox="0 0 300 200" className="w-full h-full" aria-labelledby="clarity-card-title" role="img">
        <title id="clarity-card-title">Clarity in Real-Time</title>
        <g opacity="0.9">
            <rect x="40" y="50" width="220" height="120" rx="8" fill="hsl(var(--muted) / 0.1)" stroke="hsl(var(--border))" />
            <path d="M60 150 C 90 110, 120 130, 150 110 S 210 80, 240 90" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
            <circle cx="240" cy="90" r="4" fill="hsl(var(--primary))" />
            <rect x="55" y="65" width="80" height="25" rx="4" fill="hsl(var(--muted) / 0.3)" />
            <rect x="145" y="65" width="50" height="10" rx="2" fill="hsl(var(--muted) / 0.2)" />
        </g>
    </svg>
);

const FocusFeatureCardVisual = () => (
    <svg viewBox="0 0 300 200" className="w-full h-full" aria-labelledby="focus-card-title" role="img">
        <title id="focus-card-title">Focus on Building</title>
        <g opacity="0.9">
            <rect x="40" y="50" width="80" height="120" rx="8" fill="hsl(var(--muted) / 0.1)" stroke="hsl(var(--border))" />
            <rect x="50" y="65" width="60" height="10" rx="2" fill="hsl(var(--muted) / 0.3)" />
            <rect x="50" y="85" width="60" height="10" rx="2" fill="hsl(var(--muted) / 0.3)" />
            <rect x="50" y="105" width="60" height="10" rx="2" fill="hsl(var(--muted) / 0.3)" />

            <rect x="130" y="50" width="130" height="120" rx="8" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary))" />
            <text x="195" y="110" textAnchor="middle" fill="hsl(var(--primary))" className="text-lg font-bold">Product</text>
        </g>
    </svg>
);

// ==================================
//      MAIN APP COMPONENT
// ==================================

function App() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSectionRef = useRef(null);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
        const element = featureSectionRef.current;
        if (!element) return;
        const { top, height } = element.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;
        if (top <= 0 && top > -scrollableHeight) {
            const progress = Math.abs(top) / (scrollableHeight / (features.length -1));
            let newIndex = Math.round(progress);
            if (newIndex !== activeFeatureIndex) {
              setActiveFeatureIndex(newIndex);
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeFeatureIndex]);

  return (
    <div className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">[Your Logo]</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button className="btn-custom-primary">Sign Up Now</Button>
          </div>
        </header>

        <main className="mt-16 md:mt-24">
          <section id="hero" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Button variant="outline" className="mb-6">Built for Founders, by Founders</Button>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Finance for Founders Who'd Rather Be Building.</h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">Stop wrestling with spreadsheets. We automate your financial reporting so you can focus on your product.</p>
              <div className="mt-8">
                <Button size="lg" className="btn-custom-primary">Get Started for Free</Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Card className="glass-pane relative h-[450px]">
                <CardContent className="p-4 h-full">
                  <div className="w-full h-full bg-muted/50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Product Mockup</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section id="social-proof" className="mt-32 md:mt-48">
            <div className="text-center">
              <h3 className="text-lg text-muted-foreground">Trusted by the best teams in the world</h3>
              <div className="mt-8 flex justify-center items-center gap-x-8 md:gap-x-12 opacity-70">
                <div className="w-28 h-12 flex items-center justify-center text-2xl font-bold">Logoipsum</div>
                <div className="w-28 h-12 flex items-center justify-center text-2xl font-bold">Synergy</div>
                <div className="w-28 h-12 hidden sm:flex items-center justify-center text-2xl font-bold">Innovate</div>
                <div className="w-28 h-12 hidden md:flex items-center justify-center text-2xl font-bold">Quantum</div>
              </div>
            </div>
          </section>

          <section id="three-features" className="mt-32 md:mt-48">
              <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Built for Modern Founders</h2>
                  <p className="mt-4 text-lg text-muted-foreground">Crafted with the speed and intuition you need to succeed.</p>
              </div>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="feature-card">
                      <CardContent className="p-8 h-full flex flex-col items-start text-left">
                          <div className="h-48 w-full flex-grow flex items-center justify-center">
                              <AutomateFeatureCardVisual />
                          </div>
                          <h3 className="mt-6 text-xl font-bold">Automate the Tedious</h3>
                          <p className="mt-2 text-muted-foreground">Connect your financial accounts in seconds, not hours.</p>
                      </CardContent>
                  </Card>
                  <Card className="feature-card">
                      <CardContent className="p-8 h-full flex flex-col items-start text-left">
                          <div className="h-48 w-full flex-grow flex items-center justify-center">
                              <ClarityFeatureCardVisual />
                          </div>
                          <h3 className="mt-6 text-xl font-bold">Clarity in Real-Time</h3>
                          <p className="mt-2 text-muted-foreground">Get a clear dashboard of your key metrics, anytime.</p>
                      </CardContent>
                  </Card>
                  <Card className="feature-card">
                      <CardContent className="p-8 h-full flex flex-col items-start text-left">
                          <div className="h-48 w-full flex-grow flex items-center justify-center">
                              <FocusFeatureCardVisual />
                          </div>
                          <h3 className="mt-6 text-xl font-bold">Focus on Building</h3>
                          <p className="mt-2 text-muted-foreground">Make financial management effortless and get back to your product.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>

          <section ref={featureSectionRef} id="features" className="relative h-[300vh] mt-32 md:mt-48">
              <div className="sticky top-0 flex h-screen items-center">
                  <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto w-full">
                      <div className="text-left">
                          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Everything you need. <br /> Nothing you don't.</h2>
                          <div className="flex flex-col gap-4">
                              {features.map((feature, index) => (
                                <React.Fragment key={feature.id}>
                                  <div className={`transition-opacity duration-300 ${activeFeatureIndex === index ? 'opacity-100' : 'opacity-50'}`}>
                                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                                      <p className="mt-2 text-lg text-muted-foreground">{feature.description}</p>
                                  </div>
                                  {index < features.length - 1 && (
                                    <hr className="border-border/20 my-4" />
                                  )}
                                </React.Fragment>
                              ))}
                          </div>
                      </div>
                      <div className="relative h-[550px] w-full">
                           <Card className="glass-pane absolute inset-0">
                               <CardContent className="p-0 h-full w-full">
                                  {features.map((feature, index) => (
                                      <div key={`${feature.id}-visual`} className={`absolute inset-0 p-8 transition-opacity duration-300 ${activeFeatureIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                          {React.cloneElement(feature.visual, { is_active: activeFeatureIndex === index })}
                                      </div>
                                  ))}
                               </CardContent>
                           </Card>
                      </div>
                  </div>
              </div>
          </section>

          <section id="pricing" className="mt-32 md:mt-48">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple, transparent pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground">Choose the plan that's right for your stage.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
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
                  <Button variant="outline" className="mt-8 w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col border-primary ring-2 ring-primary">
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
                  <Button className="mt-8 w-full btn-custom-primary">Choose Pro</Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
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
                  <Button variant="outline" className="mt-8 w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="cta" className="mt-32 md:mt-48 text-center">
            <Card className="glass-pane relative p-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to take control?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">Stop guessing, start growing. Get a clear view of your startup's finances in minutes.</p>
              <div className="mt-8">
                <Button size="lg" className="btn-custom-primary">Sign Up for Free</Button>
              </div>
            </Card>
          </section>
        </main>

        <footer className="mt-24 py-8 border-t">
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">&copy; 2025 [Your Brand Name]. All rights reserved.</p>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
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
