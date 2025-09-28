"use client";
import Image from "next/image";
import Link from "next/link";

export default function PhishingBasics() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#020122] to-[#1a1a40] text-white flex flex-col">
      {/* Nav Bar (matches homepage/About) */}
      <header className="bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
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
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center mt-8 px-6">
        <h1 className="text-4xl font-extrabold text-[#f2f3ae]">
          Phishing Basics
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          How can we avoid being baited?
        </p>
      </div>

      {/* Content Section */}
      <main className="flex-1 px-6 sm:px-20 py-16 space-y-16">
        {/* What is phishing */}
        <section className="max-w-4xl mx-auto bg-[#edd382] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">What is Phishing?</h2>
          <p className="text-lg leading-relaxed">
            Phishing is a type of cyberattack where attackers impersonate
            trusted organizations to trick people into revealing sensitive
            information like passwords, credit card numbers, or personal data.
            These attacks usually come in the form of emails, fake websites, or
            text messages.
          </p>
        </section>

        {/* Common examples */}
        <section className="max-w-4xl mx-auto bg-[#f2f3ae] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Common Examples</h2>
          <ul className="list-disc list-inside space-y-2 text-left inline-block text-lg">
            <li>Emails claiming your account will be locked unless you act immediately.</li>
            <li>Fake login pages that mimic trusted websites like banks or email providers.</li>
            <li>Messages offering free prizes, gift cards, or urgent updates.</li>
          </ul>
        </section>

        {/* Red flags */}
        <section className="max-w-4xl mx-auto bg-[#edd382] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Red Flags to Watch For</h2>
          <ul className="list-disc list-inside space-y-2 text-left inline-block text-lg">
            <li>Misspelled domain names or sender addresses.</li>
            <li>Unusual urgency (“Act now or lose access!”).</li>
            <li>Unexpected attachments or suspicious links.</li>
            <li>Generic greetings like “Dear Customer” instead of your name.</li>
          </ul>
        </section>

        {/* How to protect yourself */}
        <section className="max-w-4xl mx-auto bg-[#f2f3ae] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">How to Protect Yourself</h2>
          <ul className="list-disc list-inside space-y-2 text-left inline-block text-lg">
            <li>Double-check the sender’s email address and URL.</li>
            <li>Hover over links before clicking to see where they lead.</li>
            <li>Enable multi-factor authentication on important accounts.</li>
            <li>Report suspicious emails to your IT department or provider.</li>
          </ul>
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#edd382] mb-8">
            Test Your Knowledge
          </h2>
          <div className="bg-[#edd382] text-[#020122] p-10 rounded-3xl shadow-lg">
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
        <p>© 2025 Phishy Phighters — Built at SunHacks</p>
      </footer>
    </div>
  );
}
