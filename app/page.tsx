import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#020122] text-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] rounded-b-3xl shadow-lg">
                
        {/* Phoenix Logo */}
        <div className="relative w-40 h-40 mb-6">
          <Image
            src="/phoenix.png"
            alt="Phoenix logo"
            fill
            className="object-contain drop-shadow-[0_0_20px_#ff521b]"
            priority
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f2f3ae]">
          Rise Above Misinformation
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[#f2f3ae]/90 max-w-2xl">
          Learn how to spot phishing, misinformation, and online threats through interactive modules & quizzes.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/modules"
            className="bg-[#020122] text-[#f2f3ae] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#edd382] hover:text-[#020122] transition"
          >
            Start Learning
          </a>
          <a
            href="/chat"
            className="bg-[#f2f3ae] text-[#020122] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#edd382] transition"
          >
            Take a Quiz
          </a>
           <a
            href="https://chromewebstore.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff521b] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#fc9e4f] transition"
          >
            Add Extension
          </a>
        </div>
      </header>

      {/* Learning Modules Section */}
      <main className="flex-1 px-6 sm:px-20 py-16 space-y-16">
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
                We’ll teach you how to identify suspicious links, urgent
                messages, and common red flags.
              </p>
              <a
                href="/modules/phishing"
                className="mt-4 inline-block text-sm font-semibold text-[#ff521b] hover:underline"
              >
                Start →
              </a>
            </div>

            {/* Spotting Misinformation */}
            <div className="bg-[#edd382] text-[#020122] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-xl mb-2">Spotting Misinformation</h3>
              <p className="text-sm text-[#020122]/80">
                Discover strategies to fact-check sources, recognize bias, and
                avoid spreading misleading content. Critical thinking online
                starts here.
              </p>
              <a
                href="/modules/misinformation"
                className="mt-4 inline-block text-sm font-semibold text-[#ff521b] hover:underline"
              >
                Start →
              </a>
            </div>

            {/* Safe Browsing */}
            <div className="bg-[#edd382] text-[#020122] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-xl mb-2">Safe Browsing</h3>
              <p className="text-sm text-[#020122]/80">
                Protect yourself while navigating the web. Learn about HTTPS,
                secure passwords, multi-factor authentication, and safe download
                practices.
              </p>
              <a
                href="/modules/safe-browsing"
                className="mt-4 inline-block text-sm font-semibold text-[#ff521b] hover:underline"
              >
                Start →
              </a>
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
              Ready to learn?
            </p>
            <a
              href="/quiz"
              className="bg-[#ff521b] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fc9e4f] transition"
            >
              Take a Quiz Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020122] border-t border-[#edd382]/30 py-6 text-center text-sm text-[#edd382]">
        <p>© 2025 PhoenixAI — Built at SunHacks</p>
      </footer>
    </div>
  );
}
