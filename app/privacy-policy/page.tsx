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
                <p>We may collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This may include information such as your device&apos;s Internet Protocol address (IP address), browser type, browser version, the pages of our Service that you visit, and other diagnostic data.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <div className="text-gray-300 space-y-4">
              <p>2.1 Account Management: To create and manage your user account.</p>
              <p>2.2 Service Improvement: To monitor usage and improve the Service.</p>
              <p>2.3 Communications: To send you updates, newsletters, and other information that may be of interest to you.</p>
              <p>2.4 Security: To detect, prevent, and address technical issues or unauthorized activities.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <div className="text-gray-300 space-y-4">
              <p>3.1 Data Storage: Your data is stored securely using Firebase by Google. Firebase provides robust security measures to protect your information.</p>
              <p>3.2 Security Measures: We implement industry-standard security protocols, including encryption and secure servers, to protect your personal information.</p>
              <p>3.3 No Method of Transmission is 100% Secure: While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <div className="text-gray-300 space-y-4">
              <p>4.1 Firebase by Google: We use Firebase for data storage and authentication. Your data is processed by Firebase in accordance with their privacy policies.</p>
              <p>4.2 OpenAI API: We use OpenAI&apos;s API to generate quizzes. While we do not share your personal information directly with OpenAI, the content you generate may be processed by their services.</p>
              <p>4.3 No Sale of Personal Data: We do not sell or rent your personal information to third parties.</p>
            </div>
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
