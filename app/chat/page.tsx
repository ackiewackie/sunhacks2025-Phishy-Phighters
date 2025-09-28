import Link from "next/link";
import Image from "next/image";

export default function PhishingBasics() {
  return (
    <div className="font-sans min-h-screen bg-[#020122] text-white flex flex-col">
      {/* Hero */}
      <header className="text-center py-16 px-6 bg-gradient-to-r from-[#ff521b] to-[#fc9e4f] shadow-lg rounded-b-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f2f3ae]">
          Phishing Basics
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-[#f2f3ae]/90">
          Learn how to recognize and defend against one of the most common
          online threats: phishing.
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 sm:px-20 py-12 space-y-12">
        {/* Content */}
        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">🔎 What is Phishing?</h2>
          <p className="text-[#f2f3ae]/90 leading-relaxed">
            Phishing is a type of cyberattack where attackers impersonate trusted
            organizations to trick people into revealing sensitive information
            like passwords, credit card numbers, or personal data. These attacks
            usually come in the form of emails, fake websites, or text messages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">📧 Common Examples</h2>
          <ul className="list-disc list-inside space-y-2 text-[#f2f3ae]/90">
            <li>Emails claiming your account will be locked unless you act immediately.</li>
            <li>Fake login pages that mimic trusted websites.</li>
            <li>Messages offering fake prizes or urgent requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">🚩 Red Flags to Watch For</h2>
          <ul className="list-disc list-inside space-y-2 text-[#f2f3ae]/90">
            <li>Misspelled domain names or sender addresses.</li>
            <li>Urgency, unexpected attachments, or requests for personal info.</li>
            <li>Generic greetings instead of your real name.</li>
          </ul>
        </section>

        {/* RESOURCES */}
        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">📚 Resources</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Resource card (download) */}
            <div className="bg-[#f2f3ae] text-[#020122] p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Download: Phishing Quick Guide (PDF)</h3>
              <p className="text-sm mb-4 text-[#020122]/80">
                A concise one-page summary of phishing red flags & protection steps — great for training and handouts.
              </p>

              {/* Link to the PDF in public/modules/phishing/ */}
              <a
                href="/modules/phishing/resource.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ff521b] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#fc9e4f] transition"
              >
                Open / Download PDF
              </a>

              <p className="mt-3 text-xs text-[#020122]/70">
                Tip: Put the file at <code className="bg-black/[.05] px-1 rounded">public/modules/phishing/resource.pdf</code> in your repo.
              </p>
            </div>

            {/* Embedded preview (if PDF exists) */}
            <div className="bg-[#020122] text-[#f2f3ae] p-4 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Preview</h3>
              <p className="text-sm mb-3 text-[#f2f3ae]/80">
                If `resource.pdf` is present, a preview will render below. Otherwise the area shows a placeholder link.
              </p>

              {/* PDF embed (falls back to link if browser can't render) */}
              <div className="h-[220px] bg-white/5 rounded overflow-hidden">
                <object
                  data="/modules/phishing/resource.pdf"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="p-6 text-sm text-[#f2f3ae]/80">
                    No preview available —{" "}
                    <a
                      href="/modules/phishing/resource.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff521b] hover:underline"
                    >
                      open the PDF
                    </a>
                    .
                  </div>
                </object>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-6">
          <p className="text-lg text-[#f2f3ae]/90 mb-4">Ready to test your knowledge?</p>
          <Link
            href="/quiz"
            className="bg-[#ff521b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#fc9e4f] transition"
          >
            Take the Phishing Quiz →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020122] border-t border-[#edd382]/30 py-6 text-center text-sm text-[#edd382]">
        <p>© 2025 PhoenixAI — Built at SunHacks</p>
      </footer>
    </div>
  );
}
