import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ==================================
//      SVG VISUAL COMPONENTS
// ==================================

const RevenueVisual = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path d="M50,250 C150,50 250,150 350,80" fill="url(#revenueGradient)" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
    </svg>
);

const CashflowVisual = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect x="150" y="100" width="100" height="100" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" rx="10"/>
        <text x="175" y="155" fill="hsl(var(--foreground))" className="fade-in-element text-lg" style={{ animationDelay: '2s' }}>Balance</text>
        <path d="M50,125 H150 L140,115 M150,125 L140,135" fill="none" stroke="hsl(142 71% 45%)" strokeWidth="3" className="animate-draw" />
        <path d="M350,175 H250 L260,165 M250,175 L260,185" fill="none" stroke="hsl(0 84% 60%)" strokeWidth="3" className="animate-draw" style={{ animationDelay: '0.5s' }}/>
    </svg>
);

const ForecastingVisual = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
        <text x="120" y="110" fill="hsl(var(--foreground))" className="text-2xl fade-in-element">Runway Forecast</text>
        <rect x="50" y="140" width="300" height="20" fill="hsl(var(--muted))" rx="10" />
        <rect x="50" y="140" width="220" height="20" fill="hsl(var(--primary))" rx="10" className="fade-in-element" style={{ animationDelay: '0.5s', transformOrigin: 'left', animation: 'scale-x 1.5s ease-out forwards' }} />
        <text x="160" y="195" fill="hsl(var(--foreground))" className="text-xl fade-in-element" style={{ animationDelay: '1.5s' }}>18 Months</text>
    </svg>
);

const features = [
  { id: 'revenue', title: 'Real-Time Revenue Tracking', description: 'Forget static reports. Connect your Stripe account in seconds and get an instant, live view of your MRR, ARR, and new subscription growth.', visual: <RevenueVisual /> },
  { id: 'cashflow', title: 'Automated Cash Flow', description: 'Link your bank accounts to see a clear, automated picture of your cash in, cash out, and net burn. No more manual entry, no more guesswork.', visual: <CashflowVisual /> },
  { id: 'forecasting', title: 'Intelligent Runway Forecasting', description: 'Stop wondering how long your cash will last. Our tool analyzes your real-time data to give you an accurate, up-to-the-minute runway forecast.', visual: <ForecastingVisual /> }
];

// ==================================
//      MAIN APP COMPONENT
// ==================================

function App() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  useEffect(() => {
    const featureDivs = document.querySelectorAll('[data-feature]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActiveFeature(entry.target.getAttribute('data-feature'));
          }
        });
      }, { rootMargin: "0px 0px -40% 0px", threshold: 0.6 }
    );
    featureDivs.forEach((div) => observer.observe(div));
    return () => featureDivs.forEach((div) => observer.unobserve(div));
  }, []);

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
            <Button>Sign Up Now</Button>
          </div>
        </header>

        <main className="mt-16 md:mt-24">
          <section id="hero" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Button variant="outline" className="mb-6">Built for Founders, by Founders</Button>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Finance for Founders Who'd Rather Be Building.</h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">Stop wrestling with spreadsheets. We automate your financial reporting so you can focus on your product.</p>
              <div className="mt-8">
                <Button size="lg">Get Started for Free</Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Card className="glass-pane relative h-[450px] bg-card/40 backdrop-blur-lg shadow-2xl shadow-background">
                <CardContent className="p-4">
                  {/* Placeholder for a product screenshot or animation */}
                  <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Product Mockup</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="features" className="mt-32 md:mt-48">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Everything you need.</h2>
              <p className="mt-4 text-lg text-muted-foreground">Nothing you don't.</p>
            </div>
            <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-24 items-start">
              <div className="flex flex-col gap-24">
                {features.map((feature) => (
                  <div key={feature.id} data-feature={feature.id} className="min-h-[250px]">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="mt-4 text-lg text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block sticky top-24">
                <Card className="glass-pane relative h-[550px] bg-card/40 backdrop-blur-lg shadow-2xl shadow-background">
                  <CardContent className="p-0">
                    <div className="p-8 transition-opacity duration-500">
                      {features.find(f => f.id === activeFeature)?.visual}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;