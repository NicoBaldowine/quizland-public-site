'use client';

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101827]">
      <main className="flex-grow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 4, 2023</p>
          
          <p className="mb-8 text-gray-300">
            Welcome to Quizland App ("we", "us", or "our"). By creating an account or using our app ("Service"), you ("user" or "you") agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing or using the Service, you agree to comply with and be bound by these Terms. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-gray-300">
              The Service is intended for users who are at least 14 years old. By using the Service, you represent and warrant that you meet this age requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <div className="text-gray-300 space-y-4">
              <p>3.1 To access certain features, you must create an account using a valid email address and password.</p>
              <p>3.2 You agree to provide accurate and complete information during registration and keep it updated.</p>
              <p>3.3 You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
            <div className="text-gray-300 space-y-4">
              <p>4.1 You agree not to create or share content that is violent, sexually inappropriate, offensive, or illegal.</p>
              <p>4.2 You must not use the Service for any unlawful purposes or in a way that infringes the rights of others.</p>
              <p>4.3 We reserve the right to suspend or terminate your account if you violate these Terms.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Content Ownership and License</h2>
            <div className="text-gray-300 space-y-4">
              <p>5.1 All content generated within the Service is owned by us.</p>
              <p>5.2 We grant you a limited, non-exclusive, non-transferable license to use the Service for personal entertainment.</p>
              <p>5.3 You may not reproduce, distribute, or create derivative works from the content without our explicit permission.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <div className="text-gray-300 space-y-4">
              <p>6.1 The Service integrates third-party services such as Firebase by Google and OpenAI's API.</p>
              <p>6.2 Your use of these services is subject to their respective terms and privacy policies.</p>
              <p>6.3 We are not responsible for any third-party content or services.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
            <p className="text-gray-300">
              Your use of the Service is also governed by our{' '}
              <a 
                href="/privacy-policy" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimers</h2>
            <div className="text-gray-300 space-y-4">
              <p>8.1 The Service is provided "as is" without warranties of any kind.</p>
              <p>8.2 We do not guarantee the accuracy or appropriateness of AI-generated content.</p>
              <p>8.3 We are not liable for any damages arising from your use of the Service.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <div className="text-gray-300 space-y-4">
              <p>10.1 We reserve the right to suspend or terminate your account at our sole discretion, without prior notice.</p>
              <p>10.2 You may delete your account at any time through the account settings within the app.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Modifications to Terms</h2>
            <p className="text-gray-300">
              We may update these Terms from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of these Terms and, where feasible, providing notice via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms are governed by and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions or concerns about these Terms, please contact us through our website:{' '}
              <a 
                href="/contact-us" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://quizland.app/contact-us
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Entire Agreement</h2>
            <p className="text-gray-300">
              These Terms constitute the entire agreement between you and us regarding the use of the Service and supersede any prior agreements.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
