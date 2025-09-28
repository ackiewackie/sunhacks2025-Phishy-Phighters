"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020122] to-[#1a1a40] text-white flex flex-col items-center px-6 py-12">
      {/* Header */}
      <Link href="/" className="max-w-4xl text-center mb-12 block cursor-pointer">
        <header className="bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] rounded-b-3xl shadow-lg">
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
      </Link>
      
        <h1 className="text-4xl font-extrabold text-[#f2f3ae] mt-4 hover:underline">
          Phishy Waters
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Helping you spot misinformation and phishing attempts in real time —
          while teaching you how to stay safe online.
        </p>

      {/* How it works */}
      <div className="max-w-4xl bg-[#edd382] text-[#020122] rounded-3xl shadow-lg p-8 space-y-6 mb-12">
        <h2 className="text-2xl font-bold">🔍 How It Works</h2>
        <p>
          The <span className="font-semibold">Phishy Waters</span> extension lets
          you toggle protection on or off. When enabled, it scans the content of
          any webpage you visit and highlights possible misinformation or phishing
          attempts in real time.
        </p>
        <p>
          Our goal isn’t just to flag content — Phishy Waters also{" "}
          <span className="font-semibold">teaches you why</span> something is
          dangerous, so you can build safer browsing habits that last a lifetime.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-6">
          <a
            href="https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID"
            target="_blank"
            className="bg-[#ff521b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#fc9e4f] transition shadow"
          >
            🚀 Add to Chrome
          </a>
        </div>
      </div>

      {/* Mission box */}
      <div className="max-w-4xl bg-white/10 rounded-3xl shadow-lg p-8 text-center space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-[#f2f3ae]">🌍 Our Mission</h2>
        <p className="text-gray-200">
          Phishy Waters is part of the greater{" "}
          <span className="font-semibold">Phishing Phighters</span> initiative:  
          using technology to empower safe digital citizens. We believe online
          safety comes from both <span className="font-semibold">protection</span>{" "}
          and <span className="font-semibold">education</span>.
        </p>
      </div>

      {/* Features box grid */}
      <div className="max-w-4xl grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#edd382] text-[#020122] rounded-2xl p-6 shadow">
          <h3 className="font-semibold text-lg">📖 Learn</h3>
          <p className="text-sm mt-2">
            Explore tips and modules on phishing, scams, and misinformation.
          </p>
        </div>
        <div className="bg-[#edd382] text-[#020122] rounded-2xl p-6 shadow">
          <h3 className="font-semibold text-lg">🛡 Protect</h3>
          <p className="text-sm mt-2">
            Scan your pages with Phishy Waters for instant threat detection.
          </p>
        </div>
        <div className="bg-[#edd382] text-[#020122] rounded-2xl p-6 shadow">
          <h3 className="font-semibold text-lg">🌱 Grow</h3>
          <p className="text-sm mt-2">
            Build lifelong safe browsing skills with our guided resources.
          </p>
        </div>
      </div>

      {/* Back home */}
      <div className="mt-6">
        <Link
          href="/"
          className="text-center bg-[#ff521b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#fc9e4f] transition shadow"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
