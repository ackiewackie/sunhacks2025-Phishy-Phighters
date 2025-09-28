import Link from "next/link";

export default function PhishingBasics() {
  return (
    <div className="font-sans min-h-screen bg-[#020122] text-white flex flex-col">
      {/* Hero Section */}
      <header className="text-center py-16 px-6 bg-gradient-to-r from-[#ff521b] to-[#fc9e4f] shadow-lg rounded-b-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f2f3ae]">
          Phishing Basics
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-[#f2f3ae]/90">
          Learn how to recognize and defend against one of the most common
          online threats: phishing.
        </p>
      </header>

      {/* Content Section */}
      <main className="flex-1 px-6 sm:px-20 py-16 space-y-12">
        {/* What is phishing */}
        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">
            🔎 What is Phishing?
          </h2>
          <p className="text-[#f2f3ae]/90 leading-relaxed">
            Phishing is a type of cyberattack where attackers impersonate
            trusted organizations to trick people into revealing sensitive
            information like passwords, credit card numbers, or personal data.
            These attacks usually come in the form of emails, fake websites, or
            text messages.
          </p>
        </section>

        {/* Common examples */}
        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">
            📧 Common Examples
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[#f2f3ae]/90">
            <li>Emails claiming your account will be locked unless you act immediately.</li>
            <li>Fake login pages that mimic trusted websites like banks or email providers.</li>
            <li>Messages offering free prizes, gift cards, or urgent updates.</li>
          </ul>
        </section>

        {/* Red flags */}
        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">
            🚩 Red Flags to Watch For
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[#f2f3ae]/90">
            <li>Misspelled domain names or sender addresses.</li>
            <li>Unusual urgency (“Act now or lose access!”).</li>
            <li>Unexpected attachments or suspicious links.</li>
            <li>Generic greetings like “Dear Customer” instead of your name.</li>
          </ul>
        </section>

        {/* How to protect yourself */}
        <section>
          <h2 className="text-2xl font-bold text-[#edd382] mb-4">
            🛡 How to Protect Yourself
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[#f2f3ae]/90">
            <li>Double-check the sender’s email address and URL.</li>
            <li>Hover over links before clicking to see where they lead.</li>
            <li>Enable multi-factor authentication on important accounts.</li>
            <li>Report suspicious emails to your IT department or provider.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center mt-12">
          <p className="text-lg text-[#f2f3ae]/90 mb-6">
            Ready to put your skills to the test?
          </p>
          <Link
            href="/quiz"
            className="bg-[#ff521b] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#fc9e4f] transition"
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
