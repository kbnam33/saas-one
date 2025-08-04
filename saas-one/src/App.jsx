import { useEffect } from 'react';

function App() {
  // This hook handles the scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
    return () => animatedElements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <div id="app" className="container mx-auto px-6 py-4">
      {/* ============== HEADER ============== */}
      <header className="flex justify-between items-center py-4">
        <div className="text-xl font-bold">[Your Logo]</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-brand-muted hover:text-brand-light transition-colors">Features</a>
          <a href="#pricing" className="text-brand-muted hover:text-brand-light transition-colors">Pricing</a>
          <a href="#login" className="text-brand-muted hover:text-brand-light transition-colors">Login</a>
        </nav>
        <a href="#cta" className="bg-brand-accent text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-transform hover:scale-105">
          Sign Up Now
        </a>
      </header>

      <main className="mt-16 md:mt-24">
        {/* ============== CHAPTER 1: THE HOOK (HERO) ============== */}
        <section id="hero" className="text-center max-w-3xl mx-auto fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Finance for Founders Who'd Rather Be Building.</h1>
          <p className="mt-6 text-lg md:text-xl text-brand-muted max-w-2xl mx-auto">Stop wrestling with spreadsheets. We automate your financial reporting—from revenue tracking to cash flow forecasting—so you can focus on your product.</p>
          <div className="mt-8">
            <a href="#cta" className="bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-transform hover:scale-105">
              Get Started for Free
            </a>
          </div>
        </section>

        {/* ============== CHAPTER 2: THE PROBLEM ============== */}
        <section id="problem" className="text-center mt-32 md:mt-48 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Tired of spreadsheet chaos?</h2>
          <p className="mt-4 text-lg text-brand-muted">You didn't start a business to become a part-time accountant. We get it.</p>
          <div className="mt-8 h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
            <p className="text-brand-muted">[Visual Direction: An animated SVG showing tangled lines untangling into a single, clean line.]</p>
          </div>
        </section>

        {/* ============== CHAPTER 3: THE SOLUTION ============== */}
        <section id="solution" className="text-center mt-32 md:mt-48 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Meet [Your Brand Name]. Your financial co-pilot.</h2>
          <p className="mt-4 text-lg text-brand-muted">We automate the tedious work and translate your data into clear, actionable insights.</p>
          <div className="mt-8 h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
            <p className="text-brand-muted">[Visual Direction: A sleek, glowing UI mockup of the product's main dashboard.]</p>
          </div>
        </section>

        {/* ============== CHAPTER 4: THE DEMONSTRATION (FEATURES) ============== */}
        <section id="features" className="mt-32 md:mt-48 fade-in-up">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Everything you need. Nothing you don't.</h2>
            <p className="mt-4 text-lg text-brand-muted">Explore our core features designed for founders.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 transition-all hover:border-brand-accent/50 hover:bg-white/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold">Real-Time Revenue Tracking</h3>
              <p className="mt-2 text-brand-muted">Connect your Stripe account and see MRR, ARR, and new subscriptions instantly.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 transition-all hover:border-brand-accent/50 hover:bg-white/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold">Automated Cash Flow</h3>
              <p className="mt-2 text-brand-muted">Link your bank accounts to see a clear picture of your cash in, cash out, and net burn.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 transition-all hover:border-brand-accent/50 hover:bg-white/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold">Intelligent Runway Forecasting</h3>
              <p className="mt-2 text-brand-muted">Know exactly how many months of runway you have left based on real-time data.</p>
            </div>
          </div>
        </section>

        {/* ============== CHAPTER 5: SOCIAL PROOF ============== */}
        <section id="social-proof" className="text-center mt-32 md:mt-48 max-w-3xl mx-auto fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Built for modern teams you trust.</h2>
          <div className="mt-12 text-center p-8 bg-white/5 rounded-xl border border-white/10">
            <p className="text-2xl italic">"This is the first finance tool that feels like it was built by people who actually understand startups."</p>
            <p className="mt-6 font-bold text-lg">Alex Cohen</p>
            <p className="text-brand-muted">CEO at SynthWave AI</p>
          </div>
        </section>

        {/* ============== CHAPTER 6: FINAL CTA ============== */}
        <section id="cta" className="text-center mt-32 md:mt-48 bg-brand-accent/10 py-20 rounded-xl border border-brand-accent/20 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to take control of your finances?</h2>
          <p className="mt-4 text-lg text-brand-muted">Sign up in minutes. No credit card required.</p>
          <div className="mt-8">
            <a href="#signup" className="bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-transform hover:scale-105">
              Sign Up for Free
            </a>
          </div>
        </section>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="text-center text-brand-muted py-16 mt-16 border-t border-white/10 fade-in-up">
        <p>&copy; 2025 [Your Brand Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;