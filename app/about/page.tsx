"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#020122] to-[#1a1a40] text-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-b from-[#ff521b] to-[#fc9e4f] rounded-b-3xl shadow-lg">
        <Link href="/" className="block cursor-pointer">
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
        </Link>
      </header>

      {/* Hero Text */}
      <div className="text-center mt-8 px-6">
        <h1 className="text-4xl font-extrabold text-[#f2f3ae] hover:underline">
          Phishy Waters
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Helping you spot danger and swim safer online.
        </p>
      </div>

      {/* Main Content */}
      <main className=" text-centerflex-1 px-6 sm:px-20 py-16 space-y-16">
        {/* What it does */}
        <section className="max-w-4xl mx-auto bg-[#edd382] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">What Does It Do?</h2>
          <p className="text-lg">
            Phishy Waters gives you control with a simple toggle, request help from Phishy
            whenever you like by switching it on or off. When enabled, he scans the
            content of any webpage you visit and highlights possible phishing
            attempts or misinformation in <strong>real time</strong>.
          </p>
        </section>
        
        {/* Why it’s different */}
        <section className="max-w-4xl mx-auto bg-[#edd382] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Learn As You Go</h2>
          <p className="text-lg">
            Our goal isn’t just to <em>flag content</em>. Phishy also
            explains <strong>why</strong> something is dangerous. By giving you
            quick, clear context, we help you build safer browsing habits that
            last a lifetime.
          </p>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto bg-[#edd382] text-[#020122] rounded-3xl shadow-lg p-10 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <p className="text-lg">
            Add Phishy Waters to your browser and stay one step ahead of
            phishermen.
          </p>
          <a
            href="https://github.com/ackiewackie/sunhacks2025-Phishy-Phighters" // extension folderrrr
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
