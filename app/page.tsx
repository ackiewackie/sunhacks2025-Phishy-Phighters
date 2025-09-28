import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#020122] text-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center">
        {/* Brand Name */}
        <div className="w-full bg-[#020122] py-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#f2f3ae] tracking-wide">
            Phishing Phighters
          </h1>
        </div>

        {/* Phishy Logo */}
        <div className="bg-[#020122] py-6">
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="/phish.png" // replace with your fish logo
              alt="Phishy the Fish Logo"
              fill
              className="object-contain drop-shadow-[0_0_15px_#ff521b]"
              priority
            />
          </div>
        </div>

        {/* Gradient Tagline Section */}
        <div className="w-full bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] py-16 px-6 rounded-b-3xl shadow-lg">
          <p className="text-2xl sm:text-3xl font-bold text-[#f2f3ae] max-w-2xl mx-auto">
            Swim Smarter, Click Safer — Learn how to outsmart scammers with
            Phishy as your guide!
          </p>

          <div className="mt-8 flex justify-center gap-4">
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
        </div>
      </header>

      {/* Rest of the page */}
      <main className="flex-1 px-6 sm:px-20 py-16 space-y-16">
        {/* Learning Modules Section */}
        <section id="modules">
          <h2 className="text-3xl font-bold text-[#edd382] mb-8 text-center">
            Interactive Learning Modules
          </h2>
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
              Quiz with Phishy
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020122] border-t border-[#edd382]/30 py-6 text-center text-sm text-[#edd382]">
        <p>© 2025 Phishing Phighters — Guided by Phishy 🐟</p>
      </footer>
    </div>
  );
}
