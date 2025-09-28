import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#020122] text-white flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] py-12 px-6 rounded-b-3xl shadow-lg flex flex-col items-center">
        {/* Title + Logo row */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f2f3ae] tracking-wide">
            Phishing Phighters
          </h1>
          <div className="relative w-28 h-28">
            <Image
              src="/phish.png" // your Phishy logo
              alt="Phishy the Fish Logo"
              fill
              className="object-contain drop-shadow-[0_4px_16px_rgba(2,1,34,0.8)]"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl font-bold text-[#f2f3ae] max-w-2xl text-center">
          Swim Smarter, Click Safer
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/chat"
            className="bg-[#f2f3ae] text-[#020122] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#edd382] transition"
          >
            Start Learning
          </a>
          <a
            href="/about"
            className="bg-[#020122] text-[#f2f3ae] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#edd382] hover:text-[#020122] transition"
          >
            Add Extension
          </a>
        </div>
      </header>

      {/* Rest of the page */}
      <main className="flex-1 px-6 sm:px-20 py-16 space-y-16">
        {/* Learning Modules Section */}
        <section id="modules">
          <h2 className="text-3xl font-bold text-[#edd382] mb-2 text-center">
            Interactive Learning Modules
          </h2>
          <p className="text-center text-[#f2f3ae]/90 mb-8">
            Let Phishy guide you to spot scams and fight misinformation!
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phishing Basics */}
            <div className="bg-[#edd382] text-[#020122] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-xl mb-2">Phishing Basics</h3>
              <p className="text-sm text-[#020122]/80">
                Learn how attackers trick users with fake emails and websites.
                Phishy will help you spot suspicious links, urgent messages,
                and common red flags.
              </p>
            </div>

            {/* Spotting Misinformation */}
            <div className="bg-[#edd382] text-[#020122] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-xl mb-2">Spotting Misinformation</h3>
              <p className="text-sm text-[#020122]/80">
                Discover strategies to fact-check sources, recognize bias,
                and avoid spreading misleading content.
              </p>
            </div>

            {/* Safe Browsing */}
            <div className="bg-[#edd382] text-[#020122] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-xl mb-2">Safe Browsing</h3>
              <p className="text-sm text-[#020122]/80">
                Protect yourself while navigating the web. Learn about HTTPS,
                secure passwords, multi-factor authentication, and safe download practices.
              </p>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz">
          <h2 className="text-3xl font-bold text-[#edd382] mb-8 text-center">
            Test Your Knowledge
          </h2>
          <div className="bg-[#f2f3ae] text-[#020122] p-10 rounded-3xl shadow-lg text-center">
            <p className="text-lg font-medium mb-6">
              Can you outsmart the phishers? 🎣
            </p>
            <a
              href="/quiz"
              className="bg-[#ff521b] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fc9e4f] transition"
            >
              Learn with Phishy
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020122] border-t border-[#edd382]/30 py-6 text-center text-sm text-[#edd382]">
        <p>Phishing Phighters - Swim in a School of Phishes!</p>
      </footer>
    </div>
  );
}
