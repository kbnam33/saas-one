import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import DashboardApp from '@/pages/dashboard/Index';
import LightBeam from '@/components/LightBeam'; // Import the new SVG component

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
        <title id="cashflow-title">Illustration of an animated list of cash flow items</title>
        <rect x="50" y="40" width="300" height="220" rx="12" fill="#0F0F0F" />

        {/* Animated List Items */}
        <g className={is_active ? 'animate-list-item' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
            <circle cx="75" cy="82" r="3" fill="#4ADE75" />
            <text x="90" y="85" fill="hsl(var(--foreground))" className="text-sm font-sans">MRR</text>
            <text x="330" y="85" fill="#4ADE75" textAnchor="end" className="text-sm font-mono">+ $12,400</text>
        </g>
        <g className={is_active ? 'animate-list-item' : 'opacity-0'} style={{ animationDelay: '0.4s' }}>
            <circle cx="75" cy="112" r="3" fill="#4ADE75" />
            <text x="90" y="115" fill="hsl(var(--foreground))" className="text-sm font-sans">New Sale</text>
            <text x="330" y="115" fill="#4ADE75" textAnchor="end" className="text-sm font-mono">+ $2,000</text>
        </g>
        <g className={is_active ? 'animate-list-item' : 'opacity-0'} style={{ animationDelay: '0.6s' }}>
            <circle cx="75" cy="142" r="3" fill="#F87171" />
            <text x="90" y="145" fill="hsl(var(--foreground))" className="text-sm font-sans">Cloud Hosting</text>
            <text x="330" y="145" fill="#F87171" textAnchor="end" className="text-sm font-mono">- $800</text>
        </g>
        <g className={is_active ? 'animate-list-item' : 'opacity-0'} style={{ animationDelay: '0.8s' }}>
            <circle cx="75" cy="172" r="3" fill="#F87171" />
            <text x="90" y="175" fill="hsl(var(--foreground))" className="text-sm font-sans">Payroll</text>
            <text x="330" y="175" fill="#F87171" textAnchor="end" className="text-sm font-mono">- $6,500</text>
        </g>

        {/* Divider and Net */}
        <line x1="70" y1="200" x2="330" y2="200" stroke="hsl(var(--border))" strokeOpacity="0.2" className={is_active ? 'animate-line-fade-in' : 'opacity-0'} style={{ animationDelay: '1s' }} />
        <g className={is_active ? 'animate-list-item' : 'opacity-0'} style={{ animationDelay: '1.2s' }}>
            <text x="90" y="230" fill="hsl(var(--muted-foreground))" className="text-sm font-semibold font-sans">Net Cash Flow</text>
            <text x="330" y="230" fill="hsl(var(--foreground))" textAnchor="end" className="text-sm font-semibold font-mono">+ $7,100</text>
        </g>
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
//      SVG VISUAL COMPONENTS (FEATURE CARDS)
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
//      NEW CTA ICON
// ==================================
const CompassIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" />
  </svg>
);


// ==================================
//      MAIN APP COMPONENT
// ==================================

function App() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSectionRef = useRef(null);
  const [benefitOneVisible, setBenefitOneVisible] = useState(false);
  const [benefitTwoVisible, setBenefitTwoVisible] = useState(false);
  const benefitOneRef = useRef(null);
  const benefitTwoRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect for checking screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Effect for intersection observers
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observerCallback = (entries, setter) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setter(true);
      });
    };
    const observer1 = new IntersectionObserver(entries => observerCallback(entries, setBenefitOneVisible), observerOptions);
    const observer2 = new IntersectionObserver(entries => observerCallback(entries, setBenefitTwoVisible), observerOptions);
    if (benefitOneRef.current) observer1.observe(benefitOneRef.current);
    if (benefitTwoRef.current) observer2.observe(benefitTwoRef.current);
    return () => {
      if (benefitOneRef.current) observer1.unobserve(benefitOneRef.current);
      if (benefitTwoRef.current) observer2.unobserve(benefitTwoRef.current);
    };
  }, []);

  // Effect for sticky scroll feature section
  useEffect(() => {
    const isLg = window.matchMedia('(min-width: 1024px)').matches;
    if (!isLg) return;
    const handleScroll = () => {
        const element = featureSectionRef.current;
        if (!element) return;
        const { top, height } = element.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;
        if (top <= 0 && top > -scrollableHeight) {
            const progress = Math.abs(top) / (scrollableHeight / (features.length));
            let newIndex = Math.floor(progress);
            newIndex = Math.min(newIndex, features.length - 1);
            if (newIndex !== activeFeatureIndex) {
              setActiveFeatureIndex(newIndex);
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeFeatureIndex]);

  return (
    <div className="bg-background text-foreground relative min-h-screen">
      <LightBeam />
      <div className="background-grid"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">Arc</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="sm" className="px-2 sm:px-4">Login</Button>
            <Button variant="primary" size="sm" className="px-3 sm:px-6">Sign Up</Button>
          </div>
        </header>

        <main className="mt-16 md:mt-24">
          <section id="hero" className="relative text-center lg:text-left pt-16 pb-24 sm:pt-24 sm:pb-32">
            <div className="max-w-3xl mx-auto lg:mx-0 relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">Finance for Founders Who'd Rather Be Building.</h2>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground">Swap spreadsheet chaos for automated clarity. See your real-time revenue, cash flow, and runway in one place.</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Button size="lg" variant="primary">Get Started for Free</Button>
                </div>
            </div>
            <div className="mt-16 w-full relative z-10">
                <Card className="relative overflow-hidden w-full bg-transparent border border-border/10 rounded-2xl shadow-inner shadow-white/5">
                    {/* The dashboard-edge-glow div has been removed as the SVG handles the entire effect */}
                    {isSmallScreen ? (
                      <img src="/Dashboard.png" alt="Dashboard Preview" className="w-full h-auto rounded-2xl" />
                    ) : (
                      <DashboardApp />
                    )}
                </Card>
            </div>
          </section>
          
          <section id="social-proof" className="mt-24 md:mt-32">
            <div className="text-center">
              <h3 className="text-lg text-muted-foreground">Trusted by the best teams in the world</h3>
              <div className="mt-8 flex justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-12 opacity-70 flex-wrap">
                <div className="w-28 h-12 flex items-center justify-center text-2xl font-bold">Logoipsum</div>
                <div className="w-28 h-12 flex items-center justify-center text-2xl font-bold">Synergy</div>
                <div className="w-28 h-12 flex items-center justify-center text-2xl font-bold">Innovate</div>
                <div className="w-28 h-12 hidden sm:flex items-center justify-center text-2xl font-bold">Quantum</div>
                <div className="w-28 h-12 hidden lg:flex items-center justify-center text-2xl font-bold">Apex</div>
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
                      <CardContent className="p-6 sm:p-8 h-full flex flex-col items-start text-left">
                          <div className="h-40 sm:h-48 w-full flex-grow flex items-center justify-center">
                              <AutomateFeatureCardVisual />
                          </div>
                          <h3 className="mt-6 text-xl font-bold">Automate the Tedious</h3>
                          <p className="mt-2 text-muted-foreground">Connect your financial accounts in seconds, not hours.</p>
                      </CardContent>
                  </Card>
                  <Card className="feature-card">
                      <CardContent className="p-6 sm:p-8 h-full flex flex-col items-start text-left">
                          <div className="h-40 sm:h-48 w-full flex-grow flex items-center justify-center">
                              <ClarityFeatureCardVisual />
                          </div>
                          <h3 className="mt-6 text-xl font-bold">Clarity in Real-Time</h3>
                          <p className="mt-2 text-muted-foreground">Get a clear dashboard of your key metrics, anytime.</p>
                      </CardContent>
                  </Card>
                  <Card className="feature-card">
                      <CardContent className="p-6 sm:p-8 h-full flex flex-col items-start text-left">
                          <div className="h-40 sm:h-48 w-full flex-grow flex items-center justify-center">
                              <FocusFeatureCardVisual />
                          </div>
                          <h3 className="mt-6 text-xl font-bold">Focus on Building</h3>
                          <p className="mt-2 text-muted-foreground">Make financial management effortless and get back to your product.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>

          <section ref={featureSectionRef} id="features" className="relative h-auto lg:h-[300vh] mt-32 md:mt-48">
              <div className="relative lg:sticky top-0 flex h-auto lg:h-screen items-center">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto w-full">
                      <div className="flex flex-col gap-8 lg:gap-12 pt-8 lg:pt-0">
                          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Everything you need. <br /> Nothing you don't.</h2>
                          {features.map((feature, index) => (
                            <div key={feature.id} className="relative pl-8" onClick={() => setActiveFeatureIndex(index)}>
                              <div className={`absolute left-0 top-1 h-3 w-3 rounded-full transition-all duration-300 ${activeFeatureIndex === index ? 'bg-foreground scale-110' : 'bg-muted-foreground/50'}`}>
                                {activeFeatureIndex === index && (
                                  <div className="absolute -inset-1.5 rounded-full bg-foreground/30 blur-lg"></div>
                                )}
                              </div>
                              <h3 className={`font-bold text-xl lg:text-2xl transition-colors duration-300 ${activeFeatureIndex === index ? 'text-foreground' : 'text-muted-foreground/80'}`}>
                                {feature.title}
                              </h3>
                              <div className={`transition-[max-height,opacity,margin] duration-500 ease-in-out overflow-hidden ${activeFeatureIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 lg:max-h-40 opacity-0 lg:opacity-100'}`}>
                                <p className="text-base lg:text-lg text-muted-foreground">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="relative h-[400px] lg:h-[550px] w-full">
                           <div className="feature-display-screen">
                               <div className="feature-display-content">
                                  {features.map((feature, index) => (
                                      <div key={`${feature.id}-visual`} className={`absolute inset-0 p-4 sm:p-8 transition-opacity duration-300 ${activeFeatureIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                          {React.cloneElement(feature.visual, { is_active: activeFeatureIndex === index })}
                                      </div>
                                  ))}
                               </div>
                           </div>
                      </div>
                  </div>
              </div>
              <div className="h-px w-full bg-border/20 absolute bottom-0 hidden lg:block" />
          </section>

          <section id="benefits" className="relative mt-32 md:mt-48 pt-16">
              <div className="h-px w-full bg-border/20 absolute top-0" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-border/20"></div>
              <div className="grid lg:grid-cols-2">
                  <div ref={benefitOneRef} className={`relative transition-opacity duration-700 p-6 sm:p-12 lg:border-r lg:border-border/20 ${benefitOneVisible ? 'opacity-100' : 'opacity-0'}`}>
                      <h3 className="text-2xl font-bold tracking-tighter">Make Smarter Decisions</h3>
                      <p className="mt-2 text-lg text-muted-foreground">Understand your growth drivers to scale your business.</p>
                      <div className="mt-12 flex items-start justify-center lg:justify-start">
                          <img src="/Smart decisions.svg" alt="Dashboard showing key growth metrics" className="w-full h-auto max-w-md" />
                      </div>
                  </div>
                  <div ref={benefitTwoRef} className={`relative transition-opacity duration-700 delay-300 p-6 sm:p-12 ${benefitTwoVisible ? 'opacity-100' : 'opacity-0'}`}>
                      <h3 className="text-2xl font-bold tracking-tighter">Never Lose Sight of Your Runway</h3>
                      <p className="mt-2 text-lg text-muted-foreground">Get an up-to-the-minute forecast so you can plan with confidence.</p>
                      <div className="mt-12 flex items-start justify-center lg:justify-start">
                          <img src="/Sight of runway.svg" alt="Dashboard showing runway forecast" className="w-full h-auto max-w-md" />
                      </div>
                  </div>
              </div>
          </section>

          <section id="pricing" className="mt-32 md:mt-48">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple, transparent pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground">Choose the plan that's right for your stage.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm mx-auto md:max-w-none">
              <Card className="flex flex-col card-darker">
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

              <Card className="flex flex-col border-primary ring-2 ring-primary card-darker">
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

              <Card className="flex flex-col card-darker md:col-span-2 lg:col-span-1 max-w-sm mx-auto md:max-w-none">
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

          <section id="cta" className="mt-32 md:mt-48">
            <Card className="glass-pane relative p-8 sm:p-12 lg:p-16 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />

                <div className="flex flex-col lg:flex-row justify-between items-center gap-x-12 gap-y-8">
                    {/* Left side: Icon + Text */}
                    <div className="flex-1 flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
                        <div className="text-primary/30 flex-shrink-0">
                            <CompassIcon className="w-20 h-20 lg:w-24 lg:h-24" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to take control?</h2>
                            <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                                Swap spreadsheet chaos for automated clarity. See your real-time revenue, cash flow, and runway in one place.
                            </p>
                        </div>
                    </div>

                    {/* Right side: Button */}
                    <div className="flex-shrink-0">
                        <Button size="lg" variant="primary">
                            Sign Up for Free
                        </Button>
                    </div>
                </div>
            </Card>
          </section>
        </main>

        <footer className="mt-24 py-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">&copy; 2025 Arc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
