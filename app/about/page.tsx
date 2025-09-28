import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen bg-[#020122] text-white flex flex-col">
      {/* Brand Header */}
      <header className="bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] rounded-b-3xl shadow-lg">
        {/* Nav-style brand row */}
        <div className="flex items-center gap-4 px-6 py-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#f2f3ae] tracking-wide">
            Phishy Phighters
          </h1>
          <div className="relative w-20 h-20">
            <Image
              src="/phish.png"
              alt="Phishy the Fish Logo"
              fill
              className="object-contain drop-shadow-[0_4px_16px_rgba(2,1,34,0.8)]"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 sm:px-20 py-16 space-y-16">
        {/* Hero Intro */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f2f3ae]">
            🐟 About Phishy Waters
          </h2>
          <p className="text-lg sm:text-xl text-[#f2f3ae]/90 max-w-2xl mx-auto">
            Your browser bud that helps you spot scams and misinformation
            while teaching you why they’re dangerous.
          </p>
        </section>

        {/* What it does */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#edd382]">What Does It Do?</h3>
          <p className="text-[#f2f3ae]/90 text-lg">
            Phishy Waters gives you control with a simple toggle. Call for Phishy's help with a simple
            on or off whenever you like. When enabled, he scans the
            content of any webpage you visit and highlights possible phishing
            attempts or misinformation in <strong>real time</strong>.
          </p>
          <div className="relative w-full max-w-md h-64 mx-auto">
            <Image
              src="/phish.png" // placeholder graphic, replace with extension mockup later
              alt="Phishy Waters illustration"
              fill
              className="object-contain drop-shadow-[0_0_20px_#020122]"
            />
          </div>
        </section>

        {/* Why it’s different */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#edd382]">Learn As You Go</h3>
          <p className="text-[#f2f3ae]/90 text-lg">
            Our goal isn’t just to <em>flag content</em>. Phishy also
            explains <strong>why</strong> something is dangerous. By giving you
            quick, clear context, we help you build safer browsing habits that
            last a lifetime.
          </p>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#edd382]">Get Started</h3>
          <p className="text-[#f2f3ae]/90 text-lg">
            Add Phishy Waters to your browser and stay one step ahead of
            Phishermen.
          </p>
          <a
            href="https://chromewebstore.google.com/" // replace with actual extension link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff521b] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#fc9e4f] transition"
          >
            ➕ Add to Chrome
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020122] border-t border-[#edd382]/30 py-6 text-center text-sm text-[#edd382]">
        <p>Phishy Waters - Phishy Phighters</p>
      </footer>
    </div>
  );
}
