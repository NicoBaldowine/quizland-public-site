'use client';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101827]">
      <main className="flex-grow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 4, 2023</p>

          <p className="mb-8 text-gray-300">
            At Quizland App (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our app (&quot;Service&quot;). By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1.1 Personal Information</h3>
                <p>Email Address: When you create an account, we collect your email address. This is the only personal information we collect directly from you.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">1.2 Usage Data</h3>
                <p>We may collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your device's Internet Protocol address (IP address), browser type, browser version, the pages of our Service that you visit, and other diagnostic data.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the collected data for various purposes:</p>
            <div className="text-gray-300 space-y-4">
              <p>2.1 Account Management: To create and manage your user account.</p>
              <p>2.2 Service Improvement: To monitor usage and improve the Service.</p>
              <p>2.3 Communications: To send you updates, newsletters, and other information that may be of interest to you.</p>
              <p>2.4 Security: To detect, prevent, and address technical issues or unauthorized activities.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="mb-4">
              Quizland takes appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You can manage your data through your account settings or by contacting our support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p className="mb-4">
              We may use third-party services to improve our Service and provide a better user experience. These services may collect information used to identify you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Analytics</h2>
            <p className="mb-4">
              We may use analytics tools to analyze how users use the Service. These tools may collect information sent by your browser or mobile device, including the pages you visit and other interaction data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Advertising</h2>
            <p className="mb-4">
              We may use third-party advertising companies to serve ads when you visit the Service. These companies may use information about your visits to the Service and other websites to provide advertisements about goods and services of interest to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
            <p className="mb-4">
              We use cookies to enhance your experience on the Service. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Sharing</h2>
            <p className="mb-4">
              We may share your personal information with third parties in certain circumstances, such as when required by law or to protect our rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
            <p className="mb-4">
              We will retain your personal information for as long as necessary to provide the Service and for other legitimate business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions or concerns about this Privacy Policy, please contact us:<br />
              Contact Form:{' '}
              <a 
                href="/contact-us" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://quizland.app/contact-us
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
