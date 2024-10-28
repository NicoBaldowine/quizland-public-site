'use client';

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101827]">
      <main className="flex-grow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Quizland, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our service.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
            <p className="mb-4">
              Quizland is designed for educational and entertainment purposes. Users are expected to use the service responsibly and in accordance with these terms.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              To access certain features of Quizland, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              All content and materials available on Quizland, including but not limited to text, graphics, website name, code, images and logos are the intellectual property of Quizland and are protected by applicable copyright and trademark law.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
