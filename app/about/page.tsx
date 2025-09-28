"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020122] to-[#1a1a40] text-white flex flex-col items-center px-6 py-12">
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <Image
          src="/phoenix.png"
          alt="PhoenixGuard Logo"
          width={80}
          height={80}
          className="mx-auto drop-shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-[#f2f3ae] mt-4">
          PhoenixGuard
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Keeping you safe online by teaching, detecting, and providing resources
          against misinformation and phishing threats.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-4xl bg-[#edd382] text-[#020122] rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold">🔍 How It Works</h2>
        <p>
          The PhoenixGuard browser extension lets you{" "}
          <span className="font-semibold">toggle protection on or off</span>. When
          enabled, it scans the content of any webpage you visit and highlights
          possible misinformation or phishing attempts in real time.
        </p>
        <p>
          Our goal isn’t just to flag content — PhoenixGuard also{" "}
          <span className="font-semibold">teaches you why</span> something is
          dangerous, so you can build safer browsing habits that last a lifetime.
        </p>

        {/* Call to action */}
        <div className="flex justify-center mt-8">
          <a
            href="https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID"
            target="_blank"
            className="bg-[#ff521b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#fc9e4f] transition shadow"
          >
            🚀 Add to Chrome
          </a>
        </div>
      </div>

      {/* Resources & mission */}
      <div className="max-w-4xl mt-12 space-y-6 text-center">
        <h2 className="text-2xl font-bold text-[#f2f3ae]">🌍 Our Mission</h2>
        <p className="text-gray-200">
          PhoenixGuard is part of the greater <span className="font-semibold">PhoenixAI</span> initiative:  
          using technology to empower safe digital citizens. We believe online
          safety comes from both <span className="font-semibold">protection</span> and{" "}
          <span className="font-semibold">education</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-[#f2f3ae]">📖 Learn</h3>
            <p className="text-sm text-gray-200">
              Explore tips and modules on phishing, scams, and misinformation.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-[#f2f3ae]">🛡 Protect</h3>
            <p className="text-sm text-gray-200">
              Scan your pages with PhoenixGuard for instant threat detection.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-[#f2f3ae]">🌱 Grow</h3>
            <p className="text-sm text-gray-200">
              Build lifelong safe browsing skills with our guided resources.
            </p>
          </div>
        </div>
      </div>

      {/* Back home */}
      <div className="mt-12">
        <Link
          href="/"
          className="text-center bg-[#ff521b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#fc9e4f] transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
